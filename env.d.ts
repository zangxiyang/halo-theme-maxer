/**
 * @作者: Seale
 * @时间: 2022/6/13
 * @版本: V1.0
 * @说明:
 */

interface ImportMetaEnv {
    readonly VITE_HALO_BASE_API: string
    readonly VITE_API_ACCESS_KEY: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
