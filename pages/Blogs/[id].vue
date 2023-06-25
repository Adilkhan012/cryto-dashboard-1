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
        :src="`${config.public.BaseUrl}/${blog.data.Banner}`"
        alt=""
        style="width: 100%"
      />
      <h1>{{ blog.data.Title }}</h1>
      <p>{{ blog.data.Description }}</p>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const { id } = useRoute().params;
const { data: blog } = await useFetch(`${config.public.BaseUrl}/Blog?id=${id}`);
</script>

<style lang="scss" scoped></style>
