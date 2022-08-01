<template>
<div class="w-1140 mx-auto">
  <div class="blogger-say-container mt-5">
    <blogger-say/>
  </div>
  <main class="maxer-main-home pt-10">
    <maxer-sticky-card title="测试标题" @click="click"/>
  </main>







  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
</div>


</template>

<script lang="ts" setup>

import {Message, Notification} from "@arco-design/web-vue";
import {definePageMeta, onMounted, ref, useFetch, useHead, useRuntimeConfig} from "#imports";
import useUserStore from "~/store/module/user";
import {storeToRefs} from "pinia";
import useSettingStore from "~/store/module/setting";
import BloggerSay from "~/components/blogger-say/index.vue";
import MaxerStickyCard from "~/components/maxer-sticky-card/index.vue";
import {queryPostList} from "~/api/modules/post";

// 页面配置
definePageMeta({
  middleware: 'auth',
  layout: 'default-layout',
})

// store

const userStore = useUserStore();
const {userName, nickName} = storeToRefs(userStore);

const settingStore = useSettingStore();
const {blogTitle,indexNotice} = storeToRefs(settingStore);


const isShow = ref(false);

const click = () => {
  Message.success("成功");
  Notification.success("通知成功");
  isShow.value = true;
}


// 获取首页文章

const {data, error} = queryPostList();

if (!error.value){
  console.log(data.value.data.content)
}




</script>

<style scoped>

</style>
