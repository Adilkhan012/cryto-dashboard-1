<template>
  <!--======  SERVICE PART START ======-->
  <section class="services service-area service-bg pt-140 pb-140" id="Services">
    <div class="container">
      <div class="row text-center">
        <div class="title">
          <h1>Featured Services</h1>
        </div>
      </div>

      <div class="services-items">
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
      config: null,
    };
  },

  mounted() {
    this.config = useRuntimeConfig();
    axios.get(`${this.config.public.BaseUrl}/FeaturedPrograms`).then((res) => {
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
.services-items {
  display: flex;
  gap: 2rem;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
@media (max-width: 750px) {
  .services-items {
    justify-content: center;
  }
}
.title h1 {
  color: #fff;
  font-size: 45px;
  font-weight: 600;
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
