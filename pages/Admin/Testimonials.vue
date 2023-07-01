<template>
  <div>
    <div class="loader" v-if="loader">
      <img src="@/assets/loader2.webp" alt="" />
    </div>
    <div class="overlay" @click="close" v-if="popup"></div>
    <div>
      <button class="Add-Video" @click="open">Add Testimonials</button>
      <div class="px-5 popups" v-if="popup">
        <div style="display: flex; justify-content: space-around">
          <div>
            <div v-if="Image != ''">
              <img
                :src="Image"
                alt=""
                width="200"
                height="200"
                loading="lazy"
                @click="SelectImage"
              />
            </div>

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
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Name</label>
          <input type="text" class="form-control" v-model="Name" />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label"
            >Designation</label
          >
          <input type="text" class="form-control" v-model="Designation" />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label"
            >Remarks</label
          >
          <textarea
            v-model="Remarks"
            class="form-control"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <button
          type="button"
          v-if="!isEditing"
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
        <button
          type="button"
          v-else
          style="
            padding: 0.5rem 0.8rem;
            background: #007bff;
            color: white;
            border-radius: 8px;
            margin: 2rem 0;
            margin-left: auto;
            display: block;
          "
          @click="EditChanges"
        >
          Edit
        </button>
      </div>
      <div style="padding: 1rem 2rem">
        <table>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Action</th>
          </tr>
          <tr v-for="testimonial in testimonials" :key="testimonial._id">
            <td style="width: 30%">
              <img
                :src="`${config.public.BaseUrl}/${testimonial.Image}`"
                alt=""
                width="100"
              />
            </td>
            <td>{{ testimonial.Name }}</td>
            <td>{{ testimonial.Designation }}</td>
            <td style="display: flex; gap: 1rem; height: 100%">
              <i class="fa fa-pencil" @click="EditDialog(testimonial._id)"></i>
              <i class="fa fa-trash" @click="RemoveItem(testimonial._id)"></i>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script setup>
import axios from "axios";
import Swal from "sweetalert2";

