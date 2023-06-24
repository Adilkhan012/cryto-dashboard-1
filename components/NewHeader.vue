<template>
  <!--======  HEADER PART START ======-->
  <header>
    <div class="top-header-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-9">
            <div class="row">
              <!-- <div class="col-lg-3">
                <div class="top-header-content">
                  <span
                    ><i class="fas fa-phone"></i
                    >{{
                      HeaderPhone != "" ? HeaderPhone : "+012 (345) 67899"
                    }}</span
                  >
                </div>
              </div>
              <div class="col-lg-4">
                <div class="top-header-content">
                  <span
                    ><i class="fas fa-map-marker-alt"></i>>{{
                      HeaderLocation != ""
                        ? HeaderLocation
                        : "63 Plabon Road, USA"
                    }}</span
                  >
                </div>
              </div>
              <div class="col-lg-5">
                <div class="top-header-content">
                  <span
                    ><i class="far fa-clock"></i>>{{
                      HeaderTiming != ""
                        ? HeaderTiming
                        : "Sun - Friday : 10 am - 08pm"
                    }}</span
                  >
                </div>
              </div> -->
            </div>
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
              <a href="index.html">
                <img v-if="Logo == ''" src="@/assets/images/logo.png" alt="" />
                <img v-else :src="Logo" alt="" />
              </a>
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
                  <li><NuxtLink :to="`/#Team`">team</NuxtLink></li>
                  <li>
                    <NuxtLink :to="`/#Blog`">Blog</NuxtLink>
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
    };
  },
  mounted() {
    axios.get("https://crypto-backend-seven.vercel.app/Images").then((res) => {
      if (res.data != null) {
        if (res.data.Logo != undefined) {
          this.Logo = `https://crypto-backend-seven.vercel.app/${res.data.Logo}`;
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
