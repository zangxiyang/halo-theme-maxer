<template>
  <NuxtLayout>
    <nuxt-page/>
  </NuxtLayout>

</template>

<script lang="ts" setup>
import {querySettings} from "~/api/modules/settings";
import {onMounted} from "#imports";
import {Message} from "@arco-design/web-vue";
import useSettingStore from "~/store/module/setting";

const {data,error} = await querySettings();
const settingStore = useSettingStore();
if (!error.value){
  settingStore.setSetting(data.value.data);
}

onMounted(()=>{
  if (error.value){
    Message.error("Halo主题配置获取失败");
  }
})

</script>
