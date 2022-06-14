import {defineStore} from "pinia";
import {SettingState, UserState} from "~/store/module/types/storeTypes";

/**
 * @作者: Seale
 * @时间: 2022/6/10
 * @版本: V1.0
 * @说明:
 */


const useSettingStore = defineStore('setting',{
    state: (): SettingState=>{
        return {
            /*  主题配置 */
            blogTitle: 'Maxer',
            indexNotice: '',
            keywords: '',
            description: '',
            favIcon: '',
            textLogo: '',
            /* Nuxt程序 */

        }
    },
    actions: {
        setSetting(data: SettingState){
            this.$patch(data);
        }
    }

})

export default useSettingStore;
