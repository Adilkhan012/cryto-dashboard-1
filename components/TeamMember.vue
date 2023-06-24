<template>
  <!--======  TEAM PART START ======-->
  <section class="team-area pt-140 pb-140" id="Team">
    <div class="container" style="margin: 0; padding: 0">
      <div class="row" style="justify-content: end">
        <div class="col-lg-6 offset-lg-3 text-center pb-80">
          <div class="section-title team-title">
            <p class="section-para"><span></span>our team member</p>
            <h1>Meet Our Most Creative Minds That’s Are Professional</h1>
          </div>
        </div>
      </div>
      <div ref="Intersection" class="Intersection">
        <div class="cards-container">
          <card-component
            v-for="i in images"
            :key="i"
            @click="ShowCard(i)"
            :image="i"
            ref="Card"
          ></card-component>
        </div>
        <div class="showcard" ref="showcard" @mousemove="CloseAnimation">
          <div
            id="cursorClose"
            ref="close"
            style="z-index: 0"
            @click="HideCard"
          >
            <span id="close">x</span>
          </div>
          <img
            src="@/assets/images/fwa-cards-30.png"
            style="z-index: 5"
            alt=""
            ref="showImage"
          />
        </div>
      </div>
      <!-- <div class="row team-carousel-active">
          <div class="col-lg-4">
            <div class="single-team-area">
              <div class="single-team-img text-center">
                <img src="@/assets/images/team/1.png" alt="" />
                <span class="team-icon-1"
                  ><img src="@/assets/images/team/icon/1.png" alt=""
                /></span>
                <span class="team-icon-2"
                  ><img src="@/assets/images/team/icon/2.png" alt=""
                /></span>
                <span class="team-icon-3"
                  ><img src="@/assets/images/team/icon/3.png" alt=""
                /></span>
              </div>
              <div class="single-team-content text-center">
                <h4>Joseph M. Fondren</h4>
                <p>Apps deigner</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="single-team-area">
              <div class="single-team-img text-center">
                <img src="@/assets/images/team/2.png" alt="" />
                <span class="team-icon-1"
                  ><img src="@/assets/images/team/icon/1.png" alt=""
                /></span>
                <span class="team-icon-2"
                  ><img src="@/assets/images/team/icon/2.png" alt=""
                /></span>
                <span class="team-icon-3"
                  ><img src="@/assets/images/team/icon/3.png" alt=""
                /></span>
              </div>
              <div class="single-team-content text-center">
                <h4>Pauline R. Stapleton</h4>
                <p>Web developer</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="single-team-area">
              <div class="single-team-img text-center">
                <img src="@/assets/images/team/3.png" alt="" />
                <span class="team-icon-1"
                  ><img src="@/assets/images/team/icon/1.png" alt=""
                /></span>
                <span class="team-icon-2"
                  ><img src="@/assets/images/team/icon/2.png" alt=""
                /></span>
                <span class="team-icon-3"
                  ><img src="@/assets/images/team/icon/3.png" alt=""
                /></span>
              </div>
              <div class="single-team-content text-center">
                <h4>Robin A. Santiago</h4>
                <p>apps designer</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="single-team-area">
              <div class="single-team-img text-center">
                <img src="@/assets/images/team/2.png" alt="" />
                <span class="team-icon-1"
                  ><img src="@/assets/images/team/icon/1.png" alt=""
                /></span>
                <span class="team-icon-2"
                  ><img src="@/assets/images/team/icon/2.png" alt=""
                /></span>
                <span class="team-icon-3"
                  ><img src="@/assets/images/team/icon/3.png" alt=""
                /></span>
              </div>
              <div class="single-team-content text-center">
                <h4>Pauline R. Stapleton</h4>
                <p>Web developer</p>
              </div>
            </div>
          </div>
        </div> -->
    </div>
  </section>
  <!--======  TEAM PART END ======-->
</template>
<script>
import CardComponent from "../components/CardComponent.vue";
import { gsap } from "gsap";
import axios from "axios";
export default {
  components: { CardComponent },
  name: "AnimationProjectIndex",

  data() {
    return {
      images: [],
    };
  },

  mounted() {
    axios.get("https://crypto-backend-seven.vercel.app/Images").then((res) => {
      if (res.data != null) {
        if (res.data.Cards != undefined) {
          this.images = [];
          res.data.Cards.forEach((x) => {
            this.images.push(`https://crypto-backend-seven.vercel.app/${x}`);
          });
        }
      }
    });
  },

  methods: {
    ShowCard(i) {
      this.$refs.showcard.style.display = "flex";
      this.$refs.showImage.src = i;
    },
    HideCard() {
      this.$refs.showcard.style.display = "none";
      gsap.to(this.$refs.close, {
        duration: 0,
        x: 0,
        y: 0,
      });
    },
    CloseAnimation(e) {
      const box = this.$refs.showcard.getBoundingClientRect();
      const offsetX = Math.abs(-e.clientX - box.left + 30 - box.width / 600);
      const offsetY = Math.abs(-e.clientY - box.top + 30 - box.height / 600);
      gsap.to(this.$refs.close, {
        duration: 0,
        x: offsetX,
        y: offsetY,
      });
    },
  },
};
</script>

<style scoped>
.Intersection {
  width: 100vw;
  position: relative;
  left: 0;
  box-sizing: border-box;
  overflow: scroll;
}
.Intersection::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.Intersection {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.showcard {
  display: none;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0%;
  left: 0%;
  z-index: 1;
  background: transparent;
  justify-content: center;
  align-items: center;
}
.showcard > div {
  z-index: 2;
}

#cursorClose {
  width: 50px;
  height: 50px;
  background: white;
  color: black;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 1.5rem;
  border: 1px solid black;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
  z-index: 4;
}
.cards-container {
  min-width: 100vw;
  min-height: 100vh;
  /* overflow: scroll; */
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(10, 1fr);
  background: white;
  margin-top: 11rem;
  transform: perspective(500px) rotate(30deg) skew(-30deg);
}
</style>
