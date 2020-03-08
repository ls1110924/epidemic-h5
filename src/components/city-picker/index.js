import React from 'react'
import { Cascader } from 'antd'
import './style.css'
import { cityOptions } from './constants'

export class CityPicker extends React.Component {

    render() {
        return (
            <Cascader
                className={'city-picker'}
                placeholder={this.props.placeholder}
                options={cityOptions}
                value={this.props.cities}
                onChange={this.onCityCascaderChanged} />
        )
    }

    onCityCascaderChanged = (value) => {
        if (!value || value.length !== 3) {
            return
        }
        const { onCitySelected } = this.props
        onCitySelected && onCitySelected(value)
    }

}


