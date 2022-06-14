/**
 * @作者: Seale
 * @时间: 2022/6/8
 * @版本: V1.0
 * @说明:
 */





export const API_CONSTANT  = {
    API_MENU_LIST: `/api/content/menus`,
    API_SETTINGS: `/api/content/themes/activation/settings`,
    API_GET_A_SHEET_BY_SLUG: `/api/content/sheets/slug`,

}

export interface BaseResp <T> {
    status: number,
    message: string,
    data: T
}
