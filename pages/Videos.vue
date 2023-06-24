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
      <div style="margin: 2rem 0">
        <div
          v-for="video in videos.data.filter((x) => x.Category === 'English')"
          :key="video._id"
          style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem"
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
      <div style="margin: 2rem 0">
        <div
          v-for="video in videos.data.filter((x) => x.Category === 'Hindi')"
          :key="video._id"
          style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem"
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
      <div style="margin: 2rem 0">
        <div
          v-for="video in videos.data.filter((x) => x.Category === 'Malayalam')"
          :key="video._id"
          style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem"
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
      <div style="margin: 2rem 0">
        <div
          v-for="video in videos.data.filter((x) => x.Category === 'English')"
          :key="video._id"
          style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem"
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
      <div style="margin: 2rem 0">
        <div
          v-for="video in videos.data.filter((x) => x.Category === 'Hindi')"
          :key="video._id"
          style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem"
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
      <div style="margin: 2rem 0">
        <div
          v-for="video in videos.data.filter((x) => x.Category === 'Malayalam')"
          :key="video._id"
          style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem"
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
const { data: videos } = await useFetch(
  `https://crypto-backend-production.up.railway.app/Videos`
);
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
</style>
