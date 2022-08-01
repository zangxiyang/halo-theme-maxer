/**
 * @作者: Seale
 * @时间: 2022/8/1
 * @版本: V1.0
 * @说明: 文章
 */
import {Methods, request} from "~/utils/request";
import {API_CONSTANT, BasePageResp} from "~/api";


export interface Posts{
    id:  number,
    title: string,
    status: string,
    slug: string,
    editorType: string,
    updateTime: number,
    createTime: number,
    editTime: number,
    metaKeywords: null | string,
    metaDescription: null | string,
    fullPath: string,
    summary: string,
    thumbnail: string,
    visits: number,
    disallowComment: boolean,
    password: string,
    template: string,
    topPriority: number,
    likes: number,
    wordCount: number,
    inProgress: boolean,
    commentCount: number,
    tags: Tags[],
    categories: Categories[],
    metas: object,
    topped: boolean
}

// 分类
export interface Categories{
    id: number,
    name: string,
    slug: string,
    description: string,
    thumbnail: string,
    parentId: number,
    password: null | string,
    createTime: number,
    fullPath: string,
    priority: number
}

export interface Tags {
    id: number,
    name: string,
    slug: string,
    color: string,
    thumbnail: string,
    createTime: number,
    fullPath: string
}


export const queryPostList = (page: number = 0, size: number = 10)=>{
    return request<BasePageResp<Posts[]>>(API_CONSTANT.API_GET_POST_LIST, Methods.GET, {
        page: page,
        size: size
    });
}
