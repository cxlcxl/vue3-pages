import http from '@/utils/request'

export function login(data) {
    return http({
        url: '/user/login',
        method: 'post',
        data
    })
}

export function register(data) {
    return http({
        url: '/user/register',
        method: 'post',
        data
    })
}

export function logout(data) {
    return http({
        url: '/user/logout',
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

export function emailVerify(email) {
    return http({
        url: '/user/email-verify',
        method: 'post',
        data: {
            email
        }
    })
}

export function resetPass(data) {
    return http({
        url: '/user/reset-password',
        method: 'post',
        data
    })
}

export function forgotReset(data) {
    return http({
        url: '/user/forgot-reset',
        method: 'post',
        data
    })
}