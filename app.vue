<template>
  <div>
    <NewHeader />
    <banner />
    <AboutUs />
    <Service />
    <!-- <Testimonials /> -->
    <Portfolio />
    <TeamMember />
    <demolayout />
    <!-- <Pricing /> -->
    <NewsBlog />
    <NewFooter />
  </div>
</template>

<script setup>
useHead({
  title: "Crypto",
  script: [
    {
      src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
      type: "text/javascript",
    },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
      type: "text/javascript",
    },
    {
      src: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js",
      type: "text/javascript",
    },
  ],
});
</script>
