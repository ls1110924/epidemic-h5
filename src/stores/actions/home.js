import { createActions } from 'redux-actions'

export const HOME_ACTIONS = createActions({
    updateName: (name) => {
        return { name }
    },
    updateIdNum: (idNum) => {
        return { idNum }
    },
    updatePhone: (phone) => {
        return { phone }
    },
    updateArea: (area) => {
        return { area }
    },
    updateTemperature: (temperature) => {
        return { temperature }
    },
    clear: () => {
        return {}
    },
    toggleSubmitting: (submitting) => {
        return { submitting }
    },
    submit: () => {
        return {}
    }
}, { prefix: 'home' })
