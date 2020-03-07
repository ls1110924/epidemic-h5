import { handleActions } from 'redux-actions'
import { Record } from 'immutable'
import { isNull, trim } from '../../utils'

export const INIT_HOME_STATE = Record({
    name: '',
    idNum: '',
    phone: '',
    area: [],
    temperature: '',

    submitting: false
})()

export default handleActions({

    ['home/updateName']: (state, action) => {
        const name = action && action.payload ? action.payload.name : null
        if (isNull(name)) {
            return state
        }
        return state.set('name', trim(name))
    },
    ['home/updateIdNum']: (state, action) => {
        const idNum = action && action.payload ? action.payload.idNum : null
        if (isNull(idNum)) {
            return state
        }
        return state.set('idNum', trim(idNum))
    },
    ['home/updatePhone']: (state, action) => {
        const phone = action && action.payload ? action.payload.phone : null
        if (isNull(phone)) {
            return state
        }
        return state.set('phone', trim(phone))
    },
    ['home/updateArea']: (state, action) => {
        return state.set('area', action.payload.area)
    },
    ['home/updateTemperature']: (state, action) => {
        const temperature = action && action.payload ? action.payload.temperature : null
        if (isNull(temperature)) {
            return state
        }
        return state.set('temperature', trim(temperature))
    },
    ['home/clear']: (state) => {
        return state.set('name', '')
            .set('idNum', '')
            .set('phone', '')
            .set('area', [])
            .set('temperature', '')
    },
    ['home/toggleSubmitting']: (state, action) => {
        return state.set('submitting', action.payload.submitting)
    },
}, INIT_HOME_STATE)
