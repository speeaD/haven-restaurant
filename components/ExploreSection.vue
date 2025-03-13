<template>
    <section class="section__container explore__container">
      <div class="explore__image">
        <img src="~/assets/images/explore.png" alt="explore" />
      </div>
      <div class="explore__content">
        <h1 class="section__header">We Serve Healthy & Tasty Food</h1>
        <p class="section__description">
          Indulge guilt-free with our commitment to serving wholesome and
          delicious meals. Explore a menu curated to balance taste and
          nutrition, ensuring every bite is both satisfying and nourishing.
        </p>
        <div class="explore__btn">
          <button class="btn" @click="router.push('/menu')">
            Explore Menu <span><i class="ri-arrow-right-line"></i></span>
          </button>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { onMounted } from 'vue';
  
  const router = useRouter();
  onMounted(() => {
    if (import.meta.client) {
      const { initExploreAnimation } = useScrollReveal();
      initExploreAnimation();
    }
  });
  </script>