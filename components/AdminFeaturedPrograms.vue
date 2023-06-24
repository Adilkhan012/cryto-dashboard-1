<template>
  <div>
    <div style="display: flex; justify-content: center; align-items: center">
      <div v-if="form.BannerImage != ''">
        <img
          :src="form.BannerImage"
          alt=""
          width="400"
          height="500"
          loading="lazy"
          @click="SelectImage('banner')"
        />
      </div>

      <img
        v-else
        src="@/assets/ImagePlaceholder.jpg"
        alt=""
        width="400"
        height="500"
        @click="SelectImage('banner')"
      />

      <!-- <img v-if="image == ''" src="@/assets/ImagePlaceholder.jpg" alt="" /> -->
    </div>
    <input
      style="display: none"
      type="file"
      ref="image"
      @change="UploadImage"
    />
    <div class="px-5">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Title 1</label>
        <input type="text" class="form-control" v-model="form.Title1" />
      </div>

      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Description 1</label
        >
        <input type="text" class="form-control" v-model="form.Description1" />
      </div>
      <div style="display: flex; justify-content: space-around">
        <div>
          <div v-if="form.Image11 != ''">
            <img
              :src="form.Image11"
              alt=""
              width="400"
              height="500"
              loading="lazy"
              @click="SelectImage('image11')"
            />
          </div>

          <img
            v-else
            src="@/assets/ImagePlaceholder.jpg"
            alt=""
            width="400"
            height="500"
            @click="SelectImage('image11')"
          />
        </div>
        <div>
          <div v-if="form.Image12 != ''">
            <img
              :src="form.Image12"
              alt=""
              width="400"
              height="500"
              loading="lazy"
              @click="SelectImage('image12')"
            />
          </div>

          <img
            v-else
            src="@/assets/ImagePlaceholder.jpg"
            alt=""
            width="400"
            height="500"
            @click="SelectImage('image12')"
          />
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Title 2</label>
        <input type="text" class="form-control" v-model="form.Title2" />
      </div>

      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Description 2</label
        >
        <input type="text" class="form-control" v-model="form.Description2" />
      </div>
      <div style="display: flex; justify-content: space-around">
        <div>
          <div v-if="form.Image21 != ''">
            <img
              :src="form.Image21"
              alt=""
              width="400"
              height="500"
              loading="lazy"
              @click="SelectImage('image21')"
            />
          </div>

          <img
            v-else
            src="@/assets/ImagePlaceholder.jpg"
            alt=""
            width="400"
            height="500"
            @click="SelectImage('image21')"
          />
        </div>
        <div>
          <div v-if="form.Image22 != ''">
            <img
              :src="form.Image22"
              alt=""
              width="400"
              height="500"
              loading="lazy"
              @click="SelectImage('image22')"
            />
          </div>

          <img
            v-else
            src="@/assets/ImagePlaceholder.jpg"
            alt=""
            width="400"
            height="500"
            @click="SelectImage('image22')"
          />
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Title 3</label>
        <input type="text" class="form-control" v-model="form.Title3" />
      </div>

      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Description 3</label
        >
        <input type="text" class="form-control" v-model="form.Description3" />
      </div>
      <div style="display: flex; justify-content: space-around">
        <div>
          <div v-if="form.Image31 != ''">
            <img
              :src="form.Image31"
              alt=""
              width="400"
              height="500"
              loading="lazy"
              @click="SelectImage('image31')"
            />
          </div>

          <img
            v-else
            src="@/assets/ImagePlaceholder.jpg"
            alt=""
            width="400"
            height="500"
            @click="SelectImage('image31')"
          />
        </div>
        <div>
          <div v-if="form.Image32 != ''">
            <img
              :src="form.Image32"
              alt=""
              width="400"
              height="500"
              loading="lazy"
              @click="SelectImage('image32')"
            />
          </div>

          <img
            v-else
            src="@/assets/ImagePlaceholder.jpg"
            alt=""
            width="400"
            height="500"
            @click="SelectImage('image32')"
          />
        </div>
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

