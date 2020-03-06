import React, { Component } from 'react';
import ResetPasswordSend from './ResetPasswordSend';
import { email } from '../../../../validation/validtion';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class ResetPasswordSendBuilder extends Component {

    state = {
        error: {},
        errorMsg: '',
        redirect: { push: false, to: '' },
        warning: '',
        linkWarn: '',
    }
    componentDidMount() {
        document.title = "Reset Password"
    }

    formHandler = (data) => {
        data.preventDefault();

        var extract = this.extractDataForm(data.target.elements)
        // validate the extract data
        var validate = this.validationForm(extract)
        if (validate === true) {
            this.postRequest(extract)
        }
        else this.setState({ error: validate })


    }

    extractDataForm = (data) => {
        var arr = {}
        arr['email'] = data['email'].value
        return arr
    }

    validationForm = (data) => {
        var error = {}

        if (data['email'] == '')
            error['email'] = 'This Field is required'
        else if (!email(data['email']))
            error['email'] = 'Invalid email should be contains alpha, number, - , _ , . , @ only like fo@fo.fo'

        if (Object.entries(error).length === 0)
            return true

        return error

    }


    postRequest = (data) => {
        if (Object.entries(this.state.error).length === 0)
            axios.post('/auth/reset-password', data).then(result => {

                this.setState({ success: result.data.success })

                setTimeout(() => this.setState({ success: '' }), 4000)
                this.setState({ warning: "For Heroku Authorization can't send mail for some problem you can click here to reset Password  ", linkWarn: result.data.activate })


            }).catch(error => {
                Object.keys(error.response.data).map(err => {
                    if (err == 'username') {
                        var _error = {}
                        _error[err] = error.response.data[err]
                        this.setState({ error: _error })
                    } else {
                        this.setState({ errorMsg: error.response.data[err] })
                        setTimeout(() => this.setState({ errorMsg: '' }), 5000)
                    }
                })

            })

    }

    hideError = (ev) => {
        var name = ev.target.name
        if (this.state.error[name]) {
            var cp = this.state.error
            delete cp[name]

            this.setState({ error: cp })

        }
        return;
    }


    render() {
        return this.state.redirect.push ? <Redirect to={this.state.redirect.to} /> :
            <ResetPasswordSend
                errorValidation={this.state.error}
                errorMsg={this.state.errorMsg}
                hideError={(ev) => this.hideError(ev)}
                submitForm={(ev) => this.formHandler(ev)}
                success={this.state.success}
                warning={this.state.warning}
                warningHandler={this.state.linkWarn}
            />

    }
}