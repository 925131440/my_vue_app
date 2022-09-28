import axios from 'axios'
import qs from 'qs'

// axios.defaults.baseURL = 'http://localhost:3000/'
axios.defaults.withCredentials = true
axios.defaults.timeout = 100000
// axios.defaults.headers= {
// 	'Access-Control-Allow-Origin': '*',
// }

let http = { post: '', get: '' }

http.post = (api, data) => {
    const params = qs.stringify(data)
    return new Promise((resolve, reject) => {
        axios.post(api, params).then(r => {
            resolve(r)
        }).catch(e => {
            reject(e)
        })
    })
}

http.get = (api, data) => {
    const params = {};
    return new Promise((resolve, reject) =>{
        axios.get(api, params).then(r => {
            resolve(r)
        }).catch(e => {
            reject(e)
        })
    })
}

export default http