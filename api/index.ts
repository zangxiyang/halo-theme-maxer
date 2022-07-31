/**
 * @作者: Seale
 * @时间: 2022/6/8
 * @版本: V1.0
 * @说明:
 */





export const API_CONSTANT = {
    API_MENU_LIST: `/api/content/menus`,
    API_SETTINGS: `/api/content/themes/activation/settings`,
    API_GET_A_SHEET_BY_SLUG: `/api/content/sheets/slug`,
    API_GET_COMMENTS: (id: number) => {
        return `/api/content/sheets/${id}/comments/tree_view`
    },

}

export interface BaseResp<T> {
    status: number,
    message: string,
    data: T
}


export interface BasePageResp<T> {
    commentCount: number
    content: T
    hasContent: boolean
    hasNext: boolean
    hasPrevious: boolean
    isEmpty: boolean
    isFirst: boolean
    isLast: boolean
    page: number
    pages: number
    rpp: number
    total: number
}
