/**
 * @作者: Seale
 * @时间: 2022/6/13
 * @版本: V1.0
 * @说明:
 */

/* halo api url */
import {useFetch} from "#imports";


const baseApi = import.meta.env.VITE_HALO_BASE_API;

const api_access_key = import.meta.env.VITE_API_ACCESS_KEY;


export function request(url: string, method: Methods, params?: object, data?: any){
    return useFetch(url,{
        baseURL: baseApi,
        method: method,
        params: params,
        body: data,
        headers: {
            api_access_key
        }
    });
}


// 请求方式
export enum Methods {
    GET = 'get',
    POST = 'post',
    DELETE = 'delete',
    PUT = 'put',
}
