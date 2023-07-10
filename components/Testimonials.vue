<template>
  <div>
    <section class="testimonial-sec">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <swiper class="swiper" :options="swiperOption">
              <swiper-slide v-for="(testimonial, index) in testimonials" :key="index">
                <div class="row justify-content-center text-center">
                  <div class="col-12 col-md-10 col-lg-8">
                    <div class="card bg-transparent border-0">
                      <div>
                        <img
                          alt="Image"
                          :src="testimonial.image"
                          class="shadow-primary img-fluid rounded-circle d-inline"
                        />
                      </div>
                      <div class="card-body p-0 mt-5">
                        <p>{{ testimonial.text }}</p>
                        <div>
                          <h5 class="text-primary d-inline mb-0">
                            {{ testimonial.name }}
                          </h5>
                          <small class="text-muted font-w-5 font-italic">
                            {{ testimonial.role }}
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
      <!-- Rest of the code -->
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
    return {
      testimonials: [
        {
          image: "@/assets/images/testimonial/1.jpg",
          text: "Bootsland Amazing Landing Page All-in-one, clean code, Crative &amp; Modern design. We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.",
          name: "Johny Stock",
          role: "Supervisor"
        },
        {
          image: "@/assets/images/testimonial/2.jpg",
          text: "Bootsland Amazing Landing Page All-in-one, clean code, Crative &amp; Modern design. We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.",
          name: "Jane Doe",
          role: "Manager"
        },
        {
          image: "@/assets/images/testimonial/3.jpg",
          text: "Bootsland Amazing Landing Page All-in-one, clean code, Crative &amp; Modern design. We use the latest technologies it voluptatem accusantium doloremque laudantium, totam rem aperiam.",
          name: "David Smith",
          role: "Developer"
        }
      ],
      swiperOption: {
        slidesPerView: 1,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
};
</script>

<style scoped>
/* Your existing styles here */

.swiper-button-next,
.swiper-button-prev {
  color: #fff;
  font-size: 30px;
  width: 40px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: background-color 0.3s ease;
  cursor: pointer;
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  background-color: #fff;
  opacity: 0.5;
  transition: opacity 0.3s ease;
  border-radius: 50%;
  cursor: pointer;
}

.swiper-pagination-bullet-active {
  opacity: 1;
}
</style>
