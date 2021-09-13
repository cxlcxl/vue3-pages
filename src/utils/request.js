import axios from 'axios'
import store from '@/store'
import { getToken } from '@/utils/auth'
import {Message} from 'element-ui'

const http = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
})

//全局请求拦截
http.interceptors.request.use(
    config => {
        if (store.getters.token) {
            config.headers['Authorization'] = "Bearer " + getToken()
        }
        return config;
    },
    function (err) {
        return Promise.reject(err)
    }
)

//全局响应拦截，可进行操作提示等
http.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        let errRes = error.response.data
        Message({
            message: errRes.code + ': ' + errRes.msg,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(errRes)
    }
)

export default http