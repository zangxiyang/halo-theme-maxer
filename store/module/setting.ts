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
            blogTitle: 'Maxer',
            indexNotice: '',
            keywords: '',
            description: '',
            favIcon: '',
            textLogo: '',
        }
    },
    actions: {
        setSetting(data: SettingState){
            this.$patch(data);
        }
    }

})

export default useSettingStore;
