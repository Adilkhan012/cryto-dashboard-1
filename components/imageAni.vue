<template>
  <div class="home-content" ref="homecontent">
    <img class="content__img" v-for="i in images" :key="i" :src="i" />
    <!-- <img class="content__img" src="@/assets/images/slider/2.jpg" />
    <img class="content__img" src="@/assets/images/slider/3.jpg" />
    <img class="content__img" src="@/assets/images/slider/4.jpg" />
    <img class="content__img" src="@/assets/images/slider/5.jpg" />
    <img class="content__img" src="@/assets/images/slider/6.jpg" />
    <img class="content__img" src="@/assets/images/slider/7.jpg" />
    <img class="content__img" src="@/assets/images/slider/8.jpg" />
    <img class="content__img" src="@/assets/images/slider/9.jpg" />
    <img class="content__img" src="@/assets/images/slider/10.jpg" />
    <img class="content__img" src="@/assets/images/slider/11.jpg" />
    <img class="content__img" src="@/assets/images/slider/12.jpg" />
    <img class="content__img" src="@/assets/images/slider/13.jpg" />
    <img class="content__img" src="@/assets/images/slider/14.jpg" />
    <img class="content__img" src="@/assets/images/slider/15.jpg" />
    <img class="content__img" src="@/assets/images/slider/16.jpg" />
    <img class="content__img" src="@/assets/images/slider/17.jpg" />
    <img class="content__img" src="@/assets/images/slider/18.jpg" />
    <img class="content__img" src="@/assets/images/slider/19.jpg" /> -->
    <!-- <h3 class="content__title">Cursor </h3> -->
  </div>
</template>

<script>
// import "~/assets/js/script";

import gsap from "gsap";
import axios from "axios";
export default {
  data() {
    return {
      images: [],
    };
  },

  mounted() {
    axios
      .get("https://crypto-backend-production.up.railway.app/Images")
      .then((res) => {
        if (res.data != null) {
          if (res.data.ImageSlider != undefined) {
            this.images = [];
            res.data.ImageSlider.forEach((x) => {
              this.images.push(
                `https://crypto-backend-production.up.railway.app/${x}`
              );
            });
          }
        }
      })
      .finally(() => {
        if (this.images.length > 0) {
          const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0,
          };

          const observer = new IntersectionObserver(([entry]) => {
            const body = document.body;

            // helper functions
            const MathUtils = {
              lerp: (a, b, n) => (1 - n) * a + n * b,
              distance: (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1),
            };

            // get the mouse position
            const getMousePos = (ev) => {
              let posx = 0;
              let posy = 0;
              if (!ev) ev = window.event;
              if (ev.pageX || ev.pageY) {
                posx = ev.pageX;
                posy = ev.pageY;
              } else if (ev.clientX || ev.clientY) {
                posx = ev.clientX + body.scrollLeft + docEl.scrollLeft;
                posy = ev.clientY + body.scrollTop + docEl.scrollTop;
              }
              return { x: posx, y: posy };
            };

            let mousePos = { x: 0, y: 0 };
            let lastMousePos = { x: 0, y: 0 };
            let cacheMousePos = { x: 0, y: 0 };

            const getMouseDistance = () =>
              MathUtils.distance(
                mousePos.x,
                mousePos.y,
                lastMousePos.x,
                lastMousePos.y
              );

            class Image {
              constructor(el) {
                this.DOM = { el: el };
                this.defaultStyle = {
                  scale: 1,
                  x: 0,
                  y: 0,
                  opacity: 0,
                };
                this.getRect();
              }

              getRect() {
                this.rect = this.DOM.el.getBoundingClientRect();
              }
              isActive() {
                return (
                  gsap.isTweening(this.DOM.el) || this.DOM.el.style.opacity != 0
                );
              }
            }
            let _this = this;
            class ImageTrail {
              constructor() {
                this.DOM = { content: document.querySelector(".home-content") };
                this.images = [];
                [...this.DOM.content.querySelectorAll(".content__img")].forEach(
                  (img) => this.images.push(new Image(img))
                );
                this.imagesTotal = this.images.length;
                this.imgPosition = 0;
                this.zIndexVal = 1;
                this.threshold = 100;
                requestAnimationFrame(() => this.render());
              }
              render() {
                let distance = getMouseDistance();
                cacheMousePos.x = MathUtils.lerp(
                  cacheMousePos.x || mousePos.x,
                  mousePos.x,
                  0.1
                );
                cacheMousePos.y = MathUtils.lerp(
                  cacheMousePos.y || mousePos.y,
                  mousePos.y,
                  0.1
                );

                if (distance > this.threshold) {
                  this.showNextImage();

                  ++this.zIndexVal;
                  this.imgPosition =
                    this.imgPosition < this.imagesTotal - 1
                      ? this.imgPosition + 1
                      : 0;

                  lastMousePos = mousePos;
                }

                let isIdle = true;
                for (let img of this.images) {
                  if (img.isActive()) {
                    isIdle = false;
                    break;
                  }
                }
                if (isIdle && this.zIndexVal !== 1) {
                  this.zIndexVal = 1;
                }

                requestAnimationFrame(() => this.render());
              }
              showNextImage() {
                const img = this.images[this.imgPosition];
                gsap.killTweensOf(img.DOM.el);

                let tl = gsap.timeline();
                tl.to(
                  img.DOM.el,
                  {
                    startAt: { opacity: 0, scale: 1 },
                    opacity: 1,
                    scale: 1,
                    zIndex: this.zIndexVal,
                    x: cacheMousePos.x - img.rect.width / 2,
                    y: cacheMousePos.y - img.rect.height / 2,
                  },
                  0
                )
                  .to(
                    img.DOM.el,
                    0.9,
                    {
                      x: mousePos.x - img.rect.width / 2,
                      y: mousePos.y - img.rect.height / 2,
                    },
                    0
                  )
                  .to(
                    img.DOM.el,
                    1,
                    {
                      ease: "Power1.easeOut",
                      opacity: 0,
                    },
                    0.4
                  )
                  .to(
                    img.DOM.el,
                    1,
                    {
                      ease: "Quint.easeOut",
                      scale: 0.2,
                    },
                    0.4
                  );
              }
            }

            new ImageTrail();
            if (entry.isIntersecting) {
              // update the mouse position
              this.$refs.homecontent.addEventListener(
                "mousemove",
                (ev) => (mousePos = getMousePos(ev))
              );

              // preload images
            } else {
            }
          }, options);

          observer.observe(this.$refs.homecontent);
        }
      });
  },

  methods: {},
};
</script>

<style scoped>
.home-content {
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  background: url(../images/slider-bg.jpg) no-repeat;

  position: relative;
  width: 100%;
  height: 100vh;
}

.content__img {
  max-width: 200px;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}
</style>
