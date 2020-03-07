import { all, call, put, select, takeLatest } from 'redux-saga/effects'
import { HOME_ACTIONS } from '../actions'

function* handleSubmit(action) {
    try {
        const state = yield select()
        const home = state.home
        if (home.get('submitting')) {
            // 已经在请求中，则跳过
            return
        }

        // 校验参数

        yield put(HOME_ACTIONS.toggleSubmitting(true))

        // TODO
        yield put(HOME_ACTIONS.clear())
        yield put(HOME_ACTIONS.toggleSubmitting(false))
    } catch (e) {
        yield put(HOME_ACTIONS.toggleSubmitting(false))
    }
}

function* rootSaga() {
    yield all([
        takeLatest('home/submit', handleSubmit),
    ])
}

export default rootSaga
