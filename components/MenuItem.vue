<template>
  <div class="menu-item bg-white rounded-lg overflow-hidden shadow-md min-h-4">
    <div class="relative">
      <img :src="getImageUrl(item)" :alt="item.name" class="w-full h-48 object-cover" />
      <div class="absolute top-0 right-0 bg-amber-500 text-white px-3 py-1 font-bold">
        ₦{{ item.price.toLocaleString() }}
      </div>
    </div>
    <div class="p-4">
      <h3 class="text-lg font-bold">{{ item.name }}</h3>
      <p class="text-sm text-gray-600 mt-2">{{ item.description }}</p>
    </div>
    <button @click="addToCart"
      class="mt-4 w-full bg-amber-500 text-white py-2 px-4 rounded-lg hover:bg-amber-600 transition duration-300 ease-in-out">
      Add to Cart
    </button>
  </div>
</template>

<script setup>
import { useCartStore } from '~/stores/cartStore';



const cartStore = useCartStore();

const addToCart = () => {
  cartStore.addItem(props.item);
  cartStore.cartCount ++;
};

const config = useRuntimeConfig()
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const getImageUrl = (item) => {
  if (item.image) {

    return `${config.public.pocketbaseUrl}/api/files/${item.collectionId}/${item.id}/${item.image}`
  }
  return '/images/placeholder-food.jpg'
}
</script>