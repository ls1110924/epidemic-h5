import React from 'react'
import { Input } from 'antd'
import './style.css'

export class RowInput extends React.Component {

    render() {
        return (
            <div className={'option-row'}>
                <span className={'label'}>{this.props.label}</span>
                <Input className={'input'}
                       size='large'
                       placeholder={this.props.placeholder}
                       maxLength={this.props.maxLength}
                       value={this.props.value}
                       onChange={this.onInputChangedInternal} />
            </div>
        )
    }

    onInputChangedInternal = (e) => {
        if (e && e.target) {
            const { onInputChanged } = this.props
            onInputChanged && onInputChanged(e.target.value)
        }
    }

}


