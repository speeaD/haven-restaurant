<template>
    <footer class="footer" id="contact">
      <div class="section__container footer__container">
        <div class="footer__col">
          <div class="logo footer__logo">
            <a href="#">Haven<span>Diner</span></a>
          </div>
          <p class="section__description">
            Embark on a gastronomic journey with haven diner, where every bite tells
            a story and every dish is crafted to perfection.
          </p>
        </div>
        <div v-for="(column, index) in footerColumns" :key="index" class="footer__col">
          <h4>{{ column.title }}</h4>
          <ul class="footer__links">
            <li v-for="(link, linkIndex) in column.links" :key="linkIndex">
              <a href="#">{{ link }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer__bar">
        Copyright © {{ new Date().getFullYear() }} Haven Diner. All rights reserved.
      </div>
    </footer>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  interface FooterColumn {
    title: string;
    links: string[];
  }
  
  const footerColumns = ref<FooterColumn[]>([
    {
      title: 'Product',
      links: ['Menu', 'Specials', 'Meal Deals', 'Catering Options', 'Seasonal Offerings']
    },
    {
      title: 'Information',
      links: ['About Us', 'Contact Us', 'Nutrition Information', 'Allergen Information']
    },
    {
      title: 'Company',
      links: ['Our Story', 'Careers', 'Terms of Service', 'Privacy Policy']
    }
  ]);
  </script>