import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../../../../../static/css/style.css';
import '../../../../../static/css/custom.css';

export default class ResetPasswordSend extends Component {

    render() {

        const { submitForm, hideError } = this.props

        return (
            <div className="w3layouts-main" >
                <div className="bg-layer">
                    <div className="alert alert-success msg-done" style={{ display: this.props.success ? "block" : "none" }} role="alert">
                        <h4 className="alert-heading">{this.props.success}</h4>
                    </div>
                    <div className="alert alert-warning msg-warn" style={{ display: this.props.warning ? "block" : "none" }} role="alert">
                        <h4 className="alert-heading">{this.props.warning}&nbsp;&nbsp;&nbsp;<a href={this.props.warningHandler} className="btn btn-primary">Reset Password</a></h4>
                    </div>
                    <div className="alert alert-danger msg-done" style={{ display: this.props.errorMsg ? "block" : "none" }} role="alert">
                        <h4 className="alert-heading">{this.props.errorMsg}</h4>
                    </div>
                    <h1>Reset Password</h1>
                    <div className="header-main">
                        <div className="main-icon">
                            <span className="fa fa-eercast"></span>
                        </div>
                        <div className="header-left-bottom">
                            <form action="#" method="post" onSubmit={submitForm}>
                                <div className="err-msg"
                                    style={{ display: this.props.errorValidation['email'] ? "block" : "none" }}
                                >
                                    {this.props.errorValidation['email'] ? this.props.errorValidation['email'] : ""}
                                </div>
                                <div className="icon1">
                                    <span className="fa fa-envelope"></span>
                                    <input type="email" name="email" placeholder="Email" onChange={hideError} autoFocus={true} />
                                </div>

                                <div className="bottom">
                                    <button type="submit" className="btn">Reset Password</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}