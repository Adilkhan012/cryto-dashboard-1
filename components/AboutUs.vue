<template>
  <!--======  ABOUT-US PART START ======-->
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
              <img v-else :src="image" class="about" width="300" height="430" />
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
            <h5 class="sub-title">About Us</h5>
            <h1>
              {{ AboutUsTitle != "" ? AboutUsTitle : "Dr.Vinessh Vijayan" }}
            </h1>
            <div v-if="AboutUsDescription == ''">
              <p>
                Vineesh Vijayan is an ambitious & optimistic person whose vast
                and extensive experience in Training & Consultancy of Web3.0
                specifically in Blockchain Technology, Cryptocurrency and
                Affiliate Marketing Industry, have influenced and changed lives
                of many people across the globe. His skills added with
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
                than just compromising with the Necessities of life. His thought
                provoking speech has an overwhelming response throughout the
                globe .
              </p>
            </div>
            <p v-else>{{ AboutUsDescription }}</p>
          </div>
          <a href="" class="read-more">Read More</a>
        </div>
      </div>
    </div>
  </section>
  <!--======  ABOUT-US PART END ======-->
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      image: "",
      image2: "",
      image3: "",
      AboutUsDescription: "",
      AboutUsTitle: "",
    };
  },
  mounted() {
    axios.get("https://crypto-backend-seven.vercel.app/Images").then((res) => {
      if (res.data != null) {
        if (res.data.AboutUs != undefined) {
          this.image = `https://crypto-backend-seven.vercel.app/${res.data.AboutUs}`;
        }
        if (res.data.AboutUs2 != undefined) {
          this.image2 = `https://crypto-backend-seven.vercel.app/${res.data.AboutUs2}`;
        }
        if (res.data.AboutUs3 != undefined) {
          this.image3 = `https://crypto-backend-seven.vercel.app/${res.data.AboutUs3}`;
        }
        this.AboutUsTitle = res.data.AboutUsTitle;
        this.AboutUsDescription = res.data.AboutUsDescription;
      }
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
</style>
