/**
 * @作者: Seale
 * @时间: 2022/6/8
 * @版本: V1.0
 * @说明:
 */

/* halo api url */
export const baseApi = "http://localhost:8090";




export const API_CONSTANT  = {
    API_MENU_LIST: `${baseApi}/api/content/menus`,
    API_SETTINGS: `${baseApi}/api/content/themes/activation/settings`
}

export interface BaseResp <T> {
    status: number,
    message: string,
    data: T
}
