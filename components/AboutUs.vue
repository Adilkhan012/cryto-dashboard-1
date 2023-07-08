<template>
  <!--======  ABOUT-US PART START ======-->
  <div>
    <section class="about_us" id="About">
      <div class="container">
        <div class="row">
          <div class="col-md-6 m-md-auto">
            <div class="about-img">
              <div class="img-1">
                <img
                  v-if="image2 == ''"
                  src="@/assets/images/about_img.png"
                  alt=""
                  class="about"
                  width="500"
                  height="360"
                />
                <img
                  v-else
                  :src="image2"
                  alt=""
                  class="about"
                  width="500"
                  height="360"
                />
              </div>
              <div class="img-2">
                <img
                  v-if="image == ''"
                  src="@/assets/images/about_img_1.png"
                  class="about"
                  width="300"
                  height="430"
                />
                <img
                  v-else
                  :src="image"
                  class="about"
                  width="300"
                  height="430"
                />
              </div>
              <div class="img-3">
                <img
                  v-if="image3 == ''"
                  src="@/assets/images/about_img_2.png"
                  alt=""
                  class="about"
                  width="280"
                  height="100"
                />
                <img
                  v-else
                  :src="image3"
                  alt=""
                  class="about"
                  width="280"
                  height="100"
                />
              </div>
              <div class="shape movingX">
                <img src="@/assets/images/shape/about-shape.png" alt="" />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="about-content">
              <h1>
                {{ AboutUsTitle != "" ? AboutUsTitle : "Dr.Vinessh Vijayan" }}
              </h1>
              <div v-if="AboutUsDescription == ''">
                <p>
                  Vineesh Vijayan is an ambitious & optimistic person whose vast
                  and extensive experience in Training & Consultancy of Web3.0
                  specifically in Blockchain Technology, Cryptocurrency and
                  Affiliate Marketing Industry, have influenced and changed
                  lives of many people across the globe. His skills added with
                  forbearance marks him out in any field he lands his feet into.
                </p>
                <p>
                  He is an Entrepreneur, Internationally acclaimed Business
                  Consultant, Speaker, Coach and a Co-Author who has been
                  appreciated Globally for his Contribution in Spreading the
                  Knowledge of Blockchain to Masses.
                </p>
                <p>
                  He Inspires and Encourages people around the world to Discover
                  their True Potential & Help to to Work for their Dreams rather
                  than just compromising with the Necessities of life. His
                  thought provoking speech has an overwhelming response
                  throughout the globe .
                </p>
              </div>
              <p v-else>{{ AboutUsDescription }}</p>
            </div>
            <a href="" class="read-more">Read More</a>
          </div>
        </div>
      </div>
    </section>
    <section
      style="
        display: flex;
        flex-direction: column;
        width: 66%;
        margin: 0rem auto 10rem;
        gap: 5rem;
      "
    >
      <h3 style="font-weight: 700; font-size: clamp(1.8rem, 3vw, 2.45rem)">
        WHY VINEESH VIJAYAN?
      </h3>
      <div
        style="
          display: flex;
          justify-content: center;
          gap: 6rem;
          flex-basis: 1;
          flex-wrap: wrap;
          width: 100%;
        "
      >
        <div
          style="
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 1rem;
          "
        >
          <div
            class="boxes-icon circle"
            style="border-color: #f26c4f; width: 140px; height: 140px"
          >
            <span class="inner-icon"
              ><span class="icon"
                ><i
                  class="fa fa-globe"
                  style="
                    color: #f26c4f;
                    font-size: 30px;
                    line-height: 30px;
                    vertical-align: middle;

                    font-size: 3rem;
                  "
                ></i></span
            ></span>
          </div>
          <span style="font-weight: 500">Global Influencer</span>
        </div>
        <div
          style="
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 1rem;
          "
        >
          <div
            class="boxes-icon circle"
            style="border-color: #f26c4f; width: 140px; height: 140px"
          >
            <span class="inner-icon"
              ><span class="icon"
                ><i
                  class="fa fa-users"
                  style="
                    color: #f26c4f;
                    font-size: 30px;
                    line-height: 30px;
                    vertical-align: middle;
                    font-size: 3rem;
                  "
                ></i></span
            ></span>
          </div>
          <span style="font-weight: 500">Solid Team worker</span>
        </div>
        <div
          style="
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 1rem;
          "
        >
          <div
            class="boxes-icon circle"
            style="border-color: #f26c4f; width: 140px; height: 140px"
          >
            <span class="inner-icon"
              ><span class="icon"
                ><i
                  class="fa fa-lightbulb"
                  style="
                    color: #f26c4f;
                    font-size: 30px;
                    line-height: 30px;
                    vertical-align: middle;
                    font-size: 3rem;
                  "
                ></i></span
            ></span>
          </div>
          <span style="font-weight: 500">Strategic Thinker</span>
        </div>
        <div
          style="
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 1rem;
          "
        >
          <div
            class="boxes-icon circle"
            style="border-color: #f26c4f; width: 140px; height: 140px"
          >
            <span class="inner-icon"
              ><span class="icon"
                ><i
                  class="fa fa-handshake"
                  style="
                    color: #f26c4f;
                    font-size: 30px;
                    line-height: 30px;
                    vertical-align: middle;
                    font-size: 3rem;
                  "
                ></i></span
            ></span>
          </div>
          <span style="font-weight: 500">Highly Committed</span>
        </div>
      </div>
    </section>
    <section class="project-counter-area">
      <div class="container" style="">
        <div
          style="
            display: flex;
            justify-content: space-between;
            flex-basis: 1;
            gap: 3rem;
            flex-wrap: wrap;
            width: 100%;
            margin: auto;
            align-items: center;
          "
        >
          <div class="">
            <div class="counter-icon">
              <i class="fas fa-globe"></i>
            </div>
            <div class="counter-text">
              <h1
                class="count data1"
                ref="data1"
                style="font-size: clamp(2rem, 2vw, 3rem)"
              >
                100000
              </h1>
              +
              <p>Influenced</p>
            </div>
          </div>
          <div class="">
            <div class="counter-icon">
              <i class="fas fa-life-ring"></i>
            </div>
            <div class="counter-text">
              <h1
                class="count data2"
                ref="data2"
                style="font-size: clamp(2rem, 2vw, 3rem)"
              >
                12
              </h1>
              +
              <p>Years Experience</p>
            </div>
          </div>
          <div class="">
            <div class="counter-icon">
              <i class="fas fa-trophy"></i>
            </div>
            <div class="counter-text">
              <h1
                class="count data3"
                ref="data3"
                style="font-size: clamp(2rem, 2vw, 3rem)"
              >
                100
              </h1>
              +
              <p>Events</p>
            </div>
          </div>
          <div class="">
            <div class="counter-icon">
              <i class="fas fa-language"></i>
            </div>
            <div class="counter-text">
              <h1
                class="count data4"
                ref="data4"
                style="font-size: clamp(2rem, 2vw, 3rem)"
              >
                3
              </h1>
              +
              <p>Languages</p>
            </div>
          </div>
          <div class="">
            <div class="counter-icon">
              <i class="fas fa-universal-access"></i>
            </div>
            <div class="counter-text">
              <h1
                class="count data5"
                ref="data5"
                style="font-size: clamp(2rem, 2vw, 3rem)"
              >
                40
              </h1>
              +
              <p>Countries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <!--======  ABOUT-US PART END ======-->
