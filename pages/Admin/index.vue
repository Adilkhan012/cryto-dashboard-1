<template>
  <div>
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
    };
  },
  mounted() {
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
      axios
        .get("https://crypto-backend-seven.vercel.app/Images")
        .then((res) => {
          this.image = `https://crypto-backend-seven.vercel.app/${res.data.Banner}`;
        });
    }
  },
  methods: {
    SelectImage() {
      this.$refs.image.click();
    },
    UploadImage(e) {
      console.log(e.target.files[0]);
      var form = new FormData();
      form.append("file", e.target.files[0]);
      axios
        .post("https://crypto-backend-seven.vercel.app/Banner", form)
        .then((res) => {
          axios
            .get("https://crypto-backend-seven.vercel.app/Images")
            .then((res) => {
              this.image = `https://crypto-backend-seven.vercel.app/${res.data.Banner}`;
            });
        });
    },
  },
};
</script>
<!-- <script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  beforeMount() {
    if (localStorage.getItem("UserSession") == null) {
      navigateTo("/Admin/Login");
    }
    var session = JSON.parse(localStorage.getItem("UserSession"));
    if (new Date(session.exp).getTime() <= new Date().getTime()) {
      console.log("Session Expired");
      localStorage.removeItem("UserSession");
      navigateTo("/Admin/Login");
    }
  },
});
</script> -->

<style lang="scss" scoped></style>
