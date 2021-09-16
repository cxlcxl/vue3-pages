import http from '@/utils/request'

export function getNews(params) {
    return http({
        url: '/news',
        type: 'get',
        params
    })
}

export function newDetail(id) {
    return http({
        url: '/news/' + id,
        type: 'get'
    })
}