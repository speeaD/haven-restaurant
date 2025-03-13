<template>
    <div class="flex flex-wrap border-b-4 border-gray-200 pb-2">
      <button 
        v-for="category in categories" 
        :key="category.id"
        @click="selectCategory(category)"
        :class="[
          'flex items-center px-6 py-4 text-sm font-medium focus:outline-none',
          selectedCategory === category.id ? 'bg-amber-500 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
        ]"
      >
        <span v-if="category.icon" class="mr-2">
          <i :class="category.icon"></i>
        </span>
        {{ category.name }}
      </button>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    categories: {
      type: Array,
      required: true
    }
  })
  
  const emit = defineEmits(['select-category'])
  const selectedCategory = ref(props.categories[0]?.id || null)
  
  const selectCategory = (category) => {
    selectedCategory.value = category.id
    emit('select-category', category.id)
  }
  
  // Initialize with first category
  onMounted(() => {
    if (props.categories.length > 0) {
      emit('select-category', selectedCategory.value)
    }
  })
  </script>