import { all } from 'redux-saga/effects'
import homeSaga from './home'


/**
 * ROOT SAGA
 */
export default function* rootSaga() {
    yield all([
        homeSaga()
    ])
}
