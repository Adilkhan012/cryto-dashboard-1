<template>
  <div>
    <div style="padding: 1rem 2rem; width: 80%; margin: auto">
      <h2 style="font-weight: bold">{{ program.Title1 }}</h2>
      <div class="imgs">
        <img
          :src="`${config.public.BaseUrl}/${program.Image11}`"
          alt=""
          style="width: 100%; border: 1px"
          onerror="this.style.display='none'"
        />
        <img
          :src="`${config.public.BaseUrl}/${program.Image12}`"
          alt=""
          style="width: 100%"
          onerror="this.style.display='none'"
        />
      </div>
      <p>{{ program.Description1 }}</p>
      <h2 style="font-weight: bold">{{ program.Title2 }}</h2>
      <div class="imgs">
        <img
          :src="`${config.public.BaseUrl}/${program.Image21}`"
          alt=""
          style="width: 100%; border: 1px"
          onerror="this.style.display='none'"
        />
        <img
          :src="`${config.public.BaseUrl}/${program.Image22}`"
          alt=""
          style="width: 100%"
          onerror="this.style.display='none'"
        />
      </div>
      <p>{{ program.Description2 }}</p>
      <h2 style="font-weight: bold">{{ program.Title3 }}</h2>
      <div class="imgs">
        <img
          :src="`${config.public.BaseUrl}/${program.Image31}`"
          alt=""
          style="width: 100%; border: 1px"
          onerror="this.style.display='none'"
        />
        <img
          :src="`${config.public.BaseUrl}/${program.Image32}`"
          alt=""
          style="width: 100%"
          onerror="this.style.display='none'"
        />
      </div>
      <p>{{ program.Description3 }}</p>
      <h2 style="font-weight: bold">{{ program.Title4 }}</h2>
      <div class="imgs">
        <img
          :src="`${config.public.BaseUrl}/${program.Image41}`"
          alt=""
          style="width: 100%; border: 1px"
          onerror="this.style.display='none'"
        />
        <img
          :src="`${config.public.BaseUrl}/${program.Image42}`"
          alt=""
          style="width: 100%"
          onerror="this.style.display='none'"
        />
      </div>
      <p>{{ program.Description4 }}</p>
      <h2 style="font-weight: bold">{{ program.Title5 }}</h2>
      <div class="imgs">
        <img
          :src="`${config.public.BaseUrl}/${program.Image51}`"
          alt=""
          style="width: 100%; border: 1px"
          onerror="this.style.display='none'"
        />
        <img
          :src="`${config.public.BaseUrl}/${program.Image52}`"
          alt=""
          style="width: 100%"
          onerror="this.style.display='none'"
        />
      </div>
      <p>{{ program.Description5 }}</p>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const { id } = useRoute().params;
const { data: program } = await useFetch(
  `${config.public.BaseUrl}/FeaturedProgram?type=${id}`
);
definePageMeta({
  layout: "pagesl",
});
</script>

<style lang="scss" scoped>
.imgs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin: 1rem 0;
}
@media (max-width: 1120px) {
  .imgs {
    grid-template-columns: 1fr;
  }
}
</style>
