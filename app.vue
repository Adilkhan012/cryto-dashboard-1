<template>
  <div>
    <NewHeader />
    <banner />
    <AboutUs />
    <Service />
    <Portfolio />
    <TeamMember />
    <demolayout />
    <Pricing />
    <NewsBlog />
    <newfooter />
  </div>
</template>

<script setup>
useHead({
  title: "Daniyal",
  link: [
    {
      href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css",
      rel: "stylesheet",
      integrity: "sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx",
      crossorigin: "anonymous"
    },
    


  ],
  script: [
    {
      src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js",
      integrity: "sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa",
      crossorigin: "anonymous"
    },
    


  ]
})
</script>

<script>
/* options API
   export default {
      head() {
        return {
          title: "this is the title of the site",
            link: [
            {
              href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css",
              rel: "stylesheet",
              integrity: "sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx",
              crossorigin: "anonymous"
            }
          ],
            script: [
            {
              src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js",
              integrity: "sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa",
              crossorigin: "anonymous"
            }
          ]
        }
      }
    }
  */
</script>
