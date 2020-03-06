import React, { Component } from 'react';
import Register from './Register'
import axios from 'axios';
import { inputText, email, password } from '../../../validation/validtion';
import { Redirect } from 'react-router-dom';
import $ from 'jquery';

export default class RegisterBuilder extends Component {

    state = {
        error: {},
        errorMsg: '',
        success: '',
        redirect: { push: false, to: '' },
        warning: '',
        linWarn: ''

    }

    componentDidMount() {
        document.title = "Register"
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
        for (var i = 0; i < 6; i++) {
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
                var password1 = data['password1']
                if (data[field].length < 5)
                    error[field] = 'Password should be greater than 5 character'
                else if (!password(data[field], password1))
                    error['password1'] = 'Password didn\'t match'
            }
            else if (field == 'username') {

                if (!inputText(data[field], false, false, true))
                    error[field] = 'Invalid username should be contains alpha,number,_,- only!'
            }
            else if (field == 'email') {
                if (!email(data[field]))
                    error['email'] = 'Invalid email should be contains alpha, number, - , _ , . , @ only like fo@fo.fo'
            } else if (field != 'password1') {
                if (!inputText(data[field]))
                    error[field] = "This field should be contains alpha only"
            }
        })



        if (Object.entries(error).length === 0)
            return true

        return error

    }


    postRequest = (data) => {
        if (Object.entries(this.state.error).length === 0)
            axios.post('/auth/register', data).then(result => {
                $('html, body').animate({ scrollTop: 0 }, 'slow');
                this.setState({ success: result.data.success })
                setTimeout(() => this.setState({ success: '' }), 4000)
                this.setState({ warning: "For Heroku Authorization can't send mail for some problem you can click here to Activate Your Account  ", linkWarn: result.data.activate })

            }).catch(error => {

                Object.keys(error.response.data).map(err => {
                    if (Object.keys(data).includes(err)) {
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

            <Register
                errorValidation={this.state.error}
                errorMsg={this.state.errorMsg}
                hideError={(ev) => this.hideError(ev)}
                success={this.state.success}
                submitForm={(ev) => this.formHandler(ev)}
                warning={this.state.warning}
                warningHandler={this.state.linkWarn}

            />

    }
}
