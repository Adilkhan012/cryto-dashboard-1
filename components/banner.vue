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
    <section class="service-area service-categories pt-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="single-service-area">
              <span class="service-num">01</span>
            </div>
            <div class="service-icon">
              <img src="@/assets/images/service-icon/1.png" alt="" />
            </div>
            <div class="service-content">
              <h4>Product Design</h4>
              <p>
                It is pleasure, but because those who do not know how pursue
                pleasure ration
              </p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="single-service-area">
              <span class="service-num">02</span>
            </div>
            <div class="service-icon">
              <img src="@/assets/images/service-icon/2.png" alt="" />
            </div>
            <div class="service-content">
              <h4>UX/UI Strategy</h4>
              <p>
                Pain can procure hi some great pleasutrivial example, which ever
                undertakes
              </p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="single-service-area">
              <span class="service-num">03</span>
            </div>
            <div class="service-icon">
              <img src="@/assets/images/service-icon/3.png" alt="" />
            </div>
            <div class="service-content">
              <h4>Market Analysis</h4>
              <p>
                Some advantage from but who has any right tfind fault with a man
                chooses
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
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
