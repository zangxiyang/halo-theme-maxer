/**
 * @作者: Seale
 * @时间: 2022/6/7
 * @版本: V1.0
 * @说明: 权限路由中间件
 */

import {abortNavigation, defineNuxtRouteMiddleware} from "#imports";

export default defineNuxtRouteMiddleware((to, from) =>{
    console.log('运行了auth中间件')
})
