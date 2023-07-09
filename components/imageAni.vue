<template>
  <div class="home-content" ref="homecontent">
    <img
      class="content__img"
      v-for="i in images"
      :key="i"
      :src="i"
      ref="images"
    />
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
      config: null,
      trail: null,
    };
  },

  mounted() {
    this.config = useRuntimeConfig();
    axios
      .get(`${this.config.public.BaseUrl}/Images`)
      .then((res) => {
        if (res.data != null) {
          if (res.data.ImageSlider != undefined) {
            this.images = [];
            res.data.ImageSlider.forEach((x) => {
              this.images.push(`${this.config.public.BaseUrl}/${x}`);
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
              this.DOM = {
                content: document.querySelector(".home-content"),
              };
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
              tl.set(
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
                  {
                    x: mousePos.x - img.rect.width / 2,
                    y: mousePos.y - img.rect.height / 2,
                    duration: 0.9,
                  },
                  0
                )
                .to(
                  img.DOM.el,

                  {
                    ease: "Power1.easeOut",
                    opacity: 0,
                    duration: 1,
                  },
                  0.4
                )
                .to(
                  img.DOM.el,

                  {
                    ease: "Quint.easeOut",
                    scale: 0.2,
                    duration: 1,
                  },
                  0.4
                );
            }
          }

          this.trail = new ImageTrail();
          // update the mouse position
          this.$refs.homecontent.addEventListener(
            "mousemove",
            (ev) => (mousePos = getMousePos(ev))
          );
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
  max-width: 280px;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}
</style>
