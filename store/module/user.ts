/**
 * @作者: Seale
 * @时间: 2022/6/7
 * @版本: V1.0
 * @说明: 用户 Store
 */

import {defineStore} from "pinia";
import {UserState} from "~/store/module/types/storeTypes";

const useUserStore = defineStore('user',{
    state: (): UserState=>{
        return {
            userName: '加载中',
            nickName: '加载中'
        }
    },

})

export default useUserStore;
