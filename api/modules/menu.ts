/**
 * @作者: Seale
 * @时间: 2022/6/8
 * @版本: V1.0
 * @说明:
 */
import {useFetch} from "#imports";
import {API_CONSTANT, BaseResp} from "~/api";
import {AsyncData, FetchResult} from "#app";


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
    return useFetch(`${API_CONSTANT.API_MENU_LIST}`) as unknown as AsyncData<BaseResp<Menu[]>, any>;
}
