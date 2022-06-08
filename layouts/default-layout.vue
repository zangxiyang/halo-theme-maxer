<template>
  <div class="maxer-layout">
    <!-- header -->
    <Head>
      <Link rel="preconnect" href="https://fonts.googleapis.com"/>
      <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <Link rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Audiowide&family=ZCOOL+QingKe+HuangYou&display=swap"/>
    </Head>
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
