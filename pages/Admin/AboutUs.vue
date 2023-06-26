<template>
  <div>
    <div class="loader" v-if="loader">
      <img src="@/assets/loader2.webp" alt="" />
    </div>
    <div
      style="
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
      "
    >
      <div>
        <img
          v-if="image != '' && image != undefined"
          :src="image"
          alt=""
          width="300"
          height="430"
          @click="SelectImage('image')"
          loading="lazy"
        />
        <img
          v-else
          src="@/assets/ImagePlaceholder.jpg"
          alt=""
          width="300"
          height="430"
          @click="SelectImage('image')"
        />
        <input
          style="display: none"
          type="file"
          ref="image"
          @change="UploadImage"
        />
      </div>
      <div style="display: flex; flex-direction: column; gap: 2rem">
        <img
          v-if="image2 != '' && image2 != undefined"
          :src="image2"
          alt=""
          width="500"
          height="360"
          @click="SelectImage('image2')"
          loading="lazy"
        />
        <img
          v-else
          src="@/assets/ImagePlaceholder.jpg"
          alt=""
          width="500"
          height="360"
          @click="SelectImage('image2')"
        />
        <img
          v-if="image3 != '' && image3 != undefined"
          :src="image3"
          alt=""
          width="280"
          height="100"
          @click="SelectImage('image3')"
          loading="lazy"
        />
        <img
          v-else
          src="@/assets/ImagePlaceholder.jpg"
          alt=""
          width="280"
          height="100"
          @click="SelectImage('image3')"
        />
      </div>
      <!-- <img v-if="image == ''" src="@/assets/ImagePlaceholder.jpg" alt="" /> -->
    </div>
    <div class="px-5">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Title</label>
        <input type="text" class="form-control" v-model="AboutUsTitle" />
      </div>
      <div class="mb-3">
        <label class="form-label">Description</label>
        <textarea
          class="form-control"
          v-model="AboutUsDescription"
          rows="5"
        ></textarea>
      </div>
      <button
        type="button"
        style="
          padding: 0.5rem 0.8rem;
          background: #007bff;
          color: white;
          border-radius: 8px;
          margin: 2rem 0;
          margin-left: auto;
          display: block;
        "
        @click="SaveChanges"
      >
        Save Changes
      </button>
    </div>
  </div>
</template>

<script setup>
import Swal from "sweetalert2";
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
      image2: "",
      image3: "",
      type: "",
      AboutUsTitle: "",
      AboutUsDescription: "",
      imageFile: null,
      image2File: null,
      image3File: null,
      config: null,
      loader: false,
    };
  },

  mounted() {
    this.config = useRuntimeConfig();
    if (localStorage.getItem("UserSession") == null) {
      navigateTo("/Admin/Login");
    }
    var session = JSON.parse(localStorage.getItem("UserSession"));

    if (new Date(session.exp).getTime() <= new Date().getTime()) {
      console.log("Session Expired");
      localStorage.removeItem("UserSession");
      navigateTo("/Admin/Login");
    } else {
      this.loader = true;
      axios.get(`${this.config.public.BaseUrl}/Images`).then((res) => {
        this.loader = false;
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
    }
  },
  methods: {
    SelectImage(type) {
      this.$refs.image.value = null;
      this.$refs.image.click();
      this.type = type;
    },
    UploadImage(e) {
      if (this.type === "image") {
        this.imageFile = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        var _this = this;
        reader.addEventListener("load", (e) => {
          _this.image = e.target.result;
        });
      }
      if (this.type === "image2") {
        this.image2File = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        var _this = this;
        reader.addEventListener("load", (e) => {
          _this.image2 = e.target.result;
        });
      }
      if (this.type === "image3") {
        this.image3File = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        var _this = this;
        reader.addEventListener("load", (e) => {
          _this.image3 = e.target.result;
        });
      }
    },

    SaveChanges() {
      this.loader = true;
      var form = new FormData();
      form.append("image", this.imageFile);
      form.append("image2", this.image2File);
      form.append("image3", this.image3File);
      form.append("AboutUsTitle", this.AboutUsTitle);
      form.append("AboutUsDescription", this.AboutUsDescription);
      axios
        .post(`${this.config.public.BaseUrl}/AboutUs`, form)
        .then(async (res) => {
          axios.get(`${this.config.public.BaseUrl}/Images`).then((res) => {
            this.loader = false;
            if (res.data != null) {
              if (res.data.AboutUs != undefined) {
                this.image = `${this.config.public.BaseUrl}/${res.data.AboutUs}`;
                this.AboutUsTitle = res.data.AboutUsTitle;
                this.AboutUsDescription = res.data.AboutUsDescription;
              }
            }
          });
          const Toast = Swal.mixin({
            toast: true,
            position: "top-right",
            iconColor: "green",
            customClass: {
              popup: "colored-toast",
            },
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
          });
          await Toast.fire({
            icon: "success",
            title: "Saved",
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
