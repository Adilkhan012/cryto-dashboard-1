<template>
  <div>
    <div class="loader" v-if="loader">
      <img src="@/assets/loader2.webp" alt="" />
    </div>
    <div style="display: flex; justify-content: center; align-items: center">
      <div v-if="form.BannerImage != '' && form.BannerImage != undefined">
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
          <div
            v-if="form.Image11 != '' && form.Image11 != undefined"
            style="position: relative"
          >
            <img
              :src="form.Image11"
              alt=""
              width="400"
              height="500"
              loading="lazy"
              @click="SelectImage('image11')"
            />
            <span
              style="
                position: absolute;
                right: 3%;
                top: 0%;
                font-size: 2rem;
                font-weight: bold;
                cursor: pointer;
              "
              @click="RemoveImage('image11')"
              >x</span
            >
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
          <div
            v-if="form.Image12 != '' && form.Image12"
            style="position: relative"
          >
            <img
              :src="form.Image12"
              alt=""
              width="400"
              height="500"
              loading="lazy"
              @click="SelectImage('image12')"
            />
            <span
              style="
                position: absolute;
                right: 3%;
                top: 0%;
                font-size: 2rem;
                font-weight: bold;
                cursor: pointer;
              "
              @click="RemoveImage('image12')"
              >x</span
            >
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
          <div
            v-if="form.Image21 != '' && form.Image21 != undefined"
            style="position: relative"
          >
            <img
              :src="form.Image21"
              alt=""
              width="400"
              height="500"
              loading="lazy"
              @click="SelectImage('image21')"
            />
            <span
              style="
                position: absolute;
                right: 3%;
                top: 0%;
                font-size: 2rem;
                font-weight: bold;
                cursor: pointer;
              "
              @click="RemoveImage('image21')"
              >x</span
            >
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
          <div
            v-if="form.Image22 != '' && form.Image22 != undefined"
            style="position: relative"
          >
            <img
              :src="form.Image22"
              alt=""
              width="400"
              height="500"
              loading="lazy"
              @click="SelectImage('image22')"
            />
            <span
              style="
                position: absolute;
                right: 3%;
                top: 0%;
                font-size: 2rem;
                font-weight: bold;
                cursor: pointer;
              "
              @click="RemoveImage('image22')"
              >x</span
            >
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
          <div
            v-if="form.Image31 != '' && form.Image31 != undefined"
            style="position: relative"
          >
            <img
              :src="form.Image31"
              alt=""
              width="400"
              height="500"
              loading="lazy"
              @click="SelectImage('image31')"
            />
            <span
              style="
                position: absolute;
                right: 3%;
                top: 0%;
                font-size: 2rem;
                font-weight: bold;
                cursor: pointer;
              "
              @click="RemoveImage('image31')"
              >x</span
            >
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
          <div
            v-if="form.Image32 != '' && form.Image32 != undefined"
            style="position: relative"
          >
            <img
              :src="form.Image32"
              alt=""
              width="400"
              height="500"
              loading="lazy"
              @click="SelectImage('image32')"
            />
            <span
              style="
                position: absolute;
                right: 3%;
                top: 0%;
                font-size: 2rem;
                font-weight: bold;
                cursor: pointer;
              "
              @click="RemoveImage('image32')"
              >x</span
            >
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
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Title 4</label>
        <input type="text" class="form-control" v-model="form.Title4" />
      </div>

      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Description 4</label
        >
        <input type="text" class="form-control" v-model="form.Description4" />
      </div>
      <div style="display: flex; justify-content: space-around">
        <div>
          <div
            v-if="form.Image41 != '' && form.Image41 != undefined"
            style="position: relative"
          >
            <img
              :src="form.Image41"
              alt=""
              width="400"
              height="500"
              loading="lazy"
              @click="SelectImage('image41')"
            />
            <span
              style="
                position: absolute;
                right: 3%;
                top: 0%;
                font-size: 2rem;
                font-weight: bold;
                cursor: pointer;
              "
              @click="RemoveImage('image41')"
              >x</span
            >
          </div>

          <img
            v-else
            src="@/assets/ImagePlaceholder.jpg"
            alt=""
            width="400"
            height="500"
            @click="SelectImage('image41')"
          />
        </div>
        <div>
          <div
            v-if="form.Image42 != '' && form.Image42 != undefined"
            style="position: relative"
          >
            <img
              :src="form.Image42"
              alt=""
              width="400"
              height="500"
              loading="lazy"
              @click="SelectImage('image42')"
            />
            <span
              style="
                position: absolute;
                right: 3%;
                top: 0%;
                font-size: 2rem;
                font-weight: bold;
                cursor: pointer;
              "
              @click="RemoveImage('image42')"
              >x</span
            >
          </div>

          <img
            v-else
            src="@/assets/ImagePlaceholder.jpg"
            alt=""
            width="400"
            height="500"
            @click="SelectImage('image42')"
          />
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Title 5</label>
        <input type="text" class="form-control" v-model="form.Title5" />
      </div>

      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Description 5</label
        >
        <input type="text" class="form-control" v-model="form.Description5" />
      </div>
      <div style="display: flex; justify-content: space-around">
        <div>
          <div
            v-if="form.Image51 != '' && form.Image51 != undefined"
            style="position: relative"
          >
            <img
              :src="form.Image51"
              alt=""
              width="400"
              height="500"
              loading="lazy"
              @click="SelectImage('image51')"
            />
            <span
              style="
                position: absolute;
                right: 3%;
                top: 0%;
                font-size: 2rem;
                font-weight: bold;
                cursor: pointer;
              "
              @click="RemoveImage('image51')"
              >x</span
            >
          </div>

          <img
            v-else
            src="@/assets/ImagePlaceholder.jpg"
            alt=""
            width="400"
            height="500"
            @click="SelectImage('image51')"
          />
        </div>
        <div>
          <div
            v-if="form.Image52 != '' && form.Image52 != undefined"
            style="position: relative"
          >
            <img
              :src="form.Image52"
              alt=""
              width="400"
              height="500"
              loading="lazy"
              @click="SelectImage('image52')"
            />
            <span
              style="
                position: absolute;
                right: 3%;
                top: 0%;
                font-size: 2rem;
                font-weight: bold;
                cursor: pointer;
              "
              @click="RemoveImage('image52')"
              >x</span
            >
          </div>

          <img
            v-else
            src="@/assets/ImagePlaceholder.jpg"
            alt=""
            width="400"
            height="500"
            @click="SelectImage('image52')"
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
        Title4: "",
        Description4: "",
        Image41: "",
        ImageFile41: null,
        Image42: "",
        ImageFile42: null,
        Title5: "",
        Description5: "",
        Image51: "",
        ImageFile51: null,
        Image52: "",
        ImageFile52: null,
        Type: "",
      },
      fileType: "",
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
      this.fetchData();
    }
    this.form.Type = this.Type;
  },

  methods: {
    fetchData() {
      axios
        .get(`${this.config.public.BaseUrl}/FeaturedProgram?type=${this.Type}`)
        .then((res) => {
          this.loader = false;
          if (res.data != null) {
            console.log(res.data);
            if (res.data.BannerImage != undefined) {
              this.form.BannerImage = `${this.config.public.BaseUrl}/${res.data.BannerImage}`;
            }
            if (res.data.Image11 != "" && res.data.Image11 != undefined) {
              this.form.Image11 = `${this.config.public.BaseUrl}/${res.data.Image11}`;
            } else {
              this.form.Image11 = "";
            }
            if (res.data.Image12 != "" && res.data.Image12 != undefined) {
              this.form.Image12 = `${this.config.public.BaseUrl}/${res.data.Image12}`;
            } else {
              this.form.Image12 = "";
            }
            if (res.data.Image21 != "" && res.data.Image21 != undefined) {
              this.form.Image21 = `${this.config.public.BaseUrl}/${res.data.Image21}`;
            } else {
              this.form.Image21 = "";
            }
            if (res.data.Image22 != "" && res.data.Image22 != undefined) {
              this.form.Image22 = `${this.config.public.BaseUrl}/${res.data.Image22}`;
            } else {
              this.form.Image22 = "";
            }
            if (res.data.Image31 != "" && res.data.Image31 != undefined) {
              this.form.Image31 = `${this.config.public.BaseUrl}/${res.data.Image31}`;
            } else {
              this.form.Image31 = "";
            }
            if (res.data.Image32 != "" && res.data.Image32 != undefined) {
              this.form.Image32 = `${this.config.public.BaseUrl}/${res.data.Image32}`;
            } else {
              this.form.Image32 = "";
            }
            if (res.data.Image41 != "" && res.data.Image41 != undefined) {
              this.form.Image41 = `${this.config.public.BaseUrl}/${res.data.Image41}`;
            } else {
              this.form.Image41 = "";
            }
            if (res.data.Image42 != "" && res.data.Image42 != undefined) {
              this.form.Image42 = `${this.config.public.BaseUrl}/${res.data.Image42}`;
            } else {
              this.form.Image42 = "";
            }
            if (res.data.Image51 != "" && res.data.Image51 != undefined) {
              this.form.Image51 = `${this.config.public.BaseUrl}/${res.data.Image51}`;
            } else {
              this.form.Image51 = "";
            }
            if (res.data.Image52 != "" && res.data.Image52 != undefined) {
              this.form.Image52 = `${this.config.public.BaseUrl}/${res.data.Image52}`;
            } else {
              this.form.Image52 = "";
            }
            this.form.Title1 = res.data.Title1;
            this.form.Description1 = res.data.Description2;
            this.form.Title2 = res.data.Title2;
            this.form.Description2 = res.data.Description2;
            this.form.Title3 = res.data.Title3;
            this.form.Description3 = res.data.Description3;
            this.form.Title4 = res.data.Title4;
            this.form.Description4 = res.data.Description4;
            this.form.Title5 = res.data.Title5;
            this.form.Description5 = res.data.Description5;
          }
        });
    },
    RemoveImage(i) {
      this.loader = true;
      var obj = {
        Image: i,
        Type: this.Type,
      };
      axios
        .post(`${this.config.public.BaseUrl}/RemoveFeaturedImages`, obj)
        .then((res) => {})
        .finally(() => {
          this.fetchData();
        });
    },
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
      } else if (this.fileType === "image41") {
        this.form.ImageFile41 = this.$refs.image.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(this.$refs.image.files[0]);
        var _this = this;
        reader.addEventListener("load", (e) => {
          _this.form.Image41 = e.target.result;
        });
      } else if (this.fileType === "image42") {
        this.form.ImageFile42 = this.$refs.image.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(this.$refs.image.files[0]);
        var _this = this;
        reader.addEventListener("load", (e) => {
          _this.form.Image42 = e.target.result;
        });
      } else if (this.fileType === "image51") {
        this.form.ImageFile51 = this.$refs.image.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(this.$refs.image.files[0]);
        var _this = this;
        reader.addEventListener("load", (e) => {
          _this.form.Image51 = e.target.result;
        });
      } else if (this.fileType === "image52") {
        this.form.ImageFile52 = this.$refs.image.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(this.$refs.image.files[0]);
        var _this = this;
        reader.addEventListener("load", (e) => {
          _this.form.Image52 = e.target.result;
        });
      }
    },
    SaveChanges() {
      this.loader = true;
      var form = new FormData();
      form.append("BannerImage", this.form.BannerImageFile);
      form.append("image11", this.form.ImageFile11);
      form.append("image12", this.form.ImageFile12);
      form.append("image21", this.form.ImageFile21);
      form.append("image22", this.form.ImageFile22);
      form.append("image31", this.form.ImageFile31);
      form.append("image32", this.form.ImageFile32);
      form.append("image41", this.form.ImageFile41);
      form.append("image42", this.form.ImageFile42);
      form.append("image51", this.form.ImageFile51);
      form.append("image52", this.form.ImageFile52);

      form.append("Type", this.form.Type);
      form.append("Description5", this.form.Description5);
      form.append("Title5", this.form.Title5);
      form.append("Description4", this.form.Description4);
      form.append("Title4", this.form.Title4);
      form.append("Description3", this.form.Description3);
      form.append("Title3", this.form.Title3);
      form.append("Description2", this.form.Description2);
      form.append("Title2", this.form.Title2);
      form.append("Description1", this.form.Description1);
      form.append("Title1", this.form.Title1);
      axios
        .post(`${this.config.public.BaseUrl}/FeaturedPrograms`, form)
        .then(async (res) => {
          this.fetchData();
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
