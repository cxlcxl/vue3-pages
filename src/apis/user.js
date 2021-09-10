import http from '@/utils/request'

export function Login(data) {
    return http({
        url: '/user/login',
        method: 'post',
        data
    })
}