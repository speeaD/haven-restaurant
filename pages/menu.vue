<template>
  <div>
    <main class="container mx-auto px-4 py-8">
      <div v-if="loading.categories == true" class="flex justify-center items-center h-64">
        <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
      </div>
      <div v-else>
        <CategoryTabs :categories="categories" @select-category="handleCategorySelect" />
        <SubCategories v-if="showSubcategories && currentCategory === selected" :subcategories="subcategories"
          @select-subcategory="handleSubcategorySelect" />
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          <MenuItem v-for="item in menuItems" :key="item.id" :item="item" />
        </div>
      </div>
    </main>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { usePocketbase } from '~/composables/usePocketbase'

const {
  loading,
  error,
  categories,
  subcategories,
  menuItems,
  fetchCategories,
  fetchSubcategories,
  fetchMenuItems
} = usePocketbase()

const currentCategory = ref(null)
const currentSubcategory = ref(null)
const showSubcategories = ref(false)
const selected = ref(null)

const handleCategorySelect = async (categoryId) => {
  const selectedCategory = categories.value.find(c => c.id === categoryId);
  selected.value = selectedCategory?.slug || null;
  currentCategory.value = selectedCategory?.slug || null;

  // Check if the selected category should display subcategories
  const categoryWithSubcategories = ['food', 'drinks']; // Add more categories here as needed
  console.log(selectedCategory, categoryWithSubcategories, categoryId)
  if (selectedCategory && categoryWithSubcategories.includes(selectedCategory.slug)) {
    
    await fetchSubcategories(categoryId);
    showSubcategories.value = true;
  } else {
    await fetchMenuItems(categoryId); // Pass categoryId to filter by selected category
  }
}

const handleSubcategorySelect = async (subcategoryId) => {
  currentSubcategory.value = subcategoryId
  await fetchMenuItems(subcategoryId)
}

onMounted(async () => {
  await fetchCategories().then(() => {
    if (categories.value.length > 0) {
      const categoryMap = {
        food: categories.value.find(c => c.slug === 'food'),
        drinks: categories.value.find(c => c.slug === 'drinks')
      };

      if (categoryMap[currentCategory.value]) {
        console.log(categoryMap[currentCategory.value])
        fetchSubcategories(categoryMap[currentCategory.value].id);
        showSubcategories.value = true;

        if (subcategories.value.length > 0) {
          fetchMenuItems(subcategories.value[0].id);
        }
      }
    }
  })

  //   // Set default values for initial load
  //   // if (categories.value.length > 0) {
  //   //   const foodCategory = categories.value.find(c => c.slug === 'food')
  //   //   if (foodCategory) {
  //   //     currentCategory.value = 'food'
  //   //     await fetchSubcategories(foodCategory.id)
  //   //     showSubcategories.value = true

  //   //     if (subcategories.value.length > 0) {
  //   //       await fetchMenuItems(subcategories.value[0].id)
  //   //     }
  //   //   }
  //   // }
})

</script>