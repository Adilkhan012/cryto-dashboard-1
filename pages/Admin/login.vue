<template>
  <div class="LoginContainer">
    <h2>Login</h2>
    <div>
      <div class="form-controls">
        <label for="">Username</label>
        <input type="text" placeholder="Enter Username" v-model="Username" />
        <span style="color: red; margin-top: 5px">{{ UserError }}</span>
      </div>
      <div class="form-controls">
        <label for="">Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          v-model="Password"
        />
        <span style="color: red; margin-top: 5px">{{ PassError }}</span>
      </div>
      <div>
        <button @click="Login" type="button" class="Loginbtn">Login</button>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "",
});
</script>
<script>
import axios from "axios";
export default {
  name: "DemoNewLogin",

  data() {
    return {
      Username: "",
      Password: "",
      UserError: "",
      PassError: "",
      config: null,
    };
  },

  mounted() {
    this.config = useRuntimeConfig();
    if (localStorage.getItem("UserSession") != null) {
      navigateTo("/Admin");
    }
  },

  methods: {
    Login() {
      var error = 0;
      this.UserError = "";
      this.PassError = "";
      if (this.Username == "" || this.Username == null) {
        this.UserError = "Please enter username";
        error++;
      }
      if (this.Password == "" || this.Password == null) {
        this.PassError = "Please enter password";
        error++;
      }

      if (error > 0) {
        return 0;
      }
      var obj = {
        Username: this.Username,
        Password: this.Password,
      };
      axios.post(`${this.config.public.BaseUrl}/login`, obj).then((res) => {
        if (!res.data.status) {
          if (res.data.data == "Username") {
            this.UserError = res.data.message;
          } else {
            this.PassError = res.data.message;
          }
        } else {
          localStorage.setItem("UserSession", JSON.stringify(res.data.data));
          navigateTo("/Admin");
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.LoginContainer {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem 2rem;
  text-align: center;
  box-shadow: 0px 0px 35px -17px black;
  border-radius: 10px;
  width: 40vw;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.form-controls {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: auto;
  margin-bottom: 2rem;
  width: 70%;
  label {
    font-weight: bold;
  }
  input {
    border-bottom: 1px solid black;
    padding: 0.5rem 1rem;

    width: 100%;
  }
}
.Loginbtn {
  // box-shadow: 0px 0px 35px -17px black;
  padding: 0.7rem 2rem;
  background: black;
  color: white;
  border-radius: 10px;
}
</style>
