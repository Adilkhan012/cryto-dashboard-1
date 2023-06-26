// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@pinia/nuxt"],
  css: [
    "vuetify/lib/styles/main.sass",
    "swiper/css/pagination",
    "@/assets/css/all.css",
    "@/assets/plugins/summernote/summernote-bs4.min.css",
    "@/assets/plugins/daterangepicker/daterangepicker.css",
    "@/assets/plugins/overlayScrollbars/css/OverlayScrollbars.min.css",
    "@/assets/plugins/jqvmap/jqvmap.min.css",
    "@/assets/plugins/icheck-bootstrap/icheck-bootstrap.min.css",
    "@/assets/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css",
    "@/assets/plugins/fontawesome-free/css/all.min.css",
    "@/assets/admin/css/adminlte.min.css",
    "@/assets/css/bootstrap.min.css",
    "@/assets/css/default.css",
    "@/assets/css/fontawesome-all.min.css",
    "@/assets/css/magnific-popup.css",
    "@/assets/css/main.css",
    "@/assets/css/responsive.css",
    "@/assets/css/slick-menu.css",
    "@/assets/css/slick.css",
    "@/assets/css/style.css",
  ],
  build: {
    transpile: ["vuetify"],
  },
  plugins: [
    {
      src: "@/plugins/owlCarasol.js",
      mode: "client",
    },
  ],

  app: {
    head: {
      meta: [
        { charset: "utf-8" },
        { "http-equiv": "pragma", content: "no-cache" },
        { "http-equiv": "cache-control", content: "no-cache" },
        { "http-equiv": "expires", content: "0" },
        { content: "telephone=no", name: "format-detection" },
      ],
      script: [
        {
          type: "text/javascript",
          src: "/assets/js/vendor/jquery-1.12.4.min.js",
          body: true,
        },
        {
          type: "text/javascript",
          src: "/assets/js/vendor/modernizr-3.6.0.min.js",
          body: true,
        },
        { type: "text/javascript", src: "/assets/js/all.js", body: true },
        {
          type: "text/javascript",
          src: "/assets/js/atropos.min.js",
          body: true,
        },
        {
          type: "text/javascript",
          src: "/assets/js/bootstrap.min.js",
          body: true,
        },
        {
          type: "text/javascript",
          src: "/assets/js/jquery.counterup.min.js",
          body: true,
        },
        {
          type: "text/javascript",
          src: "/assets/js/jquery.magnific-popup.min.js",
          body: true,
        },
        {
          type: "text/javascript",
          src: "/assets/js/jquery.nav.js",
          body: true,
        },
        { type: "text/javascript", src: "/assets/js/main.js", body: true },
        {
          type: "text/javascript",
          src: "/assets/js/popper.min.js",
          body: true,
        },
        { type: "text/javascript", src: "/assets/js/script.js", body: true },
        {
          type: "text/javascript",
          src: "/assets/js/slick-menu.min.js",
          body: true,
        },
        { type: "text/javascript", src: "/assets/js/slick.min.js", body: true },

        { children: "console.log('Hello, world!');" },
      ],
    },
  },
  components: true,
  alias: {
    assets: "</rootDir>/assets",
  },
  runtimeConfig: {
    public: {
      BaseUrl: process.env.API_BASE_URL,
    },
  },
});
