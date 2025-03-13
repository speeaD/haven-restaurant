import PocketBase from 'pocketbase'
import { type Ref, ref, reactive } from 'vue'
import { useRuntimeConfig } from 'nuxt/app'

// Define interfaces for your data structures
interface Category {
  id: string
  name: string
  order: number
  [key: string]: any
}

interface Subcategory {
  id: string
  name: string
  category: string
  order: number
  [key: string]: any
}

interface MenuItem {
  id: string
  name: string
  subcategory: string
  expand?: {
    subcategory: Subcategory
  }
  [key: string]: any
}

interface LoadingState {
  categories: boolean
  subcategories: boolean
  menuItems: boolean
}

export function usePocketbase() {
  const config = useRuntimeConfig()
  const pb = new PocketBase(config.public.pocketbaseUrl)
  
  // Cached data
  const menuItems: Ref<MenuItem[]> = ref([])
  const categories: Ref<Category[]> = ref([])
  const subcategories: Ref<Subcategory[]> = ref([])
  
  // Granular loading states
  const loading = reactive<LoadingState>({
    categories: false,
    subcategories: false,
    menuItems: false
  })
  
  const error: Ref<string | null> = ref(null)
  
  // Cache for previously fetched data to avoid redundant API calls
  const cache = reactive({
    subcategories: new Map<string, Subcategory[]>(),
    menuItems: new Map<string, MenuItem[]>()
  })

  const fetchCategories = async () => {
    if (loading.categories) return categories.value
    if (categories.value.length > 0) return categories.value
    
    try {
      loading.categories = true
      error.value = null
      
      const records = await pb.collection('categories').getFullList<Category>({
        sort: 'order',
      })
      
      categories.value = records
      loading.categories = false
      return records
    } catch (err: unknown) {
      error.value = err instanceof Error ? err.message : 'An unknown error occurred'
      loading.categories = false
      return []
    }
  }

  const fetchSubcategories = async (categoryId?: string) => {
    if (loading.subcategories) return subcategories.value
    
    // Use cached data if available
    if (categoryId && cache.subcategories.has(categoryId)) {
      subcategories.value = cache.subcategories.get(categoryId) || []
      return subcategories.value
    }
    
    try {
      loading.subcategories = true
      error.value = null
      const records = await pb.collection('subcategories').getFullList<Subcategory>({
        filter: categoryId ? `category="${categoryId}"` : '',
        
      })
      
      subcategories.value = records
      // Cache the results
      if (categoryId) {
        cache.subcategories.set(categoryId, records)
      }
      
      loading.subcategories = false
      return records
    } catch (err: unknown) {
      error.value = err instanceof Error ? err.message : 'An unknown error occurred'
      loading.subcategories = false
      return []
    }
  }

  const fetchMenuItems = async (subcategoryId?: string) => {
    if (loading.menuItems) return menuItems.value
    
    // Use cached data if available
    if (subcategoryId && cache.menuItems.has(subcategoryId)) {
      menuItems.value = cache.menuItems.get(subcategoryId) || []
      return menuItems.value
    }
    
    try {
      loading.menuItems = true
      error.value = null
      
      const records = await pb.collection('menu_items').getFullList<MenuItem>({
        filter: subcategoryId ? `subcategory="${subcategoryId}"` : '',
        sort: 'name',
        expand: 'subcategory',
      })

      
      menuItems.value = records
      
      // Cache the results
      if (subcategoryId) {
        cache.menuItems.set(subcategoryId, records)
      }
      
      loading.menuItems = false
      return records
    } catch (err: unknown) {
      error.value = err instanceof Error ? err.message : 'An unknown error occurred'
      loading.menuItems = false
      return []
    }
  }
  
  const clearCache = () => {
    cache.subcategories.clear()
    cache.menuItems.clear()
  }
  
  const clearData = () => {
    categories.value = []
    subcategories.value = []
    menuItems.value = []
    error.value = null
    clearCache()
  }

  return {
    pb,
    menuItems,
    categories,
    subcategories,
    loading,
    error,
    fetchCategories,
    fetchSubcategories,
    fetchMenuItems,
    clearCache,
    clearData
  }
}