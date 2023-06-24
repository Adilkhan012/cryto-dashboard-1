<template>
  <div>
    <AboutUs />
    <Service />
    <TeamMember />

    <demolayout />
    <NewsBlog />
    <ContactUs />
  </div>
</template>

<script setup>
useHead({
  title: "Crypto",
  link: [
    {
      href: "https:/fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback",
      rel: "stylesheet",
    },
    {
      href: "https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css",
      rel: "stylesheet",
    },
  ],
  script: [
    {
      src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
      type: "text/javascript",
    },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
      type: "text/javascript",
    },
    {
      src: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js",
      type: "text/javascript",
    },
  ],
});
</script>
<script>
export default {
  data() {
    return {
      loader: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loader = false;
    }, 2500);
  },
};
</script>
<style scoped>
.loader {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 100ms ease-in-out;
}
</style>
