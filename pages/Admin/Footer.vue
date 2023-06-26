<template>
  <div>
    <div class="loader" v-if="loader">
      <img src="@/assets/loader2.webp" alt="" />
    </div>
    <div class="px-5">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Phone</label>
        <input type="text" class="form-control" v-model="FooterPhone" />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Location</label
        >
        <input type="text" class="form-control" v-model="FooterLocation" />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Timing</label>
        <input type="text" class="form-control" v-model="FooterTiming" />
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
import axios from "axios";
definePageMeta({
  layout: "dashboard",
});
</script>
<script>
export default {
  data() {
    return {
      FooterPhone: "",
      FooterLocation: "",
      FooterTiming: "",
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
          this.FooterPhone = res.data.FooterPhone;
          this.FooterLocation = res.data.FooterLocation;
          this.FooterTiming = res.data.FooterTiming;
        }
      });
    }
  },
  methods: {
    SaveChanges() {
      this.loader = true;
      var obj = {
        FooterPhone: this.FooterPhone,
        FooterLocation: this.FooterLocation,
        FooterTiming: this.FooterTiming,
      };

      axios.post(`${this.config.public.BaseUrl}/Footer`, obj).then((res) => {
        axios.get(`${this.config.public.BaseUrl}/Images`).then((res) => {
          this.loader = false;
          if (res.data != null) {
            this.FooterPhone = res.data.FooterPhone;
            this.FooterLocation = res.data.FooterLocation;
            this.FooterTiming = res.data.FooterTiming;
          }
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
