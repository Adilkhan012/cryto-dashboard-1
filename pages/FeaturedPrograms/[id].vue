<template>
  <div>
    <div style="padding: 1rem 2rem; width: 80%; margin: auto">
      <h2 style="font-weight: bold">{{ program.Title1 }}</h2>
      <div
        style="
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin: 1rem 0;
        "
      >
        <img
          :src="`https://crypto-backend-production.up.railway.app/${program.Image11}`"
          alt=""
          style="width: 80%; border: 1px"
        />
        <img
          :src="`https://crypto-backend-production.up.railway.app/${program.Image12}`"
          alt=""
          style="width: 80%"
        />
      </div>
      <p>{{ program.Description1 }}</p>
      <h2 style="font-weight: bold">{{ program.Title2 }}</h2>
      <div
        style="
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin: 1rem 0;
        "
      >
        <img
          :src="`https://crypto-backend-production.up.railway.app/${program.Image21}`"
          alt=""
          style="width: 80%; border: 1px"
        />
        <img
          :src="`https://crypto-backend-production.up.railway.app/${program.Image22}`"
          alt=""
          style="width: 80%"
        />
      </div>
      <p>{{ program.Description2 }}</p>
      <h2 style="font-weight: bold">{{ program.Title3 }}</h2>
      <div
        style="
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin: 1rem 0;
        "
      >
        <img
          :src="`https://crypto-backend-production.up.railway.app/${program.Image31}`"
          alt=""
          style="width: 80%; border: 1px"
        />
        <img
          :src="`https://crypto-backend-production.up.railway.app/${program.Image32}`"
          alt=""
          style="width: 80%"
        />
      </div>
      <p>{{ program.Description3 }}</p>
    </div>
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const { data: program } = await useFetch(
  `https://crypto-backend-production.up.railway.app/FeaturedProgram?type=${id}`
);
</script>

<style lang="scss" scoped></style>
