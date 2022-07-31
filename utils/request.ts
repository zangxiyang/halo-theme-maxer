/**
 * @作者: Seale
 * @时间: 2022/6/13
 * @版本: V1.0
 * @说明:
 */

/* halo api url */
import {useFetch} from "#imports";
import {AsyncData} from "#app";
import {BaseResp} from "~/api";
import {SearchParams} from "ohmyfetch";


const baseURL = import.meta.env.VITE_HALO_BASE_API;

const api_access_key = import.meta.env.VITE_API_ACCESS_KEY;


export function request<T>(url: string, method: Methods, params?: SearchParams, data?: any): AsyncData<BaseResp<T>, any>{
    return useFetch(url,{
        baseURL,
        method,
        params,
        body: data,
        headers: {
            "API-Authorization": api_access_key
        },
        async onResponse({request,response}){
            // TODO 业务逻辑
        },
        async onRequest({request, options}){
            // console.log("发送了请求", request, options)
        }
    }) as AsyncData<BaseResp<T>, any>;
}


// 请求方式
export enum Methods {
    GET = 'GET',
    POST = 'POST',
    DELETE = 'DELETE',
    PUT = 'PUT',
}


