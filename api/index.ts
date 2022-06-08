/**
 * @作者: Seale
 * @时间: 2022/6/8
 * @版本: V1.0
 * @说明:
 */

const baseApi = "http://localhost:8090";


export const API_CONSTANT  = {
    API_MENU_LIST: `${baseApi}/api/content/menus`
}

export interface BaseResp <T> {
    status: number,
    message: string,
    data: T
}
