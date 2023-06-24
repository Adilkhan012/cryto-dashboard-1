<template>
  <div>
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
      var obj = {
        FooterPhone: this.FooterPhone,
        FooterLocation: this.FooterLocation,
        FooterTiming: this.FooterTiming,
      };

      axios
        .post("https://crypto-backend-seven.vercel.app/Footer", obj)
        .then((res) => {
          axios
            .get("https://crypto-backend-seven.vercel.app/Images")
            .then((res) => {
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
<style lang="scss" scoped></style>
