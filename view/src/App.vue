<template>
  <v-app full-height>
    <router-view></router-view>
  </v-app>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";
const initPage = () => {};

onMounted(() => {
  initPage();
});
</script>

<style lang="scss">
</style>
