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
    <main class="main-container pt-24">
      <slot/>
    </main>


    <!--FOOTER-->
  </div>
</template>

<script lang="ts" setup>

import MaxerHeader from "~/components/maxer-header/index.vue";
import useSettingStore from "~/store/module/setting";
import {storeToRefs} from "pinia";
import {baseApi} from "~/api";
import {useHead} from "#imports";

const settingStore = useSettingStore();
const {blogTitle, favIcon, description, keywords} = storeToRefs(settingStore);

if (favIcon.value.indexOf("http") < 0){
  favIcon.value = `${baseApi}${favIcon.value}`;
}

useHead({
  title: blogTitle.value,
  link: [
    {rel: 'shortcut icon', href: favIcon.value}
  ],
  meta: [
    {name: 'description', content: description.value},
    {name: 'keywords', content: keywords.value}
  ]
})

</script>

<style lang="scss" scoped>

</style>
