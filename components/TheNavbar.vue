<!-- components/Navbar.vue -->
<template>
  <nav class="bg-white  px-4 py-3">
    <div class="container mx-auto flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center">
        <img src="../assets/images/1.png" alt="Logo" class="h-10 w-auto" />
      </NuxtLink>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center space-x-8">
        <NuxtLink to="/" class="text-gray-700 hover:text-blue-600 font-medium">Home</NuxtLink>
        <NuxtLink to="/menu" class="text-gray-700 hover:text-blue-600 font-medium">Menu</NuxtLink>
        <NuxtLink to="/contact" class="text-gray-700 hover:text-blue-600 font-medium">Contact Us</NuxtLink>
      </div>

      <!-- Cart Button -->
      <button @click="cartStore.toggleCart"class="hidden md:flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <span>{{ cartStore.cartCount }}</span>
      </button>

      <!-- Mobile Menu Button -->
      <div class="md:hidden flex items-center">
        <button @click="toggleMobileMenu" class="text-gray-500 hover:text-gray-700 focus:outline-none mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Mobile Cart Button -->
        <button @click="cartStore.toggleCart" class="text-gray-500 hover:text-gray-700 focus:outline-none">
          <div class="relative">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span
              class="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {{ cartStore.cartCount }}
            </span>
          </div>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isMobileMenuOpen" class="md:hidden mt-4 pt-4 border-t">
      <div class="flex flex-col space-y-4">
        <NuxtLink to="/" class="text-gray-700 hover:text-blue-600 font-medium">Home</NuxtLink>
        <NuxtLink to="/menu" class="text-gray-700 hover:text-blue-600 font-medium">Menu</NuxtLink>
        <NuxtLink to="/contact" class="text-gray-700 hover:text-blue-600 font-medium">Contact Us</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { useCartStore } from '~/stores/cartStore';

const cartStore = useCartStore();

// Props or state for cart item count
// In a real app, this would come from your store or API


// Mobile menu state
const isMobileMenuOpen = ref(false);

// Toggle mobile menu
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>