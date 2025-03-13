<template>
    <header class="section__container header__container" id="home">
      <div class="header__image">
        <img src="~/assets/images/header.png" alt="header" />
      </div>
      <div class="header__content">
        <h1>Where comfort <span>meets creativity</span>.</h1>
        <p class="section__description">
          At Haven Diner, we envision a warm, welcoming space where every meal feels like home, and every bite tells a story.
          Our goal is to create a dining experience that blends nostalgic comfort with modern culinary delight, making us the got to spot for hearty meals, friendly service, and unforgattable memories.
        </p>
        <div class="header__btn">
          <button class="btn">Get Started</button>
        </div>
      </div>
    </header>
  </template>
  
  <script setup lang="ts">
  import { onMounted } from 'vue';
  
  onMounted(() => {
    if (process.client) {
      const { initHeaderAnimation } = useScrollReveal();
      initHeaderAnimation();
    }
  });
  </script>