</template>

<script>
import axios from "axios";
import { gsap } from "gsap";
export default {
  data() {
    return {
      image: "",
      image2: "",
      image3: "",
      AboutUsDescription: "",
      AboutUsTitle: "",
      config: null,
    };
  },
  mounted() {
    this.config = useRuntimeConfig();
    axios.get(`${this.config.public.BaseUrl}/Images`).then((res) => {
      if (res.data != null) {
        if (res.data.AboutUs != undefined) {
          this.image = `${this.config.public.BaseUrl}/${res.data.AboutUs}`;
        }
        if (res.data.AboutUs2 != undefined) {
          this.image2 = `${this.config.public.BaseUrl}/${res.data.AboutUs2}`;
        }
        if (res.data.AboutUs3 != undefined) {
          this.image3 = `${this.config.public.BaseUrl}/${res.data.AboutUs3}`;
        }
        this.AboutUsTitle = res.data.AboutUsTitle;
        this.AboutUsDescription = res.data.AboutUsDescription;
      }
    });
    // const item1 = document.querySelector(".data1");
    // const item2 = document.querySelector(".data2");
    // const item3 = document.querySelector(".data3");
    // const item4 = document.querySelector(".data4");
    // const item5 = document.querySelector(".data5");

    gsap.from(this.$refs.data1, {
      textContent: 0,
      duration: 4,
      ease: "power1.in",
      snap: { textContent: 1 },
      stagger: {
        each: 1.0,
        onUpdate: function () {
          this.$refs.data1.innerHTML = numberWithCommas(
            Math.ceil(this.$refs.data1.textContent)
          );
        },
      },
    });
    gsap.from(this.$refs.data2, {
      textContent: 0,
      duration: 4,
      ease: "power1.in",
      snap: { textContent: 1 },
      stagger: {
        each: 1.0,
        onUpdate: function () {
          this.$refs.data2.innerHTML = numberWithCommas(
            Math.ceil(this.$refs.data2.textContent)
          );
        },
      },
    });
    gsap.from(this.$refs.data3, {
      textContent: 0,
      duration: 4,
      ease: "power1.in",
      snap: { textContent: 1 },
      stagger: {
        each: 1.0,
        onUpdate: function () {
          this.$refs.data3.innerHTML = numberWithCommas(
            Math.ceil(this.$refs.data3.textContent)
          );
        },
      },
    });
    gsap.from(this.$refs.data4, {
      textContent: 0,
      duration: 4,
      ease: "power1.in",
      snap: { textContent: 1 },
      stagger: {
        each: 1.0,
        onUpdate: function () {
          this.$refs.data4.innerHTML = numberWithCommas(
            Math.ceil(this.$refs.data4.textContent)
          );
        },
      },
    });
    gsap.from(this.$refs.data5, {
      textContent: 0,
      duration: 4,
      ease: "power1.in",
      snap: { textContent: 1 },
      stagger: {
        each: 1.0,
        onUpdate: function () {
          this.$refs.data5.innerHTML = numberWithCommas(
            Math.ceil(this.$refs.data5.textContent)
          );
        },
      },
    });
  },
};
</script>

