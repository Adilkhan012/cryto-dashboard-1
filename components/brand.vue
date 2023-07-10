<template>
  <div style="width: 80%; margin: auto; padding-top: 4rem" id="StrategicPartners">
    <h1 style="font-weight: 700">Strategic Partners</h1>
  </div>

  <div class="logos" style="margin: 4rem 0">
    <div class="logos-slide">
      <div v-for="(image, index) in images" :key="index" class="logo-card">
        <div class="logo-inner">
          <div class="logo-front">
            <img :src="image" alt="asdfasd" class="logo-image" />
          </div>
          <div class="logo-back">
            <h3>Partner Name</h3>
          </div>
        </div>
      </div>
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
  background: white;
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
    transform: translateX(-120%);
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

.logo-card {
  perspective: 1000px;
  display: inline-block;
  margin: 0 40px;
}

.logo-inner {
  width: 300px;
  height: 400px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.8s;
}

.logo-card:hover .logo-inner {
  transform: rotateY(180deg);
}

.logo-front,
.logo-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.logo-front {
  transform: rotateY(0deg);
}

.logo-back {
  transform: rotateY(180deg);
  background-color: #f5f5f5;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: bold;
}

.logo-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>