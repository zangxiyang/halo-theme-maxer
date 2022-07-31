/**
 * @作者: Seale
 * @时间: 2022/6/13
 * @版本: V1.0
 * @说明:
 */
import {API_CONSTANT, BasePageResp} from "~/api";
import {Methods, request} from "~/utils/request";


export interface Sheets{
    id: number,
    slug: string
}

export interface Comments{
    id: number,
    author: string,
    content: string,
    status: string
}


/**
 * 获取博主说自定义页面id
 * @param slugName
 */
export const querySheetBySlug = (slugName: string = 'bloggersay')=>{
    return request<Sheets>(API_CONSTANT.API_GET_A_SHEET_BY_SLUG, Methods.GET, {
        slug: slugName
    });
}


/**
 * 获取博主说列表
 * @param id
 */
export const queryBloggerSayList = (id: number)=>{
    return request<BasePageResp<Comments[]>>(API_CONSTANT.API_GET_COMMENTS(id), Methods.GET);
}
