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
export default {
  name: "AnimationProjectIndex",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.hero-bg-1 {
  background: url("~/assets/images/slider-bg.jpg");
  background-color: #ddd;
}
.hero-bg-2 {
  background: url("~/assets/images/hero/2.jpg");
  background-color: #ddd;
}
.hero-bg-3 {
  background: url("~/assets/images/hero/3.jpg");
  background-color: #ddd;
}

.single-hero-area {
  position: relative;
  z-index: 1;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
.single-hero-area:before {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  background: #1a22cc;
  z-index: -1;
  opacity: 0.7;
}
.hero-area-content {
  padding-top: 330px;
  padding-bottom: 250px;
}

.hero-para {
  font-size: 26px;
  color: #fff;
  text-transform: capitalize;
  line-height: 35px;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
  padding-left: 35px;
}
.hero-para:before {
  position: absolute;
  width: 5px;
  height: 70px;
  left: 0;
  top: 0;
  background: #f26c4f;
  content: "";
}
.hero-heading {
  font-size: 80px;
  font-weight: 800;
  color: #fff;
  margin-bottom: 20px;
}
.hero-area-menu {
  margin-bottom: 25px;
}
.hero-area-menu ul li {
  display: inline-block;
}
.hero-area-menu ul li a {
  display: block;
  color: #fff;
  font-size: 16px;
  letter-spacing: 2px;
  position: relative;
  z-index: 1;
  margin-right: 20px;
  padding-right: 20px;
}
.hero-area-menu ul li a::before {
  position: absolute;
  width: 8px;
  height: 8px;
  content: "";
  right: 0;
  top: 57%;
  background: #fff;
  margin-top: -4%;
  border-radius: 50%;
}
.hero-area-menu ul li:last-child a::before {
  visibility: hidden;
}

.hero-carousel-active .slick-dots {
  position: absolute;
  right: 200px;
  top: 50%;
  transform: translatey(-50%);
}
.hero-carousel-active .slick-dots li {
  margin: 5px 0;
}
.hero-carousel-active .slick-dots li button {
  display: none;
}
.hero-carousel-active .slick-dots li,
.team-carousel-active .slick-dots li {
  width: 7px;
  height: 7px;
  background: #fff;
  border-radius: 50%;
  margin: 15px 0;
  cursor: pointer;
}
.hero-carousel-active .slick-dots li.slick-active,
.team-carousel-active .slick-dots li.slick-active {
  position: relative;
  z-index: 1;
}
.hero-carousel-active .slick-dots li.slick-active:before,
.team-carousel-active .slick-dots li.slick-active:before {
  position: absolute;
  width: 20px;
  height: 20px;
  top: -7px;
  left: -6px;
  content: "";
  border: 1px solid #ddd;
  border-radius: 50%;
}

.btn.hero-btn {
  margin-right: 30px;
}
.video-btn {
  width: 80px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  background: #5a68e8;
  border-radius: 50%;
  color: #fff;
  font-size: 18px;
  transition: 0.5s ease-in-out;
}
.video-btn:hover {
  background: #fff;
  color: #333;
}

.single-hero-area {
  position: relative;
  z-index: 1;
}
.hero-scrolli {
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 90px;
  text-align: center;
  border: 4px solid #5a68e8;
  border-radius: 30px;
  cursor: pointer;
}
.hero-scrolli span {
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  font-size: 24px;
  color: #8b96ff;
  animation: scrolli 2s infinite;
  -webkit-animation: scrolli 2s infinite;
}
</style>
