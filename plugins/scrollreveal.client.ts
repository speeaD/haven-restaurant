import ScrollReveal from 'scrollreveal';

export default defineNuxtPlugin(() => {
  // Make ScrollReveal available globally on the client side
  window.ScrollReveal = () => ScrollReveal();
});