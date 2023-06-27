<template>
  <div>
    <NuxtLink :to="`/FeaturedPrograms/${image.Type}`">
      <atropos
        :shadow-offset="50"
        :rotate-y-max="20"
        :rotate-x-max="20"
        :rotate-x-invert="true"
        :rotate-y-invert="true"
        :shadow-scale="3"
        :highlight="true"
        class="atropos my-atropos cards"
        style="width: 100%"
      >
        <div class="atropos-scale">
          <div class="atropos-rotate">
            <div
              class="atropos-inner"
              style="
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                min-height: 40vh;
              "
            >
              <div class="img-box" ref="card">
                <!-- <div class="Blob" ref="blob"></div> -->
                <img
                  :src="banner"
                  alt=""
                  style="width: 300px; height: 280px"
                  onerror="this.style.display='none'"
                />
              </div>
              <div class="title-box">
                <h4 v-if="image.Type === 'Academic'">Academic Sessions</h4>
                <h4 v-if="image.Type === 'Event'">Event,Media, PR services</h4>
                <h4 v-if="image.Type === 'Consulting'">Consulting Services</h4>
                <h4 v-if="image.Type === 'Development'">
                  Development Services
                </h4>
                <h4 v-if="image.Type === 'Community'">
                  Community Building & <br />
                  Mark Making
                </h4>
                <h4 v-if="image.Type === 'Training'">Training Programs</h4>
              </div>
            </div>
          </div>
        </div>
      </atropos>
    </NuxtLink>
  </div>
</template>

<script>
import Atropos from "atropos/vue";
import gsap from "gsap";
export default {
  components: {
    Atropos,
  },
  props: ["image"],
  data() {
    return {
      out: false,
      in: false,
      offsetX: 0,
      offsetY: 0,
      x: 0,
      y: 0,
      banner: "",
      config: null,
    };
  },

  mounted() {
    this.config = useRuntimeConfig();
    this.banner = `${this.config.public.BaseUrl}/${this.image.BannerImage}`;
    // const options = {
    //   root: null,
    //   rootMargin: "0px",
    //   threshold: 0.1,
    // };
    // const observer = new IntersectionObserver(([entry]) => {
    //   this.intersectionRatio = entry.intersectionRatio;
    //   console.log(entry.isIntersecting);
    //   if (entry.isIntersecting) {
    //     gsap.to(this.$refs.sidebar, {
    //       duration: 1,
    //       x: 100,
    //     });
    //   } else {
    //     gsap.to(this.$refs.sidebar, {
    //       duration: 1,
    //       x: 0,
    //       y: 0,
    //     });
    //   }
    // }, options);
    // observer.observe(this.$refs.cardContainer);
  },

  methods: {
    // IsIn() {
    //   this.in = true;
    //   this.out = false;
    // },
    // MoveBlob(e) {
    //   const blob = this.$refs.blob.getBoundingClientRect();
    //   const box = this.$refs.card.getBoundingClientRect();
    //   const offsetX = e.clientX - box.left;
    //   const offsetY = e.clientY - box.top;
    //   this.offsetX = offsetX;
    //   this.offsetY = offsetY;
    //   console.log("Y", offsetY);
    //   console.log("X", offsetX);
    //   if (this.in && !this.out) {
    //     const fromTop = offsetY < box.height / 2;
    //     const fromLeft = offsetX < box.width / 2;
    //     const fromRight = offsetX > box.width / 2;
    //     const fromBottom = offsetY > box.height / 2;
    //     let x = 0;
    //     let y = 0;
    //     if (fromTop && fromLeft) {
    //       x = offsetX - blob.width;
    //       y = offsetY - blob.height;
    //       if (offsetX > 150) {
    //         this.out = true;
    //         gsap.from(this.$refs.blob, {
    //           x: "-150%",
    //           y: "-150%",
    //         });
    //         // this.$refs.videoPlayer.play();
    //       }
    //       if (offsetY > 110) {
    //         this.out = true;
    //         gsap.from(this.$refs.blob, {
    //           x: "-150%",
    //           y: "-150%",
    //         });
    //         // this.$refs.videoPlayer.play();
    //       }
    //     } else if (fromTop && fromRight) {
    //       x = offsetX;
    //       y = offsetY - blob.height;
    //       if (offsetX < 250) {
    //         this.out = true;
    //         gsap.from(this.$refs.blob, {
    //           x: "150%",
    //           y: "-150%",
    //         });
    //         // this.$refs.videoPlayer.play();
    //       }
    //       if (offsetY > 110) {
    //         this.out = true;
    //         gsap.from(this.$refs.blob, {
    //           x: "150%",
    //           y: "-150%",
    //         });
    //         // this.$refs.videoPlayer.play();
    //       }
    //     } else if (fromBottom && fromLeft) {
    //       x = offsetX - blob.width;
    //       y = offsetY;
    //       if (offsetX > 150) {
    //         this.out = true;
    //         gsap.from(this.$refs.blob, {
    //           x: "-150%",
    //           y: "150%",
    //         });
    //         // this.$refs.videoPlayer.play();
    //       }
    //       if (offsetY < 190) {
    //         this.out = true;
    //         gsap.from(this.$refs.blob, {
    //           x: "-150%",
    //           y: "150%",
    //         });
    //         // this.$refs.videoPlayer.play();
    //       }
    //     } else if (fromBottom && fromRight) {
    //       x = offsetX;
    //       y = offsetY;
    //       if (offsetX < 220) {
    //         this.out = true;
    //         gsap.from(this.$refs.blob, {
    //           x: "150%",
    //           y: "150%",
    //         });
    //         // this.$refs.videoPlayer.play();
    //       }
    //       if (offsetY < 220) {
    //         this.out = true;
    //         gsap.from(this.$refs.blob, {
    //           x: "150%",
    //           y: "150%",
    //         });
    //         // this.$refs.videoPlayer.play();
    //       }
    //     }
    //     gsap.from(this.$refs.blob, {
    //       duration: 1,
    //       x: `${x}px`,
    //       y: `${y}px`,
    //     });
    //   }
    // },
    // //   const box = this.$refs.card.getBoundingClientRect();
    // //   const offsetX = e.clientX - box.left - box.width / 800;
    // //   const offsetY = e.clientY - box.top - box.height / 800;
    // //   if (offsetY < 120 && offsetX < 100 && !this.out && this.in) {
    // //     console.log(offsetY);
    // //     console.log(offsetX);
    // //     gsap.to(this.$refs.blob, {
    // //       duration: 0,
    // //       x: `${offsetX - 150}%`,
    // //       y: `${offsetY - 150}%`,
    // //     });
    // //   } else {
    // //     this.out = true;
    // //     gsap.to(this.$refs.blob, {
    // //       duration: 1,
    // //       x: `-100%`,
    // //       y: `-100%`,
    // //     });
    // //   }
    // // },
    // ResetBlob() {
    //   this.in = false;
    //   this.out = true;
    //   gsap.to(this.$refs.blob, {
    //     duration: 0,
    //     x: `-100%`,
    //     y: `-100%`,
    //   });
    //   // this.$refs.videoPlayer.pause();
    //   // this.$refs.videoPlayer.currentTime = 0;
    // },
    // MoveMenu(e) {
    //   const box = this.$refs.sidebar.getBoundingClientRect();
    //   const offsetX = Math.abs(-e.clientX - box.left + 30 - box.width / 600);
    //   const offsetY = e.clientY - box.top - box.height;
    //   gsap.to(this.$refs.sidebar, {
    //     duration: 1,
    //     x: 0,
    //     y: `${offsetY + e.pageY}px`,
    //   });
    //   console.log(e);
    // },
    // Reset() {
    //   gsap.to(this.$refs.sidebar, {
    //     duration: 1,
    //     x: 100,
    //   });
    // },
  },
};
</script>

