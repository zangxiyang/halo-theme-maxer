/**
 * @作者: Seale
 * @时间: 2022/6/7
 * @版本: V1.0
 * @说明:
 */
import {Settings} from "~/api/modules/settings";

export interface UserState {
    userName?: string,
    nickName?: string
}

export type SettingState = Partial<Settings> 
