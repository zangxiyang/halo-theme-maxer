<template>




  <a-button @click="click" type="primary" >显示Message</a-button>
  <br><br>
  用户名: {{userName}}
  <br>
  昵称：{{nickName}}
  <br><br>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>


</template>

<script lang="ts" setup>

import {Message, Notification} from "@arco-design/web-vue";
import {definePageMeta, onMounted, ref} from "#imports";
import useUserStore from "~/store/module/user";
import {storeToRefs} from "pinia";


// 页面配置
definePageMeta({
  middleware: 'auth',
  layout: 'default-layout'
})

// store

const userStore = useUserStore();
const {userName, nickName} = storeToRefs(userStore);


const isShow = ref(false);

const click = () => {
  Message.success("成功");
  Notification.success("通知成功");
  isShow.value = true;
}

onMounted(() => {
  Message.success("挂载成功");
})


</script>

<style scoped>

</style>
