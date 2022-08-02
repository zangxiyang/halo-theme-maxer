<template>
<div class="w-1140 mx-auto">
  <div class="blogger-say-container mt-5">
    <blogger-say/>
  </div>
  <main class="maxer-main-home pt-10">
    <div class="maxer-sticky flex justify-start items-center">
      <maxer-sticky-card
          :img="item.thumbnail"
          :title="item.title"
          :id="item.id"
          v-for="item in stickyPosts" :key="item.id"/>
    </div>
    <!-- 中心布局 -->
    <div class="main-box pt-10 flex items-start">
      <div class="flex-grow mr-20">
        <maxer-article-card title="测试标题测试标题测试标题测试毕涛测试标题测试标题测试标题测试毕涛测试标题测试标题测试标题测试毕涛"/>
      </div>
      <div class="flex-none w-96 bg-pink-700">右侧</div>
    </div>
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
import {Posts, queryPostList} from "~/api/modules/post";
import MaxerArticleCard from "~/components/maxer-article-card/index.vue";

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

const {data, error} = await queryPostList();
const postList = ref<Posts[]>([]);
const stickyPosts = ref<Posts[]>([]);
if (!error.value){
  postList.value = data.value.data.content;
  // 获取置顶文章
  stickyPosts.value = postList.value.filter((item)=> item.topped).slice(0,5);
  console.log(data.value.data.content)
}




</script>

<style scoped>

</style>
