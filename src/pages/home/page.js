import React from 'react'
import { Button, Input } from 'antd'
import { CityPicker } from '../../components/city-picker'
import './index.css'

import { trim, isNull } from '../../utils/utils'

export class HomePage extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { submitting } = this.props

        return (
            <div className='main'>
                <div className='title'>疫情防控健康信息填写</div>

                <div className={'name option-row'}>
                    <span className={'label'}>姓名</span>
                    <Input className={'input'}
                           size='large'
                           placeholder='请输入姓名'
                           maxLength={300}
                           value={this.props.name}
                           onChange={this.onNameInputChanged} />
                </div>

                <div className={'id-num option-row'}>
                    <span className={'label'}>身份证号</span>
                    <Input className={'input'}
                           size='large'
                           placeholder='请输入正确的身份证号'
                           maxLength={300}
                           value={this.props.idNum}
                           onChange={this.onIdNumInputChanged} />
                </div>

                <div className={'phone option-row'}>
                    <span className={'label'}>手机</span>
                    <Input className={'input'}
                           size='large'
                           placeholder='请输入正确的手机号'
                           maxLength={300}
                           value={this.props.phone}
                           onChange={this.onPhoneInputChanged} />
                </div>

                <div className={'temperature option-row'}>
                    <span className={'label'}>地区</span>
                    <div className={'input'}>
                        <CityPicker
                            cities={this.props.area}
                            placeholder={'请选择当前所在地区'}
                            onCitySelected={this.onCitySelected} />
                    </div>
                </div>

                <div className={'temperature option-row'}>
                    <span className={'label'}>体温</span>
                    <Input className={'input'}
                           size='large'
                           placeholder='请输入当前体温'
                           maxLength={300}
                           value={this.props.temperature}
                           onChange={this.onTemperatureInputChanged} />
                </div>

                <div className={'submit-container'}>
                    <Button className={'submit-btn'}
                            type='primary'
                            shape={'round'}
                            size={'large'}
                            loading={submitting}
                            onClick={this.onSubmitBtnClick}>
                        <span className={'submit-btn-text'}>{submitting ? '提交中' : '提交'}</span>
                    </Button>
                </div>

            </div>
        )
    }

    onNameInputChanged = (e) => {
        const name = e && e.target ? trim(e.target.value) : null
        if (!isNull(name)) {
            const { updateName } = this.props
            updateName && updateName(name)
        }
    }

    onIdNumInputChanged = (e) => {
        const idNum = e && e.target ? trim(e.target.value) : null
        if (!isNull(idNum)) {
            const { updateIdNum } = this.props
            updateIdNum && updateIdNum(idNum)
        }
    }

    onPhoneInputChanged = (e) => {
        const phone = e && e.target ? trim(e.target.value) : null
        if (!isNull(phone)) {
            const { updatePhone } = this.props
            updatePhone && updatePhone(phone)
        }
    }

    onCitySelected = (area) => {
        const { updateArea } = this.props
        updateArea && updateArea(area)
    }

    onTemperatureInputChanged = (e) => {
        const temperature = e && e.target ? trim(e.target.value) : null
        if (!isNull(temperature)) {
            const { updateTemperature } = this.props
            updateTemperature && updateTemperature(temperature)
        }
    }

    onSubmitBtnClick = () => {
        const { submit } = this.props
        submit && submit()
    }

}
