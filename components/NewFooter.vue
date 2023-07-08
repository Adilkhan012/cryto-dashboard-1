<template>
  <div>
    <!--======  CONTACT-WITH-FOOTER PART START ======-->
    <section class="contact-with-footer-area contact-bg pt-100" id="Contact">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3 text-center pb-80">
            <div class="section-title contact-title">
              <span><img src="@/assets/images/contact-text.png" alt="" /></span>
              <p class="section-para"><span></span>Message Us</p>
              <h1>Don't Hesitate To Contact With Us</h1>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="contact-form-area">
              <div>
                <div class="row">
                  <div class="col-md-4 col-sm-12">
                    <div class="single-contact-field" style="width: 109%">
                      <input
                        type="text"
                        placeholder="Your Name"
                        v-model="name"
                      />
                      <span class="far fa-user"></span>
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-12">
                    <div class="single-contact-field" style="width: 109%">
                      <input
                        type="email"
                        placeholder="Your email"
                        v-model="email"
                      />
                      <span class="fas fa-envelope-open-text"></span>
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-12">
                    <div class="single-contact-field" style="width: 109%">
                      <input
                        type="text"
                        placeholder="Your phone"
                        v-model="phone"
                      />
                      <span class="fas fa-phone"></span>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-12">
                    <div class="single-contact-field textarea">
                      <textarea
                        name="#"
                        id="#"
                        cols="30"
                        rows="10"
                        placeholder="Your Message"
                        v-model="message"
                      ></textarea>
                      <span class="fas fa-pencil-alt"></span>
                      <button @click="sendMessage" class="btn contact-btn">
                        send message <i class="fa fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row"></div>
      </div>
      <div class="footer-bottom-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-6"></div>
            <div class="col-lg-6">
              <ul class="footer-links">
                <li v-if="FacebookLink != '' && FacebookLink != undefined">
                  <a :href="FacebookLink"><i class="fab fa-facebook-f"></i></a>
                </li>
                <li v-if="TwitterLink != '' && TwitterLink != undefined">
                  <a :href="TwitterLink"><i class="fab fa-twitter"></i></a>
                </li>
                <li v-if="InstagramLink != '' && InstagramLink != undefined">
                  <a :href="InstagramLink"><i class="fab fa-instagram"></i></a>
                </li>
                <li v-if="WhatsappLink != '' && WhatsappLink != undefined">
                  <a :href="WhatsappLink"><i class="fab fa-whatsapp"></i></a>
                </li>
                <li v-if="TelegramLink != '' && TelegramLink != undefined">
                  <a :href="TelegramLink"><i class="fab fa-telegram"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--======  CONTACT-WITH-FOOTER PART END ======-->
  </div>
</template>

<script>
import Swal from "sweetalert2";
import axios from "axios";
export default {
  data() {
    return {
      FacebookLink: "",
      TwitterLink: "",
      InstagramLink: "",
      WhatsappLink: "",
      TelegramLink: "",
      name: "",
      email: "",
      phone: "",
      message: "",
      config: null,
    };
  },
  mounted() {
    this.config = useRuntimeConfig();
    axios.get(`${this.config.public.BaseUrl}/Images`).then((res) => {
      if (res.data != null) {
        if (res.data.Logo != undefined) {
          this.Logo = `${this.config.public.BaseUrl}/${res.data.Logo}`;
        }
        this.FacebookLink = res.data.FacebookLink;
        this.TwitterLink = res.data.TwitterLink;
        this.InstagramLink = res.data.InstagramLink;
        this.WhatsappLink = res.data.WhatsappLink;
        this.TelegramLink = res.data.TelegramLink;
      }
    });
  },
  methods: {
    async sendMessage() {
      if (this.name === "") {
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
          title: "Please enter a name",
        });
        return;
      }
      if (this.email === "") {
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
          title: "Please enter an email",
        });
        return;
      }
      if (this.phone === "") {
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
          title: "Please enter a phone number",
        });
        return;
      }

      if (this.message === "") {
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
          title: "Please enter a message",
        });
        return;
      }
      var obj = {
        Name: this.name,
        Email: this.email,
        Phone: this.phone,
        Message: this.message,
      };
      axios
        .post(`${this.config.public.BaseUrl}/Contacts`, obj)
        .then(async (res) => {
          if (res.data.status) {
            this.name = "";
            this.email = "";
            this.phone = "";
            this.message = "";
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
  },
};
</script>

<style lang="scss" scoped>
.single-contact-field {
  width: 103%;
  @media screen and (max-width: 767px) {
    width: 109%;
  }
}
</style>
