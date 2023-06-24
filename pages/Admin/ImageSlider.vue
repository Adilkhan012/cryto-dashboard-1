<template>
  <div style="overflow: scroll; height: 93.5vh">
    <div style="display: flex; justify-content: center; align-items: center">
      <div
        v-if="images.length > 0"
        style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 2rem"
      >
        <img
          src="@/assets/ImagePlaceholder.jpg"
          alt=""
          width="400"
          height="500"
          @click="SelectImage"
          v-if="images.length < 20"
        />
        <div v-for="i in images" :key="i" style="position: relative">
          <img :src="i" alt="" width="400" height="500" loading="lazy" />
          <span
            style="
              position: absolute;
              right: 5%;
              top: 5%;
              font-size: 2rem;
              font-weight: bold;
              cursor: pointer;
            "
            @click="RemoveImage(i)"
            >x</span
          >
        </div>
      </div>

      <img
        v-else
        src="@/assets/ImagePlaceholder.jpg"
        alt=""
        width="400"
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
import axios from "axios";
definePageMeta({
  layout: "dashboard",
});
</script>
<script>
export default {
  data() {
    return {
      images: [],
    };
  },

  mounted() {
    if (localStorage.getItem("UserSession") == null) {
      navigateTo("/Admin/Login");
    }
    var session = JSON.parse(localStorage.getItem("UserSession"));
    console.log("asdf");
    if (new Date(session.exp).getTime() <= new Date().getTime()) {
      console.log("Session Expired");
      localStorage.removeItem("UserSession");
      navigateTo("/Admin/Login");
    } else {
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
        });
    }
  },
  methods: {
    RemoveImage(i) {
      var obj = {
        type: "slider",
        filename: i.split("/").at(-1),
      };
      console.log(obj);
      axios
        .post(
          "https://crypto-backend-production.up.railway.app/RemoveImage",
          obj
        )
        .then((res) => {
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
            });
        });
    },
    SelectImage() {
      this.$refs.image.click();
    },
    UploadImage(e) {
      console.log(e.target.files[0]);
      var form = new FormData();
      form.append("file", e.target.files[0]);
      axios
        .post(
          "https://crypto-backend-production.up.railway.app/ImageSlider",
          form
        )
        .then((res) => {
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
            });
        });
    },
  },
};
</script>
<style lang="scss" scoped></style>
