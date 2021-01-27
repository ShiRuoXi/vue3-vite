import http from './http'
const api_key = ''
let sign = process.env.VUE_APP_SIGN
if (process.env.NODE_ENV === 'production') {
    sign = localStorage.getItem("sign")
} else {
    sign = ''
}

const post = (url, data = {}) =>
    http.post(
        url,
        Object.assign({
                api_key: api_key,
                sign,
            },
            data
        )
    )
const get = (url, params = {}) =>
    http.get(
        url,
        Object.assign({
                api_key: api_key,
                sign
            },
            params
        )
    )

// 接口说明
const post = data => post(data.name, data.data);
const get = params => get(params.name, params.data);

//接口导出
export {
    post,
    get
}