<template>
  <a-button @click="click">显示Message</a-button>
  <div class="btn btn-primary">daisyUI Button</div>

  <div class="alert shadow-lg" v-show="isShow">
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      <div>
        <h3 class="font-bold">New message!</h3>
        <div class="text-xs">You have 1 unread message</div>
      </div>
    </div>
    <div class="flex-none">
      <button class="btn btn-sm">See</button>
    </div>
  </div>
</template>

<script lang="ts" setup>

import {Message,Notification} from "@arco-design/web-vue";
import {onMounted, ref} from "#imports";

const isShow = ref(false);

const click = ()=>{
  Message.success("成功");
  Notification.success("通知成功");
  isShow.value = true;
}

onMounted(()=>{
  Message.success("挂载成功");
})


</script>

<style scoped>

</style>
