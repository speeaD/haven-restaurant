<template>
    <section class="chef" id="chef">
      <img src="~/assets/images/topping.png" alt="topping" class="chef__bg" />
      <div class="section__container chef__container">
        <div class="chef__image">
          <img src="~/assets/images/chef.png" alt="chef" />
        </div>
        <div class="chef__content">
          <h2 class="section__header">Cooked By The Best Chefs In The World</h2>
          <p class="section__description">
            Experience culinary excellence crafted by master chefs from around
            the globe. Our team of culinary virtuosos brings together expertise,
            innovation, and passion to create unforgettable dining experiences
            that redefine gastronomy.
          </p>
          <ul class="chef__list">
            <li v-for="(item, index) in chefHighlights" :key="index">
              <span><i class="ri-checkbox-fill"></i></span>
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  
  const chefHighlights = ref([
    'Savour culinary brilliance from master chefs worldwide.',
    'Experience innovative creations with attention to detail.',
    'Enjoy dishes crafted with an unwavering passion for perfection.'
  ]);
  
  onMounted(() => {
    if (process.client) {
      const { initChefAnimation } = useScrollReveal();
      initChefAnimation();
    }
  });
  </script>