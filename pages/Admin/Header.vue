<template>
  <div>
    <div class="loader" v-if="loader">
      <img src="@/assets/loader2.webp" alt="" />
    </div>
    <div class="px-5">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Facebook link</label
        >
        <input type="text" class="form-control" v-model="FacebookLink" />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Twitter link</label
        >
        <input type="text" class="form-control" v-model="TwitterLink" />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Instagram link</label
        >
        <input type="text" class="form-control" v-model="InstagramLink" />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Whatsapp link</label
        >
        <input type="text" class="form-control" v-model="WhatsappLink" />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Telegram link</label
        >
        <input type="text" class="form-control" v-model="TelegramLink" />
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
    <div
      style="
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
      "
    >
      <label for="">Logo</label>
      <img
        v-if="image != ''"
        :src="image"
        alt=""
        width="200"
        height="200"
        @click="SelectImage"
        loading="lazy"
      />
      <img
        v-else
        src="@/assets/ImagePlaceholder.jpg"
        alt=""
        width="200"
        height="200"
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
      FacebookLink: "",
      TwitterLink: "",
      InstagramLink: "",
      WhatsappLink: "",
      TelegramLink: "",
      imageFile: null,
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
    console.log("asdf");
    if (new Date(session.exp).getTime() <= new Date().getTime()) {
      console.log("Session Expired");
      localStorage.removeItem("UserSession");
      navigateTo("/Admin/Login");
    } else {
      this.loader = true;
      axios.get(`${this.config.public.BaseUrl}/Images`).then((res) => {
        this.loader = false;
        if (res.data != null) {
          console.log(res.data);
          if (res.data.Logo != undefined) {
            this.image = `${this.config.public.BaseUrl}/${res.data.Logo}`;
          }
          this.FacebookLink =
            res.data.FacebookLink != undefined ? res.data.FacebookLink : "";
          this.TwitterLink =
            res.data.TwitterLink != undefined ? res.data.TwitterLink : "";
          this.InstagramLink =
            res.data.InstagramLink != undefined ? res.data.InstagramLink : "";
          this.WhatsappLink =
            res.data.WhatsappLink != undefined ? res.data.WhatsappLink : "";
          this.TelegramLink =
            res.data.TelegramLink != undefined ? res.data.TelegramLink : "";
        }
      });
    }
  },
  methods: {
    SelectImage() {
      this.$refs.image.click();
    },
    UploadImage(e) {
      this.imageFile = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      var _this = this;
      reader.addEventListener("load", (e) => {
        _this.image = e.target.result;
      });
    },
    SaveChanges() {
      this.loader = true;
      var form = new FormData();
      form.append("file", this.imageFile);
      form.append("FacebookLink", this.FacebookLink);
      form.append("TwitterLink", this.TwitterLink);
      form.append("InstagramLink", this.InstagramLink);
      form.append("WhatsappLink", this.WhatsappLink);
      form.append("TelegramLink", this.TelegramLink);
      axios
        .post(`${this.config.public.BaseUrl}/Header`, form)
        .then(async (res) => {
          axios.get(`${this.config.public.BaseUrl}/Images`).then((res) => {
            this.loader = false;
            if (res.data != null) {
              console.log(res.data);
              if (res.data.Logo != undefined) {
                this.image = `${this.config.public.BaseUrl}/${res.data.Logo}`;
              }
              this.FacebookLink =
                res.data.FacebookLink != undefined ? res.data.FacebookLink : "";
              this.TwitterLink =
                res.data.TwitterLink != undefined ? res.data.TwitterLink : "";
              this.InstagramLink =
                res.data.InstagramLink != undefined
                  ? res.data.InstagramLink
                  : "";
              this.WhatsappLink =
                res.data.WhatsappLink != undefined ? res.data.WhatsappLink : "";
              this.TelegramLink =
                res.data.TelegramLink != undefined ? res.data.TelegramLink : "";
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
