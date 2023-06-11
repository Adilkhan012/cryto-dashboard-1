<template>
  <div>Admin Panel</div>
</template>

<script setup>
definePageMeta({
  middleware: function (to, from) {
    // const user = useSupabaseUser();

    if (true) {
      return navigateTo("/Admin/login");
    }
  },
});
</script>

<style lang="scss" scoped></style>
