<template>
    <div style="width: 80%; margin: auto" id="Testimonials">
      <h1 style="font-weight: 700">Testimonials</h1>
    </div>
  <div class="logos" style="margin: 10rem 0">
    <div class="logos-slide">
      <img
        v-for="image in images"
        :key="image"
        width="300"
        height="400"
        :src="image"
        alt="asdfasd"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      images: [],
      config: null,
    };
  },
  mounted() {
    this.config = useRuntimeConfig();
    axios.get(`${this.config.public.BaseUrl}/Images`).then((res) => {
      if (res.data != null) {
        if (res.data.Brands != undefined) {
          this.images = [];
          res.data.Brands.forEach((x) => {
            this.images.push(`${this.config.public.BaseUrl}/${x}`);
          });
        }
      }
    });
  },
};
</script>

<style scoped>
.logos {
  overflow: hidden;
  padding: 60px 0px;
  background: #5d6aed;
  white-space: nowrap;
  position: relative;
}
.logos:before,
.logos:after {
  position: absolute;
  top: 0;
  width: 250px;
  height: 100%;
  z-index: 2;
  content: "";
}
@keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
.logos:before {
  left: 0;
  background: linear-gradient(to left, rgba(255, 255, 255, 0), white);
}
.logos:after {
  right: 0;
  background: linear-gradient(to right, rgba(255, 255, 255, 0), white);
}
.logos:hover .logos-slide {
  animation-play-state: paused;
}
.logos-slide {
  display: inline-block;
  animation: 20s slide infinite linear;
}
.logos-slide img {
  height: 200px;
  margin: 0 40px;
}
</style>
