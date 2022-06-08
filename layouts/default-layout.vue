<template>
  <div class="maxer-layout">
    <!-- header -->
    <maxer-header/>
    <main class="main-container mt-24">
      <slot/>
    </main>
    <!-- footer -->
    <!-- TODO -->
  </div>
</template>

<script lang="ts" setup>

import MaxerHeader from "~/components/maxer-header/index.vue";
</script>

<style scoped>

</style>
