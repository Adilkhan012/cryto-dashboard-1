<template>
  <div class="card" ref="cardContainer">
    <div class="card-inner" ref="innercard">
      <div class="card-front">
        <img width="100%" height="100%" src="../assets/images/cardback.jpg" />
      </div>
      <div class="card-back">
        <img
          width="100%"
          height="100%"
          src="../assets/images/fwa-cards-30.png"
          alt=""
          ref="card"
          @mousemove="Move"
          @mouseleave="MoveBack"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
export default {
  name: "AnimationProjectCardComponent",
  props: ["container"],
  data() {
    return {
      intersectionRatio: 0,
    };
  },

  mounted() {
    const options = {
      root: null,
      rootMargin: "500px",
      threshold: 1,
    };

    const observer = new IntersectionObserver(([entry]) => {
      this.intersectionRatio = entry.intersectionRatio;
      console.log(entry.isIntersecting);
      this.flipCards(entry);
    }, options);

    observer.observe(this.$refs.cardContainer);

    gsap.set(this.$refs.card, {
      transformPerspective: 500,
      transformStyle: "preserve-3d",
    });
    // gsap.to(this.$refs.innercard, {
    //   duration: 0.2,
    //   rotationY: "+=180",
    //   transformStyle: "preserve-3d",
    // });
    // gsap.from(this.$refs.card, {
    //   duration: 0.5,
    //   rotateY: 180,
    // });
  },

  methods: {
    flipCards(entry) {
      // const card = entry.target;
      // const box =
      //   this.$refs.cardContainer.parentElement.parentElement.getBoundingClientRect();
      // const offsetX = box.left - box.width / 2;
      // // const offsetY =  box.top - box.height / 2;
      // console.log(entry.intersectionRect.left, box.width);
      if (entry.isIntersecting) {
        gsap.to(this.$refs.innercard, {
          duration: 0.2,
          rotationY: "180",
          transformStyle: "preserve-3d",
        });
      } else {
        gsap.to(this.$refs.innercard, {
          duration: 0.2,
          rotationY: "0",
          transformStyle: "preserve-3d",
        });
        // card is out of view, flip it back
      }
    },
    Move(e) {
      const box = this.$refs.card.getBoundingClientRect();
      const offsetX = e.clientX - box.left - box.width / 2;
      const offsetY = e.clientY - box.top - box.height / 2;
      const rotateX = -offsetY / 10;
      const rotateY = offsetX / 10;
      const scale = 1.05;

      gsap.to(this.$refs.card, {
        duration: 0.5,
        rotationY: rotateY,
        rotationX: rotateX,
        scale: scale,
        x: "-40%",
        y: "-30%",
      });
      gsap.to(this.$refs.cardContainer, {
        duration: 0.5,
        rotationY: rotateY,
        rotationX: rotateX,
        scale: scale,
      });

      //   tl.to(this.$refs.card, {
      //     duration: 0.4,
      //     rotateX: 50,

      //     skewX: e.screenX / 1000,
      //     skewY: e.screenY / 1000,

      //     z: 0,
      //     transformPerspective: 1500,
      //     transformOrigin: "center",
      //   });
    },
    MoveBack() {
      gsap.to(this.$refs.card, {
        duration: 0.5,
        rotationY: 0,
        rotationX: 0,
        x: "0%",
        y: "0%",
        scale: 1,
      });
    },
  },
};
</script>

<style scoped>
.card {
  width: 300px;
  height: 400px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  transform: rotateY("0deg");
  position: relative;
  transition: box-shadow 0.3s ease-in-out;
}

.card-inner {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: transform 0.5s;
  transform-style: preserve-3d;
}
.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}
.card-back {
  transform: rotateY(180deg);
}
</style>
