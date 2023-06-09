<template>
  <div>
    <!--======  HERO PART START ======-->
    <section class="hero-area hero-carousel-active" id="home">
      <div class="single-hero-area hero-bg-1 bg_cover" data-scroll-area="true">
        <div class="">
          <div class="row">
            <div class="col-lg-12">
              <div>
                <imageAni></imageAni>
              </div>
            </div>
          </div>
        </div>
        <div class="hero-scrolli">
          <span><i class="fa fa-arrow-down"></i></span>
        </div>
      </div>
    </section>
    <!--======  HERO PART END ======-->
    <!--======  SERVICE-CATEGORIES PART START ======-->
    -->
    <!--======  SERVICE-CATEGORIES PART END ======-->
  </div>
</template>

<script>
import imageAni from "./imageAni.vue";
export default {
  name: "AnimationProjectIndex",
  components: { imageAni },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped></style>