<style scoped>
.about_us {
  margin: 60px 0;
  position: relative;
  z-index: 2;
}

.about_us .about-img {
  position: relative;
}

.about_us .about-img .about {
  border-radius: 10px;
}

.about_us .about-img .img-1 {
  text-align: right;
}

.about_us .about-img .img-2 {
  position: absolute;
  top: 12%;
  left: -10%;
}

.about_us .about-img .img-2 .about {
  border: 7px solid #fff;
}

.about_us .about-img .img-3 {
  text-align: right;
  margin-top: 25px;
}

.about_us .about-img .shape {
  position: absolute;
  bottom: -7%;
  left: -25%;
}

.about_us .about-content span {
  margin-bottom: 10px;
  display: inline-block;
  font-size: 20px;
  font-weight: 700;
}

.about_us .about-content h1 {
  font-size: 40px;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 13px;
}

.about_us .about-content p {
  color: #74787c;
  font-size: 16px;
  line-height: 26px;
  margin-bottom: 10px;
}

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

.circle {
  width: 200px;
  height: 200px;
  border: 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}
</style>

<style lang="scss" scoped>
.project-counter-area {
  width: 66%;
  margin: 0rem auto 10rem;
  padding: 0;
  @media screen and (max-width: 1710px) {
    width: 100%;
  }
  .container {
    max-width: 80vw;
    margin: auto;
  }
}
</style>
