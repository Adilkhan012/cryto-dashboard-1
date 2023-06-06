// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "@/assets/css/all.css",
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
          src: "~/assets/js/vendor/jquery-1.12.4.min.js",
        },
        {
          type: "text/javascript",
          src: "~/assets/js/vendor/modernizr-3.6.0.min.js",
        },
        { type: "text/javascript", src: "~/assets/js/all.js" },
        { type: "text/javascript", src: "~/assets/js/atropos.min.js" },
        { type: "text/javascript", src: "~/assets/js/bootstrap.min.js" },
        { type: "text/javascript", src: "~/assets/js/jquery.counterup.min.js" },
        {
          type: "text/javascript",
          src: "~/assets/js/jquery.magnific-popup.min.js",
        },
        { type: "text/javascript", src: "~/assets/js/jquery.nav.js" },
        { type: "text/javascript", src: "~/assets/js/main.js" },
        { type: "text/javascript", src: "~/assets/js/popper.min.js" },
        { type: "text/javascript", src: "~/assets/js/script.js" },
        { type: "text/javascript", src: "~/assets/js/slick-menu.min.js" },
        { type: "text/javascript", src: "~/assets/js/slick.min.js" },

        { children: "console.log('Hello, world!');" },
      ],
    },
  },
  components: true,
  alias: {
    assets: "</rootDir>/assets",
  },
});
2;
