<template>
  <div>
    <div
      style="
        width: 80%;
        margin: 2rem auto;
        display: flex;
        flex-direction: column;
        gap: 3rem;
      "
    >
      <img
        :src="`https://crypto-backend-production.up.railway.app/${blog.data.Banner}`"
        alt=""
        style="width: 100%"
      />
      <h1>{{ blog.data.Title }}</h1>
      <p>{{ blog.data.Description }}</p>
    </div>
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const { data: blog } = await useFetch(
  `https://crypto-backend-production.up.railway.app/Blog?id=${id}`
);
</script>

<style lang="scss" scoped></style>
