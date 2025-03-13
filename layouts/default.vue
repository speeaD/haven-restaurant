<template>
    <div>
      <TheNavbar />
      <slot />
      <TheFooter />
      <ShoppingCart :is-open="cartStore.isOpen" :cart-items="cartStore.items" @close="cartStore.closeCart"
      @remove-item="cartStore.removeItem" @update-quantity="cartStore.updateQuantity" @checkout="cartStore.checkout" />
    </div>
  </template>
  
  <script setup lang="ts">
  import { useCartStore } from '~/stores/cartStore';
  const cartStore = useCartStore();
  // All components are auto-imported by Nuxt
  </script>