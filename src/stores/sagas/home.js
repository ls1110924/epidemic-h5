import { all, call, put, select, takeLatest } from 'redux-saga/effects'
import { message } from 'antd'
import { HOME_ACTIONS } from '../actions'
import { submit } from '../../apis'
import { isNull, isEmptyStr, PHONE_REG, ID_NUM_REG, TEMPERATURE_REG } from '../../utils'

function* handleSubmit() {
    try {
        const state = yield select()
        const home = state.home
        if (home.get('submitting')) {
            // 已经在请求中，则跳过
            return
        }

        yield put(HOME_ACTIONS.toggleSubmitting(true))

        // 校验参数
        const name = home.get('name')
        const idNum = home.get('idNum')
        const phone = home.get('phone')
        const area = home.get('area')
        const temperature = home.get('temperature')

        if (isEmptyStr(name)) {
            throw new Error('姓名不得为空')
        }
        if (isEmptyStr(idNum)) {
            throw new Error('身份证号不得为空')
        }
        if (!(ID_NUM_REG.test(idNum))) {
            throw new Error('请输入正确的身份证号')
        }
        if (isEmptyStr(phone)) {
            throw new Error('手机号不得为空')
        }
        if (!(PHONE_REG.test(phone))) {
            throw new Error('请输入正确的手机号')
        }
        if (isEmptyStr(area)) {
            throw new Error('请选择当前所在地区')
        }
        if (isEmptyStr(temperature)) {
            throw new Error('体温不得为空')
        }
        if (!TEMPERATURE_REG.test(temperature)) {
            throw new Error('请输入正确的体温数字')
        }
        const temper = parseFloat(temperature)
        if (isNaN(temper) || isNull(temper)) {
            throw new Error('请输入正确的体温数字')
        }
        if (temper < 35 || temper > 42) {
            throw new Error('体温填写错误，需35° ~ 42°')
        }

        const result = yield call(submit, { name, idNum, phone, area, temperature })
        if (result.code === 0) {
            message.info('提交成功')
        } else {
            throw new Error(result.message || '提交失败，请稍候重试')
        }

        yield put(HOME_ACTIONS.clear())
        yield put(HOME_ACTIONS.toggleSubmitting(false))
    } catch (e) {
        if (e.message) {
            message.info(e.message)
        }
        yield put(HOME_ACTIONS.toggleSubmitting(false))
    }
}

function* rootSaga() {
    yield all([
        takeLatest('home/submit', handleSubmit),
    ])
}

export default rootSaga
