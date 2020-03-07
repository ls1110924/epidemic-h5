import { connect } from 'react-redux'
import { HomePage } from './page'
import { HOME_ACTIONS } from '../../stores/actions'

const mapStateToProps = (state) => {
    const home = state.home

    return {
        name: home.get('name'),
        idNum: home.get('idNum'),
        phone: home.get('phone'),
        area: home.get('area'),
        temperature: home.get('temperature'),

        submitting: home.get('submitting')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateName: (name) => {
            dispatch(HOME_ACTIONS.updateName(name))
        },
        updateIdNum: (idNum) => {
            dispatch(HOME_ACTIONS.updateIdNum(idNum))
        },
        updatePhone: (phone) => {
            dispatch(HOME_ACTIONS.updatePhone(phone))
        },
        updateArea: (area) => {
            dispatch(HOME_ACTIONS.updateArea(area))
        },
        updateTemperature: (temperature) => {
            dispatch(HOME_ACTIONS.updateTemperature(temperature))
        },
        toggleSubmitting: (submitting) => {
            dispatch(HOME_ACTIONS.toggleSubmitting(submitting))
        },
        submit: () => {
            dispatch(HOME_ACTIONS.submit())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
