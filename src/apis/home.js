import axios from './axios'

/**
 * 提交健康信息
 * @param form
 * @returns {Promise<*>}
 */
export async function submit(form) {
    // return new Promise(resolve => {
    //     setTimeout(() => {
    //         resolve(MOCK_RESULT)
    //     }, 2000)
    // })

    return axios.post('/proxy/api/epidemic/submit', form)
}

const MOCK_RESULT = {
    'code': 0,
    'message': '成功'
}

