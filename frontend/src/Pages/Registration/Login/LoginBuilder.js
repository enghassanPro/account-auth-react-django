import React, { Component } from 'react';
import Login from './Login';
import axios from 'axios';
import { inputText } from '../../../validation/validtion';
import { Redirect } from 'react-router-dom';

class LoginBuilder extends Component {

    state = {
        error: {},
        errorMsg: '',
        redirect: { push: false, to: '' },
        facebook_appId: '',
        google_clientId: '',
        success: '',
        warning: '',
        user: {},
        linkWarn: '',
        warnmail: ''

    }
    componentDidMount() {
        document.title = "Login"
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
        for (var i = 0; i < 2; i++) {
            arr[data[i].name] = data[i].value
        }
        return arr

    }

    validationForm = (data) => {
        var error = {}
        Object.keys(data).map(field => {
            if (data[field] == '')
                error[field] = 'This Field is required'
            else if (field == 'password') {
                if (data[field].length < 5)
                    error[field] = 'Password should be greater than 5 character'
            }
            else {

                if (!inputText(data[field], false, false, true))
                    error[field] = 'Invalid username should be contains alpha,number,_,- only!'
            }
        })

        if (Object.entries(error).length === 0)
            return true

        return error

    }


    postRequest = (data) => {
        if (Object.entries(this.state.error).length === 0)
            axios.post('/auth/login', data).then(result => {

                this.setState({ redirect: { push: true, to: "/" } })


            }).catch(error => {

                Object.keys(error.response.data).map(err => {
                    if (err == 'password' || err == 'username') {
                        var _error = {}
                        _error[err] = error.response.data[err]
                        this.setState({ error: _error })
                    } else {

                        if (err == 'login') {
                            this.setState({ warning: error.response.data[err], user: { "username": data['username'] } })
                        } else {

                            this.setState({ errorMsg: error.response.data[err] })
                            setTimeout(() => this.setState({ errorMsg: '' }), 5000)
                        }
                    }
                })

            })

    }

    activateAccount = () => {
        this.setState({ warning: '' })
        axios.post("/auth/send/activate", { ...this.state.user }).then(result => {
            this.setState({ success: result.data['success'] })

            setTimeout(() => this.setState({ success: '' }), 4000)
            this.setState({ warnmail: "For Heroku Authorization can't send mail for some problem you can click here to Activate your Email  ", linkWarn: result.data.activate })
        }).catch(error => {
            Object.keys(error.response.data).map(err => {
                this.setState({ warning: '', errorMsg: error.response.data[err] })
                setTimeout(() => this.setState({ errorMsg: '' }), 5000)
            })
        })
    }

    hideError = (ev) => {
        this.setState({ warning: '' })
        var name = ev.target.name
        if (this.state.error[name]) {
            var cp = this.state.error
            delete cp[name]

            this.setState({ error: cp })

        }
        return;
    }

    socialLogin = (data) => {

        this.setState({ redirect: { push: true, to: '/' } })

    }

    render() {

        return this.state.redirect.push ? <Redirect to={this.state.redirect.to} /> :
            <Login
                errorValidation={this.state.error}
                errorMsg={this.state.errorMsg}
                hideError={(ev) => this.hideError(ev)}
                submitForm={(ev) => this.formHandler(ev)}
                warning={this.state.warning}
                success={this.state.success}
                google={this.socialLogin}
                facebook={this.socialLogin}
                warningHandler={this.activateAccount}
                warningactive={this.state.linkWarn}
                warnmail={this.state.warnmail}
            />

    }
}

export default LoginBuilder;