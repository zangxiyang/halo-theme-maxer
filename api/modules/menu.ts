/**
 * @作者: Seale
 * @时间: 2022/6/8
 * @版本: V1.0
 * @说明:
 */
import {API_CONSTANT, BaseResp} from "~/api";
import {AsyncData} from "#app";
import {Methods, request} from "~/utils/request";


export interface Menu{
    id: number,
    name: string
    url: string
    priority: number,
    target: string,
    icon: string,
    parentId: number,
    team: string,
}


export const queryMenusList = (): AsyncData<BaseResp<Menu[]>, any> =>{
    return request<Menu[]>(`${API_CONSTANT.API_MENU_LIST}`,Methods.GET);
}
