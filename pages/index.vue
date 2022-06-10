<template>
<div class="w-1140 mx-auto">
  <div class="blogger-say-container mt-5">
    <blogger-say/>
  </div>
  <a-button @click="click" type="primary" >显示Message</a-button>
  <br><br>
  用户名: {{userName}}
  <br>
  昵称：{{nickName}}
  <br>
  博客名：{{ blogTitle }}
  <br>
  首页公告：{{ indexNotice }}
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
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




</script>

<style scoped>

</style>
