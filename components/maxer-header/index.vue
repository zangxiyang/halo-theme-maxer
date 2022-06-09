<template>
  <header class="maxer-header w-full ">
    <nav class="navbar fixed top-0 left-0 right-0 border-b border-b-gray-200 bg-white z-50">
      <div class="navbar-container relative flex w-full h-24 min-h-24 max-h-24 box-border z-50">
        <div class="maxer-nav-left h-24 flex items-center">
          <div class="more-apps pl-7 pr-7 relative">
            <a-button type="text" style="color: #676767" size="small" @click="moreAppClick">
              <template #icon>
                <icon-apps :style="{fontSize: '24px'}"/>
              </template>
            </a-button>
          </div>
          <div class="logo ml-7 select-none" title="极束科技">
            <nuxt-link to="/" class="flex items-center" @click="logoClick">
              <img src="@/assets/img/logo.png" alt="LOGO" style="height: 30px; width: auto">
              <span class="logo-text text-4xl ml-2">Maxer Theme</span>
            </nuxt-link>
          </div>

        </div>
        <div class="maxer-nav-right h-24 relative flex flex-1 items-center justify-end pr-7">
          <div class="relative">
            <div class="nav-highlight z-1 bg-menu"
                 :style="{width: `${navHighlightWidth}px`, opacity: navHighlightFlag? '1':'0',
                 transitionDuration: navHighlightFlag? '.25s': '0', transform: navHighlightFlag? `translateX(${navHighlightX}px)`: 'none'}"
                 style="height: 32px"></div>
            <ul ref="navBarUlRef" class="flex items-center">
              <nuxt-link class="ml-6 first:ml-0 h-3.2 flex items-center z-50"
                         v-for="(item,index) in navBarConfig"
                         @mouseenter="navBarClickOrHover"
                         @mouseleave="navBarLeave"
                         @click="navBarClick(index,item)"
                         :key="index" :to="item.url">
                <a-button class="h-full z-50"
                          size="small" type="text" style="color: #676767; height: 32px">
                  {{ item.name }}
                </a-button>
              </nuxt-link>
            </ul>
          </div>
        </div>

      </div>
      <div ref="dropDownRef"
           class="drop-down-container z-1"
           v-if="show">
        <div class="wrapper h-96 bg-white w-full">
          测试
        </div>
      </div>
    </nav>
    <div class="mask" ref="maskRef" v-if="show" @click="navBarDropDownClose"></div>
  </header>
</template>

<script lang="ts" setup>

import {defineComponent, navigateTo, nextTick, onMounted, ref, useHead, useRoute} from "#imports";
import {animateCss} from "~/utils/animate";
import __ from "lodash";
import {Menu, queryMenusList} from "~/api/modules/menu";


defineComponent({
  name: 'MaxerHeader'
})

const show = ref(false);

const dropDownRef = ref<HTMLElement>();
const maskRef = ref<HTMLElement>();
const navBarUlRef = ref<HTMLElement>();

/**
 * 菜单
 */
const navBarConfig = ref<Menu[]>([]);

const {data} = await queryMenusList();
navBarConfig.value = data.value.data;
// 进行排序 id小的排在开头
navBarConfig.value = __.sortBy(navBarConfig.value, (o) => o.id);


// 右侧 NavBar 效果
const navHighlightWidth = ref(0);
const navHighlightFlag = ref(false);
const navHighlightX = ref(0);
const activeIndex = ref(0);

const navBarClickOrHover = (event) => {
  const targetElement = event.target as HTMLElement
  navHighlightWidth.value = targetElement.clientWidth;
  navHighlightX.value = targetElement.offsetLeft;
}
const navBarLeave = () => {
  initNavBar();
}

const navBarClick = (index,item) => {
  activeIndex.value = index;
  initNavBar();
  navigateTo(item.url);
}


// router
const route = useRoute();
activeIndex.value = __.findIndex(navBarConfig.value, (o) => o.url === route.path);


// LOGO被点击
const logoClick = ()=>{
  // 计算当前的首页的index
  activeIndex.value = __.findIndex(navBarConfig.value, (o) => o.url === '/');
  // 重新进行初始化navbarHighlight
  initNavBar();
  navigateTo("/");
}


const initNavBar = () => {
  navHighlightFlag.value = true;
  const targetElement = navBarUlRef.value?.children[activeIndex.value] as HTMLElement;
  navHighlightWidth.value = targetElement?.clientWidth;
  navHighlightX.value = targetElement?.offsetLeft;
}

onMounted(()=>{
  // 节点挂载完成后进行初始化
  initNavBar();
})


// 更多按钮点击事件
const moreAppClick = async () => {
  if (show.value === false) {
    show.value = true;
    await nextTick();
    animateCss(dropDownRef, 'show animate__animated animate__slideInDown animate__delay-0.6s animate__faster');
    animateCss(maskRef, 'show animate__animated animate__fadeIn animate__faster');

  } else if (show.value === true) {
    navBarDropDownClose();
  }
}

const navBarDropDownClose = () => {
  animateCss(maskRef, 'animate__animated animate__fadeOut animate__faster');
  animateCss(dropDownRef, 'animate__animated animate__slideOutUp animate__faster animate__delay-0.6s', () => {
    show.value = false;
  })
}


</script>

<style lang="scss" scoped>

.more-apps {
  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 1px;
    height: 24px;
    background-color: #cecece;
    right: 0;
    top: 49%;
    transform: translateY(-50%);
  }
}

.drop-down-container {
  position: absolute;
  left: 0;
  top: 60px;
  width: 100%;
  display: none;

  &.show {
    display: block;
  }

  .wrapper {
    transition: all .3s cubic-bezier(.16, 1, .3, 1);
  }
}

.mask {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, .5);
  z-index: 49;
  display: none;

  &.show {
    display: block;
  }
}

.logo {
  font-family: 'Audiowide', cursive;
}

::v-deep(.maxer-nav-right) {
  .arco-btn-text:hover, .arco-btn-text[type=button]:hover, .arco-btn-text[type=submit]:hover {
    background: none;
  }
}

.nav-highlight {
  position: absolute;
  left: 0;
  top: 0;
  transition: .25s ease;
  transition-property: width, transform, opacity;
  border-radius: .375rem;
}

.bg-menu {
  background-color: rgba(215, 217, 218, 0.5);
}

</style>
