<template>
  <div class="index">
    HI测试
  </div>
</template>

<script lang="ts" setup>

// 页面配置
import {definePageMeta} from "#imports";

definePageMeta({
  middleware: ['auth'],
  layout: 'default-layout'
})
</script>

<style scoped>

</style>
