import React, { Component } from 'react';
import ResetPassword from './ResetPassword';
import { password } from '../../../../validation/validtion';
import axios from 'axios';
import { Redirect } from 'react-router-dom';


export default class ResetPasswordBuilder extends Component {

    state = {
        error: {},
        errorMsg: '',
        redirect: { push: false, to: '' },
        user_id: ''
    }
    componentDidMount() {
        document.title = "Reset Password"
        // console.log(this.props.match.params.token)
        axios.post("/auth/verify", { "token": this.props.match.params.token }).then(result => {
            this.setState({ user_id: result.data.id })
        }).catch(error => {
            Object.keys(error.response.data).map(err => {
                this.setState({ redirect: { push: true, to: "/login" } })
            })
        })
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
        arr['password'] = data['password'].value
        arr['password1'] = data['password1'].value
        return arr
    }

    validationForm = (data) => {
        var error = {}

        if (data['password'] == '')
            error['password'] = 'This Field is required'
        else if (data['password1'] == '')
            error['password1'] = 'This Field is required'

        else if (!password(data['password'], data['password1']))
            error['password1'] = 'Password didn\'t match'

        else if (!error['password'])
            if (data['password'].length < 5)
                error['password'] = 'Password should be greater than 5 character'

        if (Object.entries(error).length === 0)
            return true

        return error

    }


    postRequest = (data) => {
        if (Object.entries(this.state.error).length === 0)
            axios.put('/auth/reset-password/' + this.state.user_id, data).then(result => {

                this.setState({ success: result.data.success })

                setTimeout(() => this.setState({ success: '', redirect: { push: true, to: "/login" } }), 4000)


            }).catch(error => {
                Object.keys(error.response.data).map(err => {
                    if (err == 'password') {
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
            <ResetPassword
                errorValidation={this.state.error}
                errorMsg={this.state.errorMsg}
                hideError={(ev) => this.hideError(ev)}
                submitForm={(ev) => this.formHandler(ev)}
                success={this.state.success}
            />

    }
}