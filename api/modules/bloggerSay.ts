/**
 * @作者: Seale
 * @时间: 2022/6/13
 * @版本: V1.0
 * @说明:
 */
import {useFetch} from "#imports";
import {API_CONSTANT} from "~/api";


export interface Sheets{
    id: string,
    slug: string
}


export const querySheetBySlug = (slugName: string = 'bloggersay')=>{
    return useFetch(`${API_CONSTANT.API_GET_A_SHEET_BY_SLUG}`,{
        params: {
            slug: slugName
        }
    })
}
