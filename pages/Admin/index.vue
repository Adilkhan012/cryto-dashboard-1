<template>
  <div>
    <div class="loader" v-if="loader">
      <img src="@/assets/loader2.webp" alt="" />
    </div>
    <div style="display: flex; justify-content: center; align-items: center">
      <img
        v-if="image != ''"
        :src="image"
        alt=""
        width="800"
        height="500"
        @click="SelectImage"
        loading="lazy"
      />
      <img
        v-else
        src="@/assets/ImagePlaceholder.jpg"
        alt=""
        width="800"
        height="500"
        @click="SelectImage"
      />
      <input
        style="display: none"
        type="file"
        ref="image"
        @change="UploadImage"
      />
      <!-- <img v-if="image == ''" src="@/assets/ImagePlaceholder.jpg" alt="" /> -->
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
definePageMeta({
  layout: "dashboard",
});
</script>
<script>
export default {
  data() {
    return {
      image: "",
      config: null,
      loader: false,
    };
  },
  mounted() {
    this.config = useRuntimeConfig();
    if (localStorage.getItem("UserSession") == null) {
      navigateTo("/Admin/Login");
      return;
    }

    var session = JSON.parse(localStorage.getItem("UserSession"));
    if (session === null) {
      navigateTo("/Admin/Login");
    }
    console.log("asdf");
    if (new Date(session.exp).getTime() <= new Date().getTime()) {
      console.log("Session Expired");
      localStorage.removeItem("UserSession");
      navigateTo("/Admin/Login");
    } else {
      this.loader = true;
      axios.get(`${this.config.public.BaseUrl}/Images`).then((res) => {
        this.loader = false;
        this.image = `${this.config.public.BaseUrl}/${res.data.Banner}`;
      });
    }
  },
  methods: {
    SelectImage() {
      this.$refs.image.click();
    },
    UploadImage(e) {
      this.loader = true;
      console.log(e.target.files[0]);
      var form = new FormData();
      form.append("file", e.target.files[0]);
      axios.post(`${this.config.public.BaseUrl}/Banner`, form).then((res) => {
        axios.get(`${this.config.public.BaseUrl}/Images`).then((res) => {
          this.loader = false;
          this.image = `${this.config.public.BaseUrl}/${res.data.Banner}`;
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.loader {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 7%;
  z-index: 100;
  background: white;
  opacity: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 100ms ease-in-out;
}
</style>
