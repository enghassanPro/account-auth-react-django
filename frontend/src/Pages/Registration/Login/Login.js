import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../../../static/css/style.css';
import '../../../../static/css/custom.css';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import Instrgam from 'react-instagram-login';

class Login extends Component {

    state = {
        content: "",
    }

    checkboxHandler = () => {
        if (this.state.content === "")
            this.setState({
                content: 'url(../../../../static/images/tick.png)'
            })
        else
            this.setState({ content: "" })
    }



    render() {
        const { submitForm } = this.props
        const { hideError } = this.props
        const { googleAuth } = this.props
        // const { facebookAuth } = this.props
        let checkboxStyle = {
            content: this.state.content,
        }
        const styles = {
            border: 'none',
            width: "35px",
            height: "35px",
            textAlign: "center",
            lineHeight: "35px",
            display: "block",
            borderRadius: "50%",
            cursor: "pointer"
        }
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
                        <h4 className="alert-heading">{this.props.warning}&nbsp;&nbsp;&nbsp;<button type="button" className="btn btn-primary" onClick={this.props.warningHandler}>Activate Now</button></h4>
                    </div>
                    <div className="alert alert-warning msg-warn" style={{ display: this.props.warnmail ? "block" : "none" }} role="alert">
                        <h4 className="alert-heading">{this.props.warnmail}&nbsp;&nbsp;&nbsp;<a href={this.props.warningactive} className="btn btn-primary">Confirm Now</a></h4>
                    </div>
                    <h1>Login</h1>
                    <div className="header-main">
                        <div className="main-icon">
                            <span className="fa fa-eercast"></span>
                        </div>
                        <div className="header-left-bottom">
                            <form action="#" method="post" onSubmit={submitForm}>
                                <div className="err-msg" style={{ display: this.props.errorValidation['username'] ? "block" : "none" }}>{this.props.errorValidation['username'] ? this.props.errorValidation['username'] : ''}</div>
                                <div className="icon1">
                                    <span className="fa fa-user"></span>
                                    <input type="text" name="username" placeholder="Username" onChange={hideError} autoFocus={true} />
                                </div>
                                <div className="err-msg" style={{ display: this.props.errorValidation['password'] ? "block" : "none" }}>{this.props.errorValidation['password'] ? this.props.errorValidation['password'] : ""}</div>
                                <div className="icon1">
                                    <span className="fa fa-lock"></span>
                                    <input type="password" name="password" placeholder="Password" onChange={hideError} />
                                </div>
                                <div className="login-check">
                                    <label className="checkbox" ><input onClick={this.checkboxHandler} type="checkbox" name="remember" /><i > <span style={checkboxStyle}></span></i> Keep me logged in</label>
                                </div>
                                <div className="bottom">
                                    <button type="submit" className="btn" >Login</button>
                                </div>
                                <div className="links">
                                    <p><Link to="/reset-password">Forgot Password?</Link></p>
                                    <p className="right"><Link to="/register">New User? Register</Link></p>
                                    <div className="clear"></div>
                                </div>
                            </form>
                        </div>
                        <div className="social">
                            <ul>
                                <li>or login using : </li>
                                <li>
                                    <FacebookLogin
                                        appId="505927166703208"
                                        callback={this.props.facebook}
                                        cssClass="facebook"
                                        fields="name,id,email,picture"
                                        // buttonStyle={{ background: "#3b5998", ...styles }}
                                        textButton=''
                                        icon={<span className="fa fa-facebook"></span>}

                                    />
                                </li>
                                <li>

                                    <GoogleLogin
                                        clientId='88908238165-1dbfhr8esj6hneb98hb88b5p114jtdt5.apps.googleusercontent.com'
                                        onSuccess={this.props.google}
                                        onFailure={(er) => console.log(er)}
                                        render={(er) =>
                                            <button className="google" onClick={er.onClick}><span className="fa fa-google-plus"></span></button>
                                        }

                                    // callBack={(res) => console.log(res)}

                                    ></GoogleLogin>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;