<style scoped>
.cards {
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  z-index: 1;
}
.Blob {
  z-index: 100;
  background: white;
  height: 400px;
  width: 400px;
  transform: translate(-150%, -150%);
  border-radius: 40px;
  position: absolute;
}
.title h1 {
  color: #fff;
  font-size: 45px;
}

.title {
  display: block;
  margin: auto;
  margin-bottom: 20px;
}

.title h5 {
  color: #ffffff;
}
.services {
  padding: 100px 0 60px;
  z-index: 2;
  position: relative;

  background-size: cover;
}

.atropos-inner,
.title-box h4 {
  padding: 10px 5px;
  text-align: center;
  font-size: 23px;
  color: #fff;
  line-height: 29px;
}

.atropos-inner {
  padding: 0 !important;
}

.vs-btn {
  background-color: #fff;
  color: #00395d;
  background-image: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  font-size: 16px;
  font-weight: 700;
  padding: 18px 30px;
  line-height: 1;
  text-transform: uppercase;
  min-width: 150px;
  text-align: center;
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
  position: relative;
  margin-right: 20px;
  z-index: 2;
  border-radius: 9999px;
  -webkit-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  text-decoration: none;
  border: 2px solid;
}
.atropos {
  position: relative;
  display: block;
  perspective: 1200px;
  transform: translate3d(0, 0, 0);
}

.atropos-rotate-scroll-x,
.atropos-rotate-scroll-y,
.atropos-rotate-touch {
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.atropos-rotate-touch-scroll-y {
  touch-action: pan-y;
}

.atropos-rotate-touch-scroll-x {
  touch-action: pan-x;
}

.atropos-rotate-touch {
  touch-action: none;
}

.atropos-rotate,
.atropos-scale {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition-property: transform;
  display: block;
}

.atropos-highlight,
.atropos-shadow {
  position: absolute;
  pointer-events: none;
  transition-property: transform, opacity;
  display: block;
  opacity: 0;
}

.atropos-shadow {
  z-index: -1;
  background: #000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  filter: blur(30px);
}

.atropos-highlight {
  left: -50%;
  top: -50%;
  width: 200%;
  height: 200%;
  background-image: radial-gradient(
    circle at 50%,
    rgba(255, 255, 255, 0.25),
    transparent 50%
  );
  z-index: 0;
}

.atropos-rotate {
  position: relative;
}

.atropos-inner {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
  transform: translate3d(0, 0, 0);
  display: block;
  padding: 0 10px;
}

.atropos-active {
  z-index: 1;
}

.atropos-active .atropos-shadow {
  opacity: 1 !important;
}

[data-atropos-offset] {
  transition-property: transform;
}

[data-atropos-opacity] {
  transition-property: opacity;
}

[data-atropos-offset][data-atropos-opacity] {
  transition-property: transform, opacity;
}
</style>
