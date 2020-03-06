import React, { Component, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../../../../static/css/style.css';
import '../../../../static/css/custom.css';

class Register extends Component {

    render() {
        const { submitForm, hideError } = this.props

        return (
            <div className="w3layouts-main">
                <div className="bg-layer">
                    <div className="alert alert-success msg-done" style={{ display: this.props.success ? "block" : "none" }} role="alert">
                        <h4 className="alert-heading">{this.props.success}</h4>
                    </div>
                    <div className="alert alert-danger msg-done" style={{ display: this.props.errorMsg ? "block" : "none" }} role="alert">
                        <h4 className="alert-heading">{this.props.errorMsg}</h4>
                    </div>
                    <div className="alert alert-warning msg-warn" style={{ display: this.props.warning ? "block" : "none" }} role="alert">
                        <h4 className="alert-heading">{this.props.warning}&nbsp;&nbsp;&nbsp;<a href={this.props.warningHandler} className="btn btn-primary">Activate Your Email</a></h4>
                    </div>
                    <h1>Register</h1>
                    <div className="header-main">
                        <div className="main-icon">
                            <span className="fa fa-eercast"></span>
                        </div>
                        <div className="header-left-bottom">
                            <form action="#" method="post" onSubmit={submitForm}>
                                <div className="err-msg" style={{ display: this.props.errorValidation['first_name'] ? "block" : "none" }}>{this.props.errorValidation['first_name'] ? this.props.errorValidation['first_name'] : ""}</div>
                                <div className="icon1">
                                    <span className="fa fa-user"></span>
                                    <input type="text" name="first_name" placeholder="First Name" onChange={hideError} autoFocus={true} />
                                </div>
                                <div className="err-msg" style={{ display: this.props.errorValidation['last_name'] ? "block" : "none" }}>{this.props.errorValidation['last_name'] ? this.props.errorValidation['last_name'] : ''}</div>
                                <div className="icon1">
                                    <span className="fa fa-user"></span>
                                    <input type="text" name="last_name" placeholder="Last Name" onChange={hideError} autoFocus={true} />
                                </div>
                                <div className="err-msg" style={{ display: this.props.errorValidation['username'] ? "block" : "none" }}>{this.props.errorValidation['username'] ? this.props.errorValidation['username'] : ''}</div>
                                <div className="icon1">
                                    <span className="fa fa-user"></span>
                                    <input type="text" name="username" placeholder="Username" onChange={hideError} autoFocus={true} />
                                </div>
                                <div className="err-msg" style={{ display: this.props.errorValidation['email'] ? "block" : "none" }}>{this.props.errorValidation['email'] ? this.props.errorValidation['email'] : ""}</div>
                                <div className="icon1">
                                    <span className="fa fa-envelope"></span>
                                    <input type="email" name="email" placeholder="Email" onChange={hideError} autoFocus={true} />
                                </div>
                                <div className="err-msg" style={{ display: this.props.errorValidation['password'] ? "block" : "none" }}>{this.props.errorValidation['password'] ? this.props.errorValidation['password'] : ""}</div>
                                <div className="icon1">
                                    <span className="fa fa-lock"></span>
                                    <input type="password" name="password" placeholder="Password" onChange={hideError} />
                                </div>
                                <div className="err-msg" style={{ display: this.props.errorValidation['password1'] ? "block" : "none" }}>{this.props.errorValidation['password1'] ? this.props.errorValidation['password1'] : ""}</div>
                                <div className="icon1">
                                    <span className="fa fa-lock"></span>
                                    <input type="password" name="password1" placeholder="Confirm Password" onChange={hideError} />
                                </div>
                                <div className="bottom">
                                    <button type="submit" className="btn">Register</button>
                                </div>
                                <div className="links">
                                    <p style={{ width: "70%" }}><Link to="/login">Have Account? Login</Link></p>
                                    <div className="clear"></div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Register;