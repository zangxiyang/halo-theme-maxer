import {AsyncData} from "#app";
import {API_CONSTANT, BaseResp} from "~/api";
import {useFetch} from "#imports";
import {Menu} from "~/api/modules/menu";

/**
 * @作者: Seale
 * @时间: 2022/6/9
 * @版本: V1.0
 * @说明:
 */


export interface Settings {
    blogTitle?: string,                     // 博客标题
    textLogo?: string,                      // 文字LOGO
    indexNotice?: string,                   // 首页公告
    favIcon?: string,                       // favicon
    keywords?: string,                      // 关键字
    description?: string                    // 描述
}


export const querySettings = (): AsyncData<BaseResp<Settings>, any> =>{
    return useFetch(`${API_CONSTANT.API_SETTINGS}`) as unknown as AsyncData<BaseResp<Settings>, any>;
}
