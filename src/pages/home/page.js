import React from 'react'
import { Button } from 'antd'
import { CityPicker } from '../../components/city-picker'
import { RowInput } from '../../components/row-input'
import './style.css'

export class HomePage extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { submitting } = this.props

        return (
            <div className='main'>
                <div className='title'>疫情防控健康信息填写</div>

                <RowInput label={'姓名'}
                          placeholder={'请输入姓名'}
                          maxLength={10}
                          value={this.props.name}
                          onInputChanged={this.props.updateName} />

                <RowInput label={'身份证号'}
                          placeholder={'请输入正确的身份证号'}
                          maxLength={18}
                          value={this.props.idNum}
                          onInputChanged={this.props.updateIdNum} />

                <RowInput label={'手机'}
                          placeholder={'请输入正确的手机号'}
                          maxLength={11}
                          value={this.props.phone}
                          onInputChanged={this.props.updatePhone} />

                <div className={'temperature option-row'}>
                    <span className={'label'}>地区</span>
                    <div className={'input'}>
                        <CityPicker
                            cities={this.props.area}
                            placeholder={'请选择当前所在地区'}
                            onCitySelected={this.onCitySelected} />
                    </div>
                </div>

                <RowInput label={'体温'}
                          placeholder={'请输入当前体温'}
                          maxLength={5}
                          value={this.props.temperature}
                          onInputChanged={this.props.updateTemperature} />

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

    onCitySelected = (area) => {
        const { updateArea } = this.props
        updateArea && updateArea(area)
    }

    onSubmitBtnClick = () => {
        const { submit } = this.props
        submit && submit()
    }

}
