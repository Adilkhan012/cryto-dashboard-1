<template>
  <div>
    <div style="display: flex; justify-content: center; align-items: center">
      <img
        v-if="image != ''"
        :src="image"
        alt=""
        width="400"
        height="500"
        @click="SelectImage"
        loading="lazy"
      />
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
    <div class="px-5">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Location</label
        >
        <input type="text" class="form-control" v-model="JoinEventLocation" />
      </div>

      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Email Us</label
        >
        <input type="text" class="form-control" v-model="JoinEventEmail" />
      </div>

      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Phone</label>
        <input type="text" class="form-control" v-model="JoinEventPhone" />
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
      JoinEventLocation: "",
      JoinEventEmail: "",
      JoinEventPhone: "",
      imageFile: null,
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
        .get("https://crypto-backend-seven.vercel.app/Images")
        .then((res) => {
          if (res.data != null) {
            if (res.data.JoinEvent != undefined) {
              this.image = `https://crypto-backend-seven.vercel.app/${res.data.JoinEvent}`;
            }
            this.JoinEventLocation = res.data.JoinEventLocation;
            this.JoinEventEmail = res.data.JoinEventEmail;
            this.JoinEventPhone = res.data.JoinEventPhone;
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
      var form = new FormData();
      form.append("file", this.imageFile);
      form.append("JoinEventLocation", this.JoinEventLocation);
      form.append("JoinEventEmail", this.JoinEventEmail);
      form.append("JoinEventPhone", this.JoinEventPhone);
      axios
        .post("https://crypto-backend-seven.vercel.app/JoinEvent", form)
        .then(async (res) => {
          axios
            .get("https://crypto-backend-seven.vercel.app/Images")
            .then((res) => {
              if (res.data != null) {
                if (res.data.JoinEvent != undefined) {
                  this.image = `https://crypto-backend-seven.vercel.app/${res.data.JoinEvent}`;
                }
                this.JoinEventLocation = res.data.JoinEventLocation;
                this.JoinEventEmail = res.data.JoinEventEmail;
                this.JoinEventPhone = res.data.JoinEventPhone;
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
<style lang="scss" scoped></style>
