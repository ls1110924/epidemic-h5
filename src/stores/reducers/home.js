import { handleActions } from 'redux-actions'
import { Record } from 'immutable'

export const INIT_HOME_STATE = Record({
    name: '',
    idNum: '',
    phone: '',
    area: [],
    temperature: '',

    submitting: false
})()

export default handleActions({

    ["home/updateName"]: (state, action) => {
        return state.set('name', action.payload.name)
    },
    ["home/updateIdNum"]: (state, action) => {
        return state.set('idNum', action.payload.idNum)
    },
    ["home/updatePhone"]: (state, action) => {
        return state.set('phone', action.payload.phone)
    },
    ["home/updateArea"]: (state, action) => {
        return state.set('area', action.payload.area)
    },
    ["home/updateTemperature"]: (state, action) => {
        return state.set('temperature', action.payload.temperature)
    },
    ["home/clear"]: (state) => {
        return state.set('name', '')
            .set('idNum', '')
            .set('phone', '')
            .set('area', [])
            .set('temperature', '')
    },
    ["home/toggleSubmitting"]: (state, action) => {
        return state.set('submitting', action.payload.submitting)
    },
}, INIT_HOME_STATE)
