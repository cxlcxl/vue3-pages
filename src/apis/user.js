import http from '@/utils/request'

export function login(data) {
    return http({
        url: '/user/login',
        method: 'post',
        data
    })
}

export function Login(data) {
    return http({
        url: '/user/login',
        method: 'post',
        data
    })
}

export function getInfo() {
    return http({
        url: '/user/info',
        method: 'get'
    })
}