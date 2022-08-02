<template>
  <nuxt-link :to="`/article/${id}`" class="maxer-article-card relative w-full h-96
border border-gray-150 bg-white rounded-xl flex hover:border-maxer transition overflow-hidden">
    <div class="article-thumb w-2/5 h-full bg-white relative flex-shrink-0">
      <div class="maxer-card-mark absolute top-4 left-4 p-3 bg-black bg-opacity-20
    font-bold text-xs tracking-wide text-gray-700 text-white
    backdrop-blur flex items-center justify-center rounded-lg">
        测试分类
      </div>
      <img :src="baseUrl + img" alt="article thumb" v-if="img && baseUrl"
           class="w-full object-fill bg-white transition">
      <div class="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400" v-else>图片飞走啦</div>
    </div>
    <div class="article-card-right-container pt-20 pb-20 pl-14 pr-14">
      <div class="card-container">
        <p class="card-title">
          <!--标题-->
          {{ title }}
        </p>
      </div>
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
import {defineComponent, defineProps} from "vue";

const props = defineProps({
  img: String,
  cate: String,
  id: Number,
  title: String
});

const baseUrl = import.meta.env.VITE_HALO_BASE_API;


defineComponent({
  name: 'MaxerArticleCard'
});


</script>

<style lang="scss" scoped>

</style>
