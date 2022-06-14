/**
 * @作者: Seale
 * @时间: 2022/6/13
 * @版本: V1.0
 * @说明:
 */
import {API_CONSTANT, BaseResp} from "~/api";
import {Methods, request} from "~/utils/request";
import {AsyncData} from "#app";


export interface Sheets{
    id: string,
    slug: string
}


export const querySheetBySlug = (slugName: string = 'bloggersay')=>{
    return request<Sheets>(API_CONSTANT.API_GET_A_SHEET_BY_SLUG, Methods.GET, {
        slug: slugName
    });
}
