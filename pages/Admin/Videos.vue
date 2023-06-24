<template>
  <div>
    <div class="overlay" @click="close" v-if="popup"></div>
    <div>
      <button class="Add-Video" @click="open">Add Video</button>
      <div class="px-5 popups" v-if="popup">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label"
            >Category</label
          >
          <select name="" id="" class="form-control" v-model="Category">
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Malayalam">Malayalam</option>
          </select>
        </div>

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label"
            >Video Embed Link</label
          >
          <input type="text" class="form-control" v-model="EmbedLink" />
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
            <th>Link</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
          <tr v-for="video in videos" :key="video._id">
            <td>{{ video.EmbedLink }}</td>
            <td>{{ video.Category }}</td>
            <td style="display: flex; gap: 1rem">
              <i class="fa fa-pencil" @click="EditDialog(video._id)"></i>
              <i class="fa fa-trash" @click="RemoveItem(video._id)"></i>
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
      EmbedLink: "",
      Category: "English",
      id: "",
      popup: false,
      isEditing: false,
      itemsPerPage: 5,
      videos: [],
    };
  },

  mounted() {
    axios
      .get(`https://crypto-backend-production.up.railway.app/Videos`)
      .then((res) => {
        this.videos = res.data.data;
      });
  },

  methods: {
    RemoveItem(id) {
      console.log(id);
      axios
        .delete(
          `https://crypto-backend-production.up.railway.app/Videos?id=${id}`
        )
        .then(async (res) => {
          if (res.data.status) {
            axios
              .get(`https://crypto-backend-production.up.railway.app/Videos`)
              .then((res) => {
                this.videos = res.data.data;
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
      axios
        .get(`https://crypto-backend-production.up.railway.app/Video?id=${id}`)
        .then((res) => {
          this.EmbedLink = res.data.data.EmbedLink;
          this.Category = res.data.data.Category;
          this.isEditing = true;
          this.popup = true;
        });
    },
    async SaveChanges() {
      if (this.EmbedLink === "") {
        Swal.fire({
          title: "Error!",
          text: "Please enter a link",
          icon: "error",
          confirmButtonText: "Close",
        });
      }
      var obj = {
        EmbedLink: this.EmbedLink,
        Category: this.Category,
      };
      axios
        .post(`https://crypto-backend-production.up.railway.app/Videos`, obj)
        .then(async (res) => {
          if (res.data.status) {
            axios
              .get(`https://crypto-backend-production.up.railway.app/Videos`)
              .then((res) => {
                this.videos = res.data.data;
              });
            this.popup = false;
            this.EmbedLink = "";
            this.Category = "English";
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
      if (this.EmbedLink === "") {
        Swal.fire({
          title: "Error!",
          text: "Please enter a link",
          icon: "error",
          confirmButtonText: "Close",
        });
      }
      var obj = {
        id: this.id,
        EmbedLink: this.EmbedLink,
        Category: this.Category,
      };
      axios
        .put(`https://crypto-backend-production.up.railway.app/Videos`, obj)
        .then(async (res) => {
          if (res.data.status) {
            axios
              .get(`https://crypto-backend-production.up.railway.app/Videos`)
              .then((res) => {
                this.videos = res.data.data;
              });
            this.popup = false;
            this.EmbedLink = "";
            this.Category = "English";
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
      this.EmbedLink = "";
      this.Category = "English";
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
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 1rem 2rem;
  width: 50vw;
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
</style>
