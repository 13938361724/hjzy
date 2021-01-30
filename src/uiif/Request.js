import axios from 'axios'


let Request = (params) => {
    return new Promise((resolve, reject) => {
        axios({
            ...params
        }).then((res) => {
            resolve(res)
        }).catch(error => {
            reject(error)
        })
    })
}

export default Request