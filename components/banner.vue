<template>
  <div>
    <!--======  HERO PART START ======-->
    <section class="hero-area hero-carousel-active" id="home">
      <div class="single-hero-area hero-bg-1 bg_cover" data-scroll-area="true">
        <div class="">
          <div class="row">
            <div class="col-lg-12">
              <div
                :style="
                  image != '' &&
                  `background: url(${image});background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;`
                "
              >
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

    <!--======  SERVICE-CATEGORIES PART END ======-->
  </div>
</template>

<script>
import imageAni from "./imageAni.vue";
import axios from "axios";
export default {
  name: "AnimationProjectIndex",
  components: { imageAni },
  data() {
    return {
      image: "",
    };
  },

  mounted() {
    axios
      .get("https://crypto-backend-production.up.railway.app/Images")
      .then((res) => {
        if (res.data != null) {
          this.image = `https://crypto-backend-production.up.railway.app/${res.data.Banner}`;
        }
      });
  },

  methods: {},
};
</script>

<style scoped></style>
