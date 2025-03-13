<template>
    <section class="section__container banner__container">
      <div v-for="(item, index) in bannerItems" :key="index" class="banner__card">
        <span class="banner__icon"><i :class="item.icon"></i></span>
        <h4>{{ item.title }}</h4>
        <p>{{ item.description }}</p>
        <a href="#">
          Read more
          <span><i class="ri-arrow-right-line"></i></span>
        </a>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  
  interface BannerItem {
    icon: string;
    title: string;
    description: string;
  }
  
  const bannerItems = ref<BannerItem[]>([
    {
      icon: 'ri-bowl-fill',
      title: 'Order Your Food',
      description: 'Seamlessly place your food orders online with just a few clicks. Enjoy convenience and efficiency as you select from our diverse menu of delectable dishes.'
    },
    {
      icon: 'ri-truck-fill',
      title: 'Pick Your Food',
      description: 'Customize your dining experience by choosing from a tantalizing array of options. For savory, sweet, or in between craving, find the perfect meal to satisfy your appetite.'
    },
    {
      icon: 'ri-star-smile-fill',
      title: 'Enjoy Your Food',
      description: 'Sit back, relax, and savor the flavors as your meticulously prepared meal arrives. Delight in the deliciousness of every bite, knowing that your satisfaction is our top priority.'
    }
  ]);
  
  onMounted(() => {
    if (process.client) {
      const { initBannerAnimation } = useScrollReveal();
      initBannerAnimation();
    }
  });
  </script>