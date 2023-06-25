<template>
  <div style="overflow: scroll; height: 93.5vh">
    <div class="loader" v-if="loader">
      <img src="@/assets/loader2.webp" alt="" />
    </div>
    <div
      style="
        width: 79%;
        margin: 2rem auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
      "
    >
      <div>
        <label for="">Select All : </label>
        <input
          type="checkbox"
          v-model="selectAll"
          @change="SelectAll"
          style="transform: scale(1.5); margin-left: 1rem"
        />
      </div>
      <button
        style="
          padding: 0.6rem 2rem;
          border-radius: 10px;
          background: red;
          color: white;
        "
        v-if="delBtn"
        @click="bulkDelete"
      >
        Delete
      </button>
    </div>
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
        />
        <div v-for="i in images" :key="i" style="position: relative">
          <input
            type="checkbox"
            style="
              position: absolute;
              left: 3%;
              top: 3%;
              font-size: 2rem;
              font-weight: bold;
              cursor: pointer;
              transform: scale(1.5);
            "
            ref="deleteImage"
            multiple
            @change="Select"
          />
          <img :src="i" alt="" width="400" height="500" loading="lazy" />
          <span
            style="
              position: absolute;
              right: 3%;
              top: 0%;
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
        multiple
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
      selectAll: false,
      config: null,
      deleteimages: [],
      delBtn: false,
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
          if (res.data.Cards != undefined) {
            this.images = [];
            res.data.Cards.forEach((x) => {
              this.images.push(`${this.config.public.BaseUrl}/${x}`);
            });
          }
        }
      });
    }
  },
  methods: {
    SelectAll(e) {
      console.log(e.target.checked);
      this.$refs.deleteImage.forEach((x) => {
        x.checked = e.target.checked;
      });
      this.Select();
    },
    Select() {
      this.deleteimages = [];
      this.$refs.deleteImage.map((x) => {
        if (x.checked) {
          this.deleteimages.push(
            x.nextSibling.src.split("/").at(-1).toString()
          );
        }
      });
      if (this.deleteimages.length === this.$refs.deleteImage.length) {
        this.selectAll = true;
      } else {
        this.selectAll = false;
      }
      if (this.deleteimages.length > 0) {
        this.delBtn = true;
      } else {
        this.delBtn = false;
      }
    },
    bulkDelete() {
      this.loader = true;
      console.log(this.deleteimages);
      var obj = {
        Cards: this.deleteimages,
        Type: "cards",
      };
      axios
        .post(`${this.config.public.BaseUrl}/BulkRemoveImages`, obj)
        .then((res) => {
          this.loader = false;
          this.selectAll = false;
          axios.get(`${this.config.public.BaseUrl}/Images`).then((res) => {
            if (res.data != null) {
              if (res.data.Cards != undefined) {
                this.images = [];
                res.data.Cards.forEach((x) => {
                  this.images.push(`${this.config.public.BaseUrl}/${x}`);
                });
              }
            }
          });
        });
    },
    RemoveImage(i) {
      this.loader = true;
      var obj = {
        type: "cards",
        filename: i.split("/").at(-1),
      };
      console.log(obj);
      axios
        .post(`${this.config.public.BaseUrl}/RemoveImage`, obj)
        .then((res) => {
          this.loader = false;
          axios.get(`${this.config.public.BaseUrl}/Images`).then((res) => {
            if (res.data != null) {
              if (res.data.Cards != undefined) {
                this.images = [];
                res.data.Cards.forEach((x) => {
                  this.images.push(`${this.config.public.BaseUrl}/${x}`);
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
      this.loader = true;
      console.log();
      var form = new FormData();
      for (var i = 0; i < e.target.files.length; i++) {
        console.log(e.target.files[i]);
        form.append("file", e.target.files[i]);
      }

      axios.post(`${this.config.public.BaseUrl}/Cards`, form).then((res) => {
        axios.get(`${this.config.public.BaseUrl}/Images`).then((res) => {
          this.loader = false;
          if (res.data != null) {
            if (res.data.Cards != undefined) {
              this.images = [];
              res.data.Cards.forEach((x) => {
                this.images.push(`${this.config.public.BaseUrl}/${x}`);
              });
            }
          }
        });
      });
    },
  },
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
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
