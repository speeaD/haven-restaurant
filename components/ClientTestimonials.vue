<template>
    <section class="section__container client__container" id="client">
      <h2 class="section__header">What Our Customers Are Saying</h2>
      <p class="section__description">
        Discover firsthand experiences and testimonials from our valued patrons.
        Explore the feedback and reviews that showcase our commitment to
        quality, service, and customer satisfaction.
      </p>
      <div class="client__swiper">
        <!-- Swiper will be mounted here -->
        <div class="swiper">
          <div class="swiper-wrapper">
            <div v-for="(testimonial, index) in testimonials" :key="index" class="swiper-slide">
              <div class="client__card">
                <p>{{ testimonial.comment }}</p>
                <img :src="testimonial.image" alt="client" />
                <h4>{{ testimonial.name }}</h4>
                <h5>{{ testimonial.title }}</h5>
              </div>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import Swiper, { Pagination } from 'swiper';
  
  interface Testimonial {
    comment: string;
    image: string;
    name: string;
    title: string;
  }
  
  const testimonials = ref<Testimonial[]>([
    {
      comment: 'FoodMan\'s culinary expertise never fails to impress! Every dish is a masterpiece, bursting with flavor and freshness.',
      image: '/assets/images/client-1.jpg',
      name: 'David Lee',
      title: 'Business Executive'
    },
    {
      comment: 'I always turn to FoodMan for a quick and delicious meal. Their efficient service and mouthwatering options never disappoint!',
      image: '/assets/images/client-2.jpg',
      name: 'Emily Johnson',
      title: 'Food Blogger'
    },
    {
      comment: 'FoodMan has become my go-to for all my catering needs. Their attention to detail and exceptional customer service make every event a success.',
      image: '/assets/images/client-3.jpg',
      name: 'Michael Thompson',
      title: 'Event Planner'
    }
  ]);
  
  onMounted(() => {
    if (process.client) {
      // Initialize Swiper
      new Swiper('.swiper', {
        modules: [Pagination],
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        },
      });
    }
  });
  </script>