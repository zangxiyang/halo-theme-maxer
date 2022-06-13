<template>
  <div
      class="maxer-blogger-say flex items-center justify-between border-gray-300 rounded-xl p-6 border mt-1 mb-1 hover:border-blue-500 transition duration-200">
    <div
        class="left-logo text-4xl font-bold cursor-default min-w-10 hover:cursor-pointer hover:text-maxer transition-colors duration-200">
      博主说
    </div>
    <div class="main-content flex-1 relative overflow-hidden">
        <!--<div class="swiper overflow-hidden">
          &lt;!&ndash; Additional required wrapper &ndash;&gt;
          <div class="swiper-wrapper"
               style="height: 30px; line-height: 30px; display: flex; flex-direction: column; width: 100%; position: relative">
            &lt;!&ndash; Slides &ndash;&gt;
            <div class="swiper-slide"
                 v-for="(item, index) in sayList" :key="index">{{ item.content }}
            </div>
          </div>
        </div>-->
      <swiper style="height: 30px; line-height: 30px; display: flex; flex-direction: column; width: 100%; position: relative"
              :autoplay="{delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true}"
              :speed="400" direction="vertical"
              :loop="true"
              :allow-touch-move="false"
      >
        <swiper-slide v-for="(item, index) in sayList" :key="index">
          <div class="hover:text-maxer hover:duration-300 text-2xl" id="blog-say-item">
            {{ item.content }}
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="right-arrow hover:text-maxer hover:cursor-pointer transition-colors duration-200">
      <a-icon-arrow-circle-right
          theme="filled" size="24" strokeLinejoin="bevel" strokeLinecap="butt"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {defineComponent, onMounted, ref, useHead, useNuxtApp} from "#imports";
//@ts-ignore
import {Swiper as Core,Autoplay} from "swiper";
//@ts-ignore
import {Swiper, SwiperSlide} from "swiper/vue";
// Import Swiper styles
import 'swiper/css';
import {Message} from "@arco-design/web-vue";


Core.use([Autoplay]);

onMounted(()=>{
  Message.success("挂载完成");
/*  const swiper = new Swiper('.swiper', {
    modules: [Autoplay],
    speed: 400,
    direction: 'vertical',
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    loop: true,
    allowTouchMove: false,

  })*/
})


defineComponent({
  name: 'BloggerSay'
})

const sayList = ref([
  {
    content: '从后端获取到的内容',
    route: 'ssssssss'
  },
  {
    content: '从后端获取到的内容1',
    route: 'ssssssss'
  },
  {
    content: '从后端获取到的内容2',
    route: 'ssssssss'
  },
  {
    content: '从后端获取到的内容3',
    route: 'ssssssss'
  }
]);


</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=ZCOOL+XiaoWei&display=swap');

.left-logo {
  font-family: 'ZCOOL XiaoWei', serif;
}

#blog-say-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  max-width: 100%;
  height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
}
</style>
