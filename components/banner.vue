<template>
  <div>
    <!--======  HERO PART START ======-->
    <section class="hero-area hero-carousel-active" id="home">
      <div class="single-hero-area hero-bg-1 bg_cover" data-scroll-area="true">
        <div class="container">
          <div class="row">
            <div class="col-lg-7">
              <div class="hero-area-content">
                <!-- <div class="home-content">
                  <img
                    class="content__img"
                    src="@/assets/images/slider/1.jpg"
                  />
                  <img
                    class="content__img"
                    src="@/assets/images/slider/2.jpg"
                  />
                  <img
                    class="content__img"
                    src="@/assets/images/slider/3.jpg"
                  />
                  <img
                    class="content__img"
                    src="@/assets/images/slider/4.jpg"
                  />
                  <img
                    class="content__img"
                    src="@/assets/images/slider/5.jpg"
                  />
                  <img
                    class="content__img"
                    src="@/assets/images/slider/6.jpg"
                  />
                  <img
                    class="content__img"
                    src="@/assets/images/slider/7.jpg"
                  />
                  <img
                    class="content__img"
                    src="@/assets/images/slider/8.jpg"
                  />
                  <img
                    class="content__img"
                    src="@/assets/images/slider/9.jpg"
                  />
                  <img
                    class="content__img"
                    src="@/assets/images/slider/10.jpg"
                  />
                  <img
                    class="content__img"
                    src="@/assets/images/slider/11.jpg"
                  />
                  <img
                    class="content__img"
                    src="@/assets/images/slider/12.jpg"
                  />
                  <img
                    class="content__img"
                    src="@/assets/images/slider/13.jpg"
                  />
                  <img
                    class="content__img"
                    src="@/assets/images/slider/14.jpg"
                  />
                  <img
                    class="content__img"
                    src="@/assets/images/slider/15.jpg"
                  />
                  <img
                    class="content__img"
                    src="@/assets/images/slider/16.jpg"
                  />
                  <img
                    class="content__img"
                    src="@/assets/images/slider/17.jpg"
                  />
                  <img
                    class="content__img"
                    src="@/assets/images/slider/18.jpg"
                  />
                  <img
                    class="content__img"
                    src="@/assets/images/slider/19.jpg"
                  />
                </div> -->
                <imageAni></imageAni>
                <!-- <p class="hero-para">
                  Start New Business <br />
                  With Our New Experience and
                </p> -->
                <!-- <h1 class="hero-heading">Creative Minds</h1>
                <div class="hero-area-menu">
                  <ul>
                    <li><a href="#">Design</a></li>
                    <li><a href="#">Marketing</a></li>
                    <li><a href="#">Developemt</a></li>
                  </ul>
                </div> -->
                <!-- <a href="#" class="btn hero-btn"
                  >get Started <i class="fa fa-arrow-right"></i
                ></a>
                <a
                  href="https://www.youtube.com/watch?v=iogabydg2y0"
                  class="video-btn video-popup"
                  ><i class="fa fa-play"></i
                ></a> -->
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
  components: { imageAni },
  name: "AnimationProjectIndex",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.home-content {
  height: 300px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  background: url(../images/slider-bg.jpg) no-repeat;
}

.content__img {
  max-width: 200px;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}
</style>
