<template>
  <!--======  HEADER PART START ======-->
  <header>
    <div class="top-header-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-9">
            <div class="row"></div>
          </div>
          <div class="col-lg-3 text-right">
            <div class="top-header-social-links" style="border: none">
              <ul>
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
    </div>
    <div class="bottom-header-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-2">
            <div class="logo">
              <NuxtLink to="/">
                <img v-if="Logo == ''" src="@/assets/logo.png" alt="" />
                <img v-else :src="Logo" alt="" />
              </NuxtLink>
            </div>
          </div>
          <div class="col-lg-10 text-right">
            <div class="mobile-menu-wrap"></div>
            <div class="header-search">
              <span class="search-btn"><i class="fa fa-search"></i></span>
            </div>
            <div class="main-menu">
              <nav>
                <ul id="mobile-menu">
                  <li class="current">
                    <NuxtLink :to="`/#Home`">Home</NuxtLink>
                  </li>
                  <li><NuxtLink :to="`/#About`">About</NuxtLink></li>
                  <li><NuxtLink :to="`/#Services`">Services</NuxtLink></li>
                  <li><NuxtLink :to="`/#Team`">Team</NuxtLink></li>
                  <li><NuxtLink :to="`/#Videos`">Videos</NuxtLink></li>
                  <li>
                    <NuxtLink :to="`/#Blog`">Blog</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink :to="`/#Testimonials`">Testimonials</NuxtLink>
                  </li>
                  <li><NuxtLink :to="`/#Contact`">Contact</NuxtLink></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!--======  HEADER PART END ======-->
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      FacebookLink: "",
      TwitterLink: "",
      InstagramLink: "",
      WhatsappLink: "",
      TelegramLink: "",
      Logo: "",
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
};
</script>
