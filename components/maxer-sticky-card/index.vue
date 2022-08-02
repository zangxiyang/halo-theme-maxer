<template>
<nuxt-link :to="route" class="maxer-sticky-card relative rounded-2xl overflow-hidden mr-10 w-80 h-68 bg-white border-gray-150 inline-block border
 cursor-pointer hover:scale-105 hover:border-maxer hover:text-maxer">
  <header class="h-40 w-full flex justify-center">

    <template v-if="img">
      <img
          class="w-full object-fill bg-white transition"
          :src="baseUrl + img"
          alt="article thumb"/>
    </template>
    <template v-else>
      <div class="w-full bg-gray-200 transition h-40 flex justify-center items-center select-none text-gray-400">
        暂无图片
      </div>
    </template>
  </header>
  <div class="card-info transition p-4" :title="title">
    <span class="card-title">
      {{ title }}
    </span>
  </div>
  <div class="absolute top-0 left-0 flex justify-center rounded-br-2xl text-white bg-blue-600 text-xs p-2.5" title="置顶文章">
    顶
  </div>
</nuxt-link>
</template>

<script setup lang="ts">
import {defineComponent, defineProps} from "vue";


const props = defineProps({
  title: String,
  img: String,
  id: Number
});

defineComponent({
  name: 'MaxerStickyCard'
});

const route = `/article/${props.id}`

const baseUrl = import.meta.env.VITE_HALO_BASE_API;

const emits = defineEmits(['click']);

const onClick = ()=>{
  console.log("maxer-card 点击事件");
  emits('click');
}


</script>

<style lang="scss" scoped>

.maxer-sticky-card{
  transition: .3s transform, .3s border;
}
.card-info{
  .card-title{
    -webkit-line-clamp: 2;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    line-height: 1.5;
    justify-content: center;
    align-items: flex-end;
    align-content: center;
    font-weight: 700;
    font-size: 1.7rem;
    padding: 0;
  }
}
</style>
