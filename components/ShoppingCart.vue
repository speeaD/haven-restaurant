<!-- components/ShoppingCart.vue -->
<template>
    <div v-if="isOpen" class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="cart-title" role="dialog" aria-modal="true">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <!-- Background overlay -->
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" @click="closeCart"></div>
        
        <!-- Cart panel -->
        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                <h3 class="text-lg font-medium leading-6 text-gray-900" id="cart-title">
                  Your Cart
                </h3>
                <div class="mt-4 space-y-4">
                  <div v-if="cartItems.length === 0" class="text-center py-8">
                    Your cart is empty
                  </div>
                  <div v-for="(item, index) in cartItems" :key="index" class="flex justify-between items-center py-4 border-b">
                    <div class="flex items-center">
                      <img :src="getImageUrl(item)" alt="Product image" class="h-16 w-16 object-cover rounded" />
                      <div class="ml-4">
                        <h4 class="text-sm font-medium">{{ item.name }}</h4>
                        <p class="text-sm text-gray-500">₦{{ item.price }}</p>
                      </div>
                    </div>
                    <div class="flex items-center">
                      <div class="flex items-center border rounded">
                        <button @click="updateQuantity(index, item.quantity - 1)" class="px-2 py-1 text-gray-600 hover:text-gray-800">
                          -
                        </button>
                        <span class="px-2">{{ item.quantity }}</span>
                        <button @click="updateQuantity(index, item.quantity + 1)" class="px-2 py-1 text-gray-600 hover:text-gray-800">
                          +
                        </button>
                      </div>
                      <button @click="removeItem(index)" class="ml-3 text-red-500 hover:text-red-700">
                        <span class="sr-only">Remove</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="mt-6 border-t border-gray-200 pt-4">
                  <div class="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>₦{{ cartTotal }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button @click="checkout" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm">
              Checkout
            </button>
            <button @click="closeCart" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  
  const props = defineProps({
    isOpen: {
      type: Boolean,
      default: false
    },
    cartItems: {
      type: Array,
      default: () => []
    }
  });
  const config = useRuntimeConfig()
  
  const emit = defineEmits(['close', 'remove-item', 'checkout', 'update-quantity']);
  
  const closeCart = () => {
    emit('close');
  };
  
  const removeItem = (index) => {
    emit('remove-item', index);
  };
  
  const updateQuantity = (index, quantity) => {
    emit('update-quantity', index, quantity);
  };
  
  const checkout = () => {
    emit('checkout');
  };
  
  const cartTotal = computed(() => {
    return props.cartItems.reduce((total, item) => total + (parseFloat(item.price) * item.quantity), 0).toFixed(2);
  });

  const getImageUrl = (item) => {
  if (item.image) {
    console.log(item)
    return `${config.public.pocketbaseUrl}/api/files/${item.collectionId}/${item.id}/${item.image}`
  }
  return '/images/placeholder-food.jpg'
}
  </script>