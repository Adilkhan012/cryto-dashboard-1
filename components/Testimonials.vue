<template>
  <div>
    <section class="testimonial-sec">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <carousel>
              <img src="https://placeimg.com/200/200/any?1" />

              <img src="https://placeimg.com/200/200/any?2" />

              <img src="https://placeimg.com/200/200/any?3" />

              <img src="https://placeimg.com/200/200/any?4" />
            </carousel>

            <div class="owl-carousel owl-theme testimonial">
              <div class="item">
                <div class="row justify-content-center text-center">
                  <div class="col-12 col-md-10 col-lg-8">
                    <div class="card bg-transparent border-0">
                      <div>
                        <img
                          alt="Image"
                          src="@/assets/images/testimonial/1.jpg"
                          class="shadow-primary img-fluid rounded-circle d-inline"
                        />
                      </div>
                      <div class="card-body p-0 mt-5">
                        <p>
                          Bootsland Amazing Landing Page All-in-one, clean code,
                          Crative &amp; Modern design. We use the latest
                          technologies it voluptatem accusantium doloremque
                          laudantium, totam rem aperiam.
                        </p>
                        <div>
                          <h5 class="text-primary d-inline mb-0">
                            Johny Stock
                          </h5>
                          <small class="text-muted font-w-5 font-italic"
                            >- Supervisor</small
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="row justify-content-center text-center">
                  <div class="col-12 col-md-10 col-lg-8">
                    <div class="card bg-transparent border-0">
                      <div>
                        <img
                          alt="Image"
                          src="@/assets/images/testimonial/1.jpg"
                          class="shadow-primary img-fluid rounded-circle d-inline"
                        />
                      </div>
                      <div class="card-body p-0 mt-5">
                        <p>
                          Bootsland Amazing Landing Page All-in-one, clean code,
                          Crative &amp; Modern design. We use the latest
                          technologies it voluptatem accusantium doloremque
                          laudantium, totam rem aperiam.
                        </p>
                        <div>
                          <h5 class="text-primary d-inline mb-0">
                            Johny Stock
                          </h5>
                          <small class="text-muted font-w-5 font-italic"
                            >- Supervisor</small
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="row justify-content-center text-center">
                  <div class="col-12 col-md-10 col-lg-8">
                    <div class="card bg-transparent border-0">
                      <div>
                        <img
                          alt="Image"
                          src="@/assets/images/testimonial/1.jpg"
                          class="shadow-primary img-fluid rounded-circle d-inline"
                        />
                      </div>
                      <div class="card-body p-0 mt-5">
                        <p>
                          Bootsland Amazing Landing Page All-in-one, clean code,
                          Crative &amp; Modern design. We use the latest
                          technologies it voluptatem accusantium doloremque
                          laudantium, totam rem aperiam.
                        </p>
                        <div>
                          <h5 class="text-primary d-inline mb-0">
                            Johny Stock
                          </h5>
                          <small class="text-muted font-w-5 font-italic"
                            >- Supervisor</small
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="shape-1" style="height: 160px; overflow: hidden">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style="height: 100%; width: 100%"
        >
          <path
            d="M0.00,49.98 C150.00,150.00 271.49,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
            style="stroke: none; fill: #fff"
          ></path>
        </svg>
      </div>
      <div class="shape-1 bottom" style="height: 110px; overflow: hidden">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style="height: 100%; width: 100%"
        >
          <path
            d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            style="stroke: none; fill: #fff"
          ></path>
        </svg>
      </div>
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide>
          <img
            src="https://res.cloudinary.com/dpkreativ/image/upload/v1646483551/wallpapers/car.jpg"
            alt="car"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            src="https://res.cloudinary.com/dpkreativ/image/upload/v1646695756/wallpapers/laptop.jpg"
            alt="laptop"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            src="https://res.cloudinary.com/dpkreativ/image/upload/v1646749176/wallpapers/photo-1646727002357-073c182015e0_qv2xlg.jpg"
            alt="mist"
          />
        </swiper-slide>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </swiper>
    </section>
  </div>
</template>

<script>
export default {
  name: "DemoNewTestimonials",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.read-more {
  font-size: 14px;
  font-weight: 700;
  padding: 16px 30px;
  line-height: 1;
  text-transform: uppercase;
  color: #fff;
  border-radius: 30px;
  border: transparent;
  display: inline-block;
  margin-top: 10px;
  text-decoration: none;
  background: #3520df;
}

.read-more:hover {
  color: #fff;
}

.sub-title {
  position: relative;
  z-index: 2;
  padding-left: 20px;
  font-size: 17px;
  color: #3520df;
}

.sub-title:before {
  position: absolute;
  content: "";
  left: 0;
  background: #3520df;
  z-index: 9;
  height: 7px;
  width: 7px;
  border-radius: 50px;
  top: 30%;
}

.title h1 {
  color: #fff;
  font-size: 45px;
}

.title {
  margin-bottom: 20px;
}

.title h5 {
  color: #3016ff;
}

.shadow-primary {
  -webkit-box-shadow: 0 0.5rem 1rem rgb(110 0 255 / 15%) !important;
  box-shadow: 0 0.5rem 1rem rgb(110 0 255 / 15%) !important;
}

.testimonial img {
  height: 100px;
  width: 100px !important;
}

.testimonial-sec {
  padding: 10rem 0;
  position: relative;
  z-index: 2;
  background: linear-gradient(45deg, #000549, #0198d0);
}

.testimonial-sec p {
  font-size: 18px;
  font-weight: 500;
  color: #d6d8dd;
  line-height: 1.7;
}

.testimonial .owl-nav i {
  position: absolute;
  top: 50%;
  background: #ffff;
  height: 40px;
  width: 40px;
  line-height: 40px;
  border-radius: 50px;
  font-size: 19px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  z-index: 9999;
}

.testimonial .owl-nav i:hover {
  color: #000;
}

.testimonial .owl-nav .owl-prev i {
  left: 90px;
}

.testimonial .owl-nav .owl-next i {
  right: 90px;
}

.font-w-5 {
  font-weight: 500;
}

.shape-1.bottom {
  top: inherit;
  bottom: -1px;
}

.shape-1 {
  position: absolute;
  top: -1px;
  width: 100%;
  left: 0;
  right: 0;
}

small.text-muted.font-w-5.font-italic {
  color: #f2f2f2 !important;
}
</style>
