// 公用方法封装
export const pathMap = {
    index: '首页',
    login: '登录',
    add: '添加商品',
    swiper: '轮播图配置',
}
export function localGet(key) {
    const value = window.localStorage.getItem(key)
    try {
        return JSON.parse(window.localStorage.getItem(key))
    } catch (error) {
        return value
    }
}

export function localSet(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value))
}

export function localRemove(key) {
    window.localStorage.removeItem(key)
}