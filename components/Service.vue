<template>
  <!--======  SERVICE PART START ======-->
  <section class="services service-area service-bg pt-140 pb-140" id="Services">
    <div class="container">
      <div class="row text-center">
        <div class="title">
          <h5>Our Programs</h5>
          <h1>Featured Services</h1>
        </div>
      </div>

      <div class="row">
        <atroposC v-for="i in images" :key="i" :image="i" />
      </div>
    </div>
  </section>
  <!--======  Service PART END ======-->
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      images: [],
    };
  },

  mounted() {
    axios
      .get("https://crypto-backend-seven.vercel.app/FeaturedPrograms")
      .then((res) => {
        if (res.data != null) {
          if (res.data != undefined) {
            this.images = [];
            this.images = res.data;
          }
        }
      });
  },

  methods: {},
};
</script>

<style scoped>
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
</style>
