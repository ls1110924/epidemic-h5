import React from 'react'
import { Button, Input, message } from 'antd'
import './index.css'

import { trim, isNull } from '../../utils/utils'

export class HomePage extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            idNum: '',
            phone: '',
            province: null,
            city: null,
            county: null,
            temperature: '',

            submitting: false
        }
    }

    clear = () => {
        this.setState({
            name: '',
            idNum: '',
            phone: '',
            province: null,
            city: null,
            county: null,
            temperature: '',

            submitting: false
        })
    }

    render() {
        const { submitting } = this.state

        return (
            <div className="main">
                <div className="title">疫情防控健康信息填写</div>

                <div className={"name option-row"}>
                    <span className={"label"}>姓名</span>
                    <Input className={"input"}
                           size="large"
                           placeholder="请输入姓名"
                           maxLength={300}
                           value={this.state.name}
                           onChange={this.onNameInputChanged} />
                </div>

                <div className={"id-num option-row"}>
                    <span className={"label"}>身份证号</span>
                    <Input className={"input"}
                           size="large"
                           placeholder="请输入正确的身份证号"
                           maxLength={300}
                           value={this.state.idNum}
                           onChange={this.onIdNumInputChanged} />
                </div>

                <div className={"phone option-row"}>
                    <span className={"label"}>手机</span>
                    <Input className={"input"}
                           size="large"
                           placeholder="请输入正确的手机号"
                           maxLength={300}
                           value={this.state.phone}
                           onChange={this.onPhoneInputChanged} />
                </div>

                <div className={"temperature option-row"}>
                    <span className={"label"}>体温</span>
                    <Input className={"input"}
                           size="large"
                           placeholder="请输入当前体温"
                           maxLength={300}
                           value={this.state.temperature}
                           onChange={this.onTemperatureInputChanged} />
                </div>

                <div className={"submit-container"}>
                    <Button className={"submit-btn"}
                            type="primary"
                            shape={"round"}
                            size={"large"}
                            loading={submitting}
                            onClick={this.onSubmitBtnClick}>
                        <span className={"submit-btn-text"}>{submitting ? '提交中' : '提交'}</span>
                    </Button>
                </div>

            </div>
        )
    }

    onNameInputChanged = (e) => {
        const name = e && e.target ? trim(e.target.value) : null
        if (!isNull(name)) {
            this.setState({
                name
            })
        }
    }

    onIdNumInputChanged = (e) => {
        const idNum = e && e.target ? trim(e.target.value) : null
        if (!isNull(idNum)) {
            this.setState({
                idNum
            })
        }
    }

    onPhoneInputChanged = (e) => {
        const phone = e && e.target ? trim(e.target.value) : null
        if (!isNull(phone)) {
            this.setState({
                phone
            })
        }
    }

    onTemperatureInputChanged = (e) => {
        const temperature = e && e.target ? trim(e.target.value) : null
        if (!isNull(temperature)) {
            this.setState({
                temperature
            })
        }
    }

    onSubmitBtnClick = () => {
        const { submitting } = this.state
        if (!submitting) {
            this.setState({ submitting: true })

            setTimeout(() => {
                message.info('This is a normal message')
                this.clear()
            }, 2000)
        }
    }

}
