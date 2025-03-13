<template>
    <div class="flex flex-wrap border-b-4 border-gray-200 pb-2 pt-2">
      <button 
        v-for="subcategory in subcategories" 
        :key="subcategory.id"
        @click="selectSubcategory(subcategory)"
        :class="[
          'flex items-center px-6 py-4 text-sm font-medium focus:outline-none',
          selectedSubcategory === subcategory.id ? 'bg-amber-500 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
        ]"
      >
        <span v-if="subcategory.icon" class="mr-2">
          <i :class="subcategory.icon"></i>
        </span>
        {{ subcategory.name }}
      </button>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    subcategories: {
      type: Array,
      required: true
    }
  })
  
  const emit = defineEmits(['select-subcategory'])
  const selectedSubcategory = ref(props.subcategories[0]?.id || null)
  
  const selectSubcategory = (subcategory) => {
    selectedSubcategory.value = subcategory.id
    emit('select-subcategory', subcategory.id)
  }
  
  // Initialize with first subcategory
  onMounted(() => {
    if (props.subcategories.length > 0) {
      emit('select-subcategory', selectedSubcategory.value)
    }
  })
  </script>