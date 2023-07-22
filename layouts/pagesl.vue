<template>
  <div>
    <div class="loader" v-if="loader">
      <img src="@/assets/loader.gif" alt="" />
    </div>
    <NewHeader />
    <Banner :height="60" :noSlider="true" />
    <slot> </slot>
    <NewFooter />
  </div>
</template>

<script>
export default {
  data() {
    return {
      loader: true,
    };
  },
  mounted() {
    console.log(this.$route.fullPath.includes("FeaturedPrograms"));
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
