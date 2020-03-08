// import $ from 'jquery'

export async function submit(form) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(MOCK_RESULT)
        }, 2000)
    })

    // return new Promise((resolve, reject) => {
    //     $.getJSON('http://www.baidu.com/index.php?tn=myie2dg&ch=5', {}, function (data) {
    //         console.log(data)
    //         resolve(data)
    //     })
    // })
}

const MOCK_RESULT = {
    'code': 0,
    'message': '成功'
}