definePageMeta({
  layout: "dashboard",
});
</script>
<script>
export default {
  name: "DemoNewVideos",

  data() {
    return {
      Name: "",
      Designation: "",
      Remarks: "",
      id: "",
      Image: "",
      ImageFile: null,
      popup: false,
      isEditing: false,
      itemsPerPage: 5,
      testimonials: [],
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

      axios.get(`${this.config.public.BaseUrl}/Testimonials`).then((res) => {
        this.loader = false;
        this.testimonials = res.data.data;
      });
    }
  },

  methods: {
    SelectImage() {
      this.$refs.image.click();
    },
    UploadImage(e) {
      this.ImageFile = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      var _this = this;
      reader.addEventListener("load", (e) => {
        _this.Image = e.target.result;
      });
    },
    RemoveItem(id) {
      this.loader = true;
      axios
        .delete(`${this.config.public.BaseUrl}/Testimonials?id=${id}`)
        .then(async (res) => {
          this.loader = false;
          if (res.data.status) {
            axios
              .get(`${this.config.public.BaseUrl}/Testimonials`)
              .then((res) => {
                this.testimonials = res.data.data;
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
              title: res.data.message,
            });
          } else {
            const Toast = Swal.mixin({
              toast: true,
              position: "top-right",
              iconColor: "red",
              customClass: {
                popup: "colored-toast",
              },
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true,
            });
            await Toast.fire({
              icon: "error",
              title: res.data.message,
            });
          }
        });
    },
    EditDialog(id) {
      this.id = id;
      this.loader = true;
      axios
        .get(`${this.config.public.BaseUrl}/Testimonial?id=${id}`)
        .then((res) => {
          this.loader = false;
          this.Name = res.data.data.Name;
          this.Designation = res.data.data.Designation;
          this.Remarks = res.data.data.Remarks;
          this.Image = `${this.config.public.BaseUrl}/${res.data.data.Image}`;
          this.isEditing = true;
          this.popup = true;
          axios
            .get(`${this.config.public.BaseUrl}/Testimonials`)
            .then((res) => {
              this.testimonials = res.data.data;
            });
        });
    },
    async SaveChanges() {
      this.loader = true;
      if (this.Name === "") {
        Swal.fire({
          title: "Error!",
          text: "Please enter a name",
          icon: "error",
          confirmButtonText: "Close",
        });
        return;
      }
      if (this.Designation === "") {
        Swal.fire({
          title: "Error!",
          text: "Please enter a designation",
          icon: "error",
          confirmButtonText: "Close",
        });
        return;
      }
      if (this.Remarks === "") {
        Swal.fire({
          title: "Error!",
          text: "Please enter a remark",
          icon: "error",
          confirmButtonText: "Close",
        });
        return;
      }
      if (this.ImageFile === null) {
        Swal.fire({
          title: "Error!",
          text: "Image image is required",
          icon: "error",
          confirmButtonText: "Close",
        });
        return;
      }
      var form = new FormData();
      form.append("Name", this.Name);
      form.append("Designation", this.Designation);
      form.append("Remarks", this.Remarks);
      form.append("file", this.ImageFile);
      axios
        .post(`${this.config.public.BaseUrl}/Testimonials`, form)
        .then(async (res) => {
          this.loader = false;
          if (res.data.status) {
            axios
              .get(`${this.config.public.BaseUrl}/Testimonials`)
              .then((res) => {
                this.testimonials = res.data.data;
              });
            this.popup = false;
            this.Name = "";
            this.Designation = "";
            this.Remarks = "";
            this.ImageFile = null;
            this.$refs.image.files = null;
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
              title: res.data.message,
            });
          } else {
            const Toast = Swal.mixin({
              toast: true,
              position: "top-right",
              iconColor: "red",
              customClass: {
                popup: "colored-toast",
              },
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true,
            });
            await Toast.fire({
              icon: "error",
              title: res.data.message,
            });
          }
        });
    },
    async EditChanges() {
      this.loader = true;
      if (this.Name === "") {
        Swal.fire({
          title: "Error!",
          text: "Please enter a name",
          icon: "error",
          confirmButtonText: "Close",
        });
        return;
      }
      if (this.Designation === "") {
        Swal.fire({
          title: "Error!",
          text: "Please enter a designation",
          icon: "error",
          confirmButtonText: "Close",
        });
        return;
      }
      if (this.Remarks === "") {
        Swal.fire({
          title: "Error!",
          text: "Please enter a remark",
          icon: "error",
          confirmButtonText: "Close",
        });
        return;
      }

      var form = new FormData();
      form.append("id", this.id);
      form.append("Name", this.Name);
      form.append("Designation", this.Designation);
      form.append("Remarks", this.Remarks);
      form.append("file", this.ImageFile);
      axios
        .put(`${this.config.public.BaseUrl}/Testimonials`, form)
        .then(async (res) => {
          if (res.data.status) {
            axios
              .get(`${this.config.public.BaseUrl}/Testimonials`)
              .then((res) => {
                this.loader = false;
                this.testimonial = res.data.data;
              });
            this.popup = false;
            this.Name = "";
            this.Designation = "";
            this.Remarks = "";
            this.ImageFile = null;
            this.$refs.image.files = null;
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
              title: res.data.message,
            });
          } else {
            const Toast = Swal.mixin({
              toast: true,
              position: "top-right",
              iconColor: "red",
              customClass: {
                popup: "colored-toast",
              },
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true,
            });
            await Toast.fire({
              icon: "error",
              title: res.data.message,
            });
          }
        });
    },
    close() {
      this.popup = false;
    },
    open() {
      this.Name = "";
      this.Designation = "";
      this.Remarks = "";
      this.Image = "";
      this.isEditing = false;
      this.popup = true;
    },
  },
};
</script>

<style scoped>
.Add-Video {
  padding: 0.8rem 2rem;
  border: 1px solid;
  background: #007bff;
  color: white;
  border-radius: 8px;
  margin: 2rem 0;
  margin-left: auto;
  display: block;
}
.popups {
  position: absolute;
  top: 50%;
  left: 55%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 1rem 2rem;
  width: 70vw;
  max-height: 90vh;
  overflow: auto;
}
.overlay {
  position: fixed;
  background: black;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0.4;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  color: black;
}

td,
th {
  border: 1px solid #fff;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #fff;
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
