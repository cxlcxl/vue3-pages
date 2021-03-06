import _cookie from 'js-cookie'
const tokenKey = 'web_token'
import store from '../store'

export function getToken() {
    return _cookie.get(tokenKey)
}
export function setToken(token) {
    return _cookie.set(tokenKey, token)
}
export function removeToken() {
    return _cookie.remove(tokenKey)
}

export function getUserInfo() {
    if (getToken()) {
        store.dispatch("user/getInfo")
    }
}