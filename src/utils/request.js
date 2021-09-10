import axios from 'axios'
import store from '@/store'
import { getToken } from '@/utils/auth'

const http = axios.create({
    baseURL: process.env.BASE_URL_PREFIX,
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
        return response
    },
    error => {
        return Promise.reject(error)
    }
)

export default http