<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "AdminFeaturedPrograms",
  props: ["Type"],
  data() {
    return {
      form: {
        BannerImage: "",
        BannerImageFile: null,
        Title1: "",
        Description1: "",
        Image11: "",
        ImageFile11: null,
        Image12: "",
        ImageFile12: null,
        Title2: "",
        Description2: "",
        Image21: "",
        ImageFile21: null,
        Image22: "",
        ImageFile22: null,
        Title3: "",
        Description3: "",
        Image31: "",
        ImageFile31: null,
        Image32: "",
        ImageFile32: null,
        Type: "",
      },
      fileType: "",
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
        .get(
          `https://crypto-backend-seven.vercel.app/FeaturedProgram?type=${this.Type}`
        )
        .then((res) => {
          if (res.data != null) {
            console.log(res.data);
            if (res.data.BannerImage != undefined) {
              this.form.BannerImage = `https://crypto-backend-seven.vercel.app/${res.data.BannerImage}`;
            }
            if (res.data.Image11 != undefined) {
              this.form.Image11 = `https://crypto-backend-seven.vercel.app/${res.data.Image11}`;
            }
            if (res.data.Image12 != undefined) {
              this.form.Image12 = `https://crypto-backend-seven.vercel.app/${res.data.Image12}`;
            }
            if (res.data.Image21 != undefined) {
              this.form.Image21 = `https://crypto-backend-seven.vercel.app/${res.data.Image21}`;
            }
            if (res.data.Image22 != undefined) {
              this.form.Image22 = `https://crypto-backend-seven.vercel.app/${res.data.Image22}`;
            }
            if (res.data.Image31 != undefined) {
              this.form.Image31 = `https://crypto-backend-seven.vercel.app/${res.data.Image31}`;
            }
            if (res.data.Image32 != undefined) {
              this.form.Image32 = `https://crypto-backend-seven.vercel.app/${res.data.Image32}`;
            }
            this.form.Title1 = res.data.Title1;
            this.form.Description1 = res.data.Description2;
            this.form.Title2 = res.data.Title2;
            this.form.Description2 = res.data.Description2;
            this.form.Title3 = res.data.Title3;
            this.form.Description3 = res.data.Description3;
          }
        });
    }
    this.form.Type = this.Type;
  },

  methods: {
    SelectImage(type) {
      this.fileType = type;
      this.$refs.image.value = null;
      this.$refs.image.click();
    },
    UploadImage() {
      if (this.fileType == "banner") {
        this.form.BannerImageFile = this.$refs.image.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(this.$refs.image.files[0]);
        var _this = this;
        reader.addEventListener("load", (e) => {
          _this.form.BannerImage = e.target.result;
        });
      } else if (this.fileType === "image11") {
        this.form.ImageFile11 = this.$refs.image.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(this.$refs.image.files[0]);
        var _this = this;
        reader.addEventListener("load", (e) => {
          _this.form.Image11 = e.target.result;
        });
      } else if (this.fileType === "image12") {
        this.form.ImageFile12 = this.$refs.image.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(this.$refs.image.files[0]);
        var _this = this;
        reader.addEventListener("load", (e) => {
          _this.form.Image12 = e.target.result;
        });
      } else if (this.fileType === "image21") {
        this.form.ImageFile21 = this.$refs.image.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(this.$refs.image.files[0]);
        var _this = this;
        reader.addEventListener("load", (e) => {
          _this.form.Image21 = e.target.result;
        });
      } else if (this.fileType === "image22") {
        this.form.ImageFile22 = this.$refs.image.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(this.$refs.image.files[0]);
        var _this = this;
        reader.addEventListener("load", (e) => {
          _this.form.Image22 = e.target.result;
        });
      } else if (this.fileType === "image31") {
        this.form.ImageFile31 = this.$refs.image.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(this.$refs.image.files[0]);
        var _this = this;
        reader.addEventListener("load", (e) => {
          _this.form.Image31 = e.target.result;
        });
      } else if (this.fileType === "image32") {
        this.form.ImageFile32 = this.$refs.image.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(this.$refs.image.files[0]);
        var _this = this;
        reader.addEventListener("load", (e) => {
          _this.form.Image32 = e.target.result;
        });
      }
    },
    SaveChanges() {
      var form = new FormData();
      form.append("BannerImage", this.form.BannerImageFile);
      form.append("image11", this.form.ImageFile11);
      form.append("image12", this.form.ImageFile12);
      form.append("image21", this.form.ImageFile21);
      form.append("image22", this.form.ImageFile22);
      form.append("image31", this.form.ImageFile31);
      form.append("image32", this.form.ImageFile32);

      form.append("Type", this.form.Type);
      form.append("Description3", this.form.Description3);
      form.append("Title3", this.form.Title3);
      form.append("Description2", this.form.Description2);
      form.append("Title2", this.form.Title2);
      form.append("Description1", this.form.Description1);
      form.append("Title1", this.form.Title1);
      axios
        .post("https://crypto-backend-seven.vercel.app/FeaturedPrograms", form)
        .then(async (res) => {
          axios
            .get(
              `https://crypto-backend-seven.vercel.app/FeaturedProgram?type=${this.Type}`
            )
            .then((res) => {
              if (res.data != null) {
                console.log(res.data);
                if (res.data.BannerImage != undefined) {
                  this.form.BannerImage = `https://crypto-backend-seven.vercel.app/${res.data.BannerImage}`;
                }
                if (res.data.Image11 != undefined) {
                  this.form.Image11 = `https://crypto-backend-seven.vercel.app/${res.data.Image11}`;
                }
                if (res.data.Image12 != undefined) {
                  this.form.Image12 = `https://crypto-backend-seven.vercel.app/${res.data.Image12}`;
                }
                if (res.data.Image21 != undefined) {
                  this.form.Image21 = `https://crypto-backend-seven.vercel.app/${res.data.Image21}`;
                }
                if (res.data.Image22 != undefined) {
                  this.form.Image22 = `https://crypto-backend-seven.vercel.app/${res.data.Image22}`;
                }
                if (res.data.Image31 != undefined) {
                  this.form.Image31 = `https://crypto-backend-seven.vercel.app/${res.data.Image31}`;
                }
                if (res.data.Image32 != undefined) {
                  this.form.Image32 = `https://crypto-backend-seven.vercel.app/${res.data.Image32}`;
                }
                this.form.Title1 = res.data.Title1;
                this.form.Description1 = res.data.Description2;
                this.form.Title2 = res.data.Title2;
                this.form.Description2 = res.data.Description2;
                this.form.Title3 = res.data.Title3;
                this.form.Description3 = res.data.Description3;
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
