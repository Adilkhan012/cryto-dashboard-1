<template>
  <div style="overflow: auto; height: 98.5vh">
    <div class="tabs">
      <div :class="tab == 'tab-1' && 'active-tab'" @click="ChangeTab('tab-1')">
        <label for="">Academic Sessions</label>
      </div>
      <div :class="tab == 'tab-2' && 'active-tab'" @click="ChangeTab('tab-2')">
        <label for="">Event, Media, PR services</label>
      </div>
      <div :class="tab == 'tab-3' && 'active-tab'" @click="ChangeTab('tab-3')">
        <label for="">Consulting Services</label>
      </div>
      <div :class="tab == 'tab-4' && 'active-tab'" @click="ChangeTab('tab-4')">
        <label for="">Development Services</label>
      </div>
      <div :class="tab == 'tab-5' && 'active-tab'" @click="ChangeTab('tab-5')">
        <label for="">Community Building & Marketing</label>
      </div>
      <div :class="tab == 'tab-6' && 'active-tab'" @click="ChangeTab('tab-6')">
        <label for="">Training Programs</label>
      </div>
    </div>
    <AdminFeaturedPrograms
      Type="Academic"
      v-if="tab == 'tab-1'"
    ></AdminFeaturedPrograms>
    <AdminFeaturedPrograms
      Type="Event"
      v-if="tab == 'tab-2'"
    ></AdminFeaturedPrograms>
    <AdminFeaturedPrograms
      Type="Consulting"
      v-if="tab == 'tab-3'"
    ></AdminFeaturedPrograms>
    <AdminFeaturedPrograms
      Type="Development"
      v-if="tab == 'tab-4'"
    ></AdminFeaturedPrograms>
    <AdminFeaturedPrograms
      Type="Community"
      v-if="tab == 'tab-5'"
    ></AdminFeaturedPrograms>
    <AdminFeaturedPrograms
      Type="Training"
      v-if="tab == 'tab-6'"
    ></AdminFeaturedPrograms>
  </div>
</template>

<script setup>
import axios from "axios";
definePageMeta({
  layout: "dashboard",
});
</script>
<script>
export default {
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
  justify-content: space-between;
  margin: 1rem;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 2rem;
    border: 1px solid black;
  }
}
.active-tab {
  background: blue;
  color: white;
}
</style>
