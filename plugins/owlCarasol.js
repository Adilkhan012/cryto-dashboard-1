import carousel from "vue-owl-carousel";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(carousel);
});
