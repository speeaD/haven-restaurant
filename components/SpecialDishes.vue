<template>
    <section class="section__container special__container" id="special">
      <h2 class="section__header">Today's Special Dishes</h2>
      <p class="section__description">
        Each dish promises an unforgettable dining experience, blending
        innovation with tradition to delight your senses.
      </p>
      <div class="special__grid">
        <div v-for="(dish, index) in specialDishes" :key="index" class="special__card">
          <img :src="dish.image" :alt="dish.title" />
          <h4>{{ dish.title }}</h4>
          <p>{{ dish.description }}</p>
          <div class="special__ratings">
            <span v-for="star in 5" :key="star"><i class="ri-star-fill"></i></span>
          </div>
          <div class="special__footer">
            <p class="price">₦{{ dish.price }}</p>
            <button class="btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  interface SpecialDish {
    image: string;
    title: string;
    description: string;
    price: string;
  }
  
  const specialDishes = ref<SpecialDish[]>([
    {
      image: 'assets/images/special-1.png',
      title: 'Chicken Veg Curry',
      description: 'Diced chicken simmered in aromatic curry sauce with mixed veggies like potatoes, cauliflower, and beans for a hearty, flavorful dish.',
      price: '22,000'
    },
    {
      image: 'assets/images/special-2.png',
      title: 'Chicken Veg Stir-Fry',
      description: 'Tender chicken strips wok-tossed with a colorful array of fresh vegetables in a flavorful blend of spices and sauces.',
      price: '18,500'
    },
    {
      image: 'assets/images/special-3.png',
      title: 'Chicken Veg Pasta',
      description: 'Al dente pasta tossed with chicken strips and a mix of vibrant vegetables in a creamy garlic herb sauce, offering a delightful pasta experience.',
      price: '15,500'
    }
  ]);
  </script>