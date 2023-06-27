<template>
  <div>
    <section class="cta-area cta-bg pt-140 pb-140">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="cta-title">
              <span><img src="@/assets/images/cta-text.png" alt="" /></span>
              <h1>Have Any Creative Project</h1>
              <p>
                We denounce with righteous indignation and dislike men who are
                so beguiled and demoralized by the charms of pleasure
              </p>
              <NuxtLink to="#Contact" class="btn cta-btn"
                >Contact us <i class="fa fa-arrow-right"></i
              ></NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--======  CTA PART END ======-->

    <!--======  VIDEO PART START ======-->
    <section class="video-area vdeo-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="video-icon-area">
              <NuxtLink to="/Videos" class="video-icon video-popup"
                ><i class="fa fa-play"></i
              ></NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div class="video-content">
        <span><img src="@/assets/images/video-text.png" alt="" /></span>
        <h1>Watch Our Latest Videos</h1>
        <p>
          Latin professor at Hampden-Sydney College in Virginia, looked up one
          of the more obscure Latin words, consectetur, from a Lorem Ipsum
          passage, and going through the cites of the
        </p>
        <a href="#" class="video-read-more"
          >Learn More <i class="fa fa-arrow-right"></i
        ></a>
      </div>
    </section>
    <!--======  VIDEO PART END ======-->

    <!--======  PROJECTS PART START ======-->

    <!--======  PROJECTS PART END ======-->
    <Portfolio />
    <!--======  TESTIMONIAL PART START ======-->
    <div style="width: 80%; margin: auto">
      <h1 style="font-weight: 700">Testimonials</h1>
      <swiper
        class="swiper"
        :modules="modules"
        :pagination="{ clickable: true }"
        :autoplay="{ delay: 0 }"
        :loop="true"
        :options="swiperOption"
      >
        <swiper-slide
          v-for="testimonial in testimonials"
          :key="testimonial._id"
        >
          <div
            class="single-testimonial-content"
            style="padding: 2rem; width: 100%"
          >
            <span class="testimonial-quote"
              ><i class="fa fa-quote-right"></i
            ></span>
            <p>
              {{ testimonial.Remarks }}
            </p>
            <div class="autohor-details">
              <img
                :src="`${config.public.BaseUrl}/${testimonial.Image}`"
                alt=""
                class="author-img"
                width="100"
                height="100"
              />
              <h5 class="author-name" style="margin-left: 2rem">
                {{ testimonial.Name }}
                <span>{{ testimonial.Designation }}</span>
              </h5>
            </div>
          </div>
        </swiper-slide>

        <!-- <div class="swiper-pagination" :pagination></div> -->
      </swiper>
    </div>
    <!-- <section class="testimonial-area" id="testimonial">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 textimonial-carousel-active">
            <div class="single-testimonial-content">
              <span class="testimonial-quote"
                ><i class="fa fa-quote-right"></i
              ></span>
              <p>
                Avoids pleasur itself because pleas because those who do not
                know how to pursue plesure rationally encou eque that are extrem
                painful again is there anyone who loves pursues or desires to
                obtain pain of itself.
              </p>
              <div class="autohor-details">
                <img
                  src="@/assets/images/testimonial/1.jpg"
                  alt=""
                  class="author-img"
                />
                <h5 class="author-name">
                  Michele L. Racinea <span>Web Designer</span>
                </h5>
              </div>
            </div>
            <div class="single-testimonial-content">
              <span class="testimonial-quote"
                ><i class="fa fa-quote-right"></i
              ></span>
              <p>
                Avoids pleasur itself because pleas because those who do not
                know how to pursue plesure rationally encou eque that are extrem
                painful again is there anyone who loves pursues or desires to
                obtain pain of itself.
              </p>
              <div class="autohor-details">
                <img
                  src="@/assets/images/testimonial/1.jpg"
                  alt=""
                  class="author-img"
                />
                <h5 class="author-name">
                  Michele L. Racinea <span>Web Designer</span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <!--======  TESTIMONIAL PART END ======-->

    <!--======  SCROLL-TO-TOP PART START ======-->
    <div class="scroll-to-top" @click="toTop">
      <span id="return-to-top "><i class="fa fa-arrow-up"></i></span>
    </div>
    <!--======  SCROLL-TO-TOP PART END ======-->
  </div>
</template>

<script>
import SwiperClass, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

import "swiper/css";
import "swiper/css/pagination";
import axios from "axios";
export default {
  setup() {
    return {
      modules: [Pagination],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      scTimer: 0,
      scY: 0,
      config: null,
      testimonials: [],
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  mounted() {
    this.config = useRuntimeConfig();
    window.addEventListener("scroll", this.handleScroll);
    axios.get(`${this.config.public.BaseUrl}/Testimonials`).then((res) => {
      this.testimonials = res.data.data;
    });
  },
  methods: {
    handleScroll: function () {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
<style scoped>
.circle {
  width: 200px;
  height: 200px;
  border: 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}
.swiper-button-prev,
.swiper-button-next {
  --swiper-theme-color: #ff0000;
}
</style>
