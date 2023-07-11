<template>
  <div>
    <div class="tabs">
      <div :class="tab == 'tab-1' && 'active-tab'" @click="ChangeTab('tab-1')">
        <label for="">All</label>
      </div>
      <div :class="tab == 'tab-2' && 'active-tab'" @click="ChangeTab('tab-2')">
        <label for="">English</label>
      </div>
      <div :class="tab == 'tab-3' && 'active-tab'" @click="ChangeTab('tab-3')">
        <label for="">Hindi</label>
      </div>
      <div :class="tab == 'tab-4' && 'active-tab'" @click="ChangeTab('tab-4')">
        <label for="">Malayalam</label>
      </div>
    </div>
    <div v-if="tab === 'tab-1'" style="width: 80%; margin: 2rem auto">
      <h3>English</h3>
      <div style="display: flex; flex-wrap: wrap; gap: 1rem; margin: 2rem 0">
        <div
          v-for="video in videos.data.filter((x) => x.Category === 'English')"
          :key="video._id"
          class="video-container"
        >
          <iframe
            :src="video.EmbedLink"
            frameborder="0"
            width="100%"
            height="300"
          ></iframe>
        </div>
      </div>
      <h3>Hindi</h3>
      <div style="display: flex; flex-wrap: wrap; gap: 1rem; margin: 2rem 0">
        <div
          v-for="video in videos.data.filter((x) => x.Category === 'Hindi')"
          :key="video._id"
          class="video-container"
        >
          <iframe
            :src="video.EmbedLink"
            frameborder="0"
            width="100%"
            height="300"
          ></iframe>
        </div>
      </div>
      <h3>Malayalam</h3>
      <div style="display: flex; flex-wrap: wrap; gap: 1rem; margin: 2rem 0">
        <div
          v-for="video in videos.data.filter((x) => x.Category === 'Malayalam')"
          :key="video._id"
          class="video-container"
        >
          <iframe
            :src="video.EmbedLink"
            frameborder="0"
            width="100%"
            height="300"
          ></iframe>
        </div>
      </div>
    </div>
    <div v-if="tab === 'tab-2'" style="width: 80%; margin: 2rem auto">
      <div style="display: flex; flex-wrap: wrap; gap: 1rem; margin: 2rem 0">
        <div
          v-for="video in videos.data.filter((x) => x.Category === 'English')"
          :key="video._id"
          class="video-container"
        >
          <iframe
            :src="video.EmbedLink"
            frameborder="0"
            width="100%"
            height="300"
          ></iframe>
        </div>
      </div>
    </div>
    <div v-if="tab === 'tab-3'" style="width: 80%; margin: 2rem auto">
      <div style="display: flex; flex-wrap: wrap; gap: 1rem; margin: 2rem 0">
        <div
          v-for="video in videos.data.filter((x) => x.Category === 'Hindi')"
          :key="video._id"
          class="video-container"
        >
          <iframe
            :src="video.EmbedLink"
            frameborder="0"
            width="100%"
            height="300"
          ></iframe>
        </div>
      </div>
    </div>
    <div v-if="tab === 'tab-4'" style="width: 80%; margin: 2rem auto">
      <div style="display: flex; flex-wrap: wrap; gap: 1rem; margin: 2rem 0">
        <div
          v-for="video in videos.data.filter((x) => x.Category === 'Malayalam')"
          :key="video._id"
          class="video-container"
        >
          <iframe
            :src="video.EmbedLink"
            frameborder="0"
            width="100%"
            height="300"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const { data: videos } = await useFetch(`${config.public.BaseUrl}/Videos`);
definePageMeta({
  layout: "pagesl",
});
</script>

<script>
export default {
  name: "DemoNewVideos",

  data() {
    return {
      tab: "tab-1",
    };
  },

  mounted() {},

  methods: {
    ChangeTab(tab) {
      this.tab = tab;
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.tabs {
  display: flex;
  flex-wrap: wrap;
  margin: 1rem auto;
  width: 50%;
  gap: 2rem;
  width: 80%;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 2rem;
    cursor: pointer;
    label {
      cursor: pointer;
    }
  }
}
.active-tab {
  border-bottom: 2px solid black;
}
.video-container {
  width: 30%;
}
@media (max-width: 591px) {
  .video-container {
    width: 100%;
  }
}
@media (min-width: 592px) and (max-width: 991px) {
  .video-container {
    width: 45%;
  }
}
@media (min-width: 992px) and (max-width: 1370px) {
  .video-container {
    width: 30%;
  }
}
</style>
