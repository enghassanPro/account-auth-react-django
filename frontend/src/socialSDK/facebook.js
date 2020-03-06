
import React, { Component } from 'react';

export default class Login extends Component {


    state = {
        data: {}
    }

    componentDidMount() {
        this.FacebookSDK()
    }

    FacebookSDK = () => {
        window.fbAsyncInit = () => {
            FB.init({
                appId: '505927166703208',
                cookie: true,
                xfbml: true,
                version: 'v3.2'
            });

            FB.AppEvents.logPageView();
            this.checkAuthorized();
        }

        // Load the SDK asynchronously
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = '//connect.facebook.net/en_US/sdk.js';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

    }

    //check Authorized Access
    checkAuthorized = () => {
        FB.Event.subscribe('auth.statusChange', (response) => {
            if (response.authResponse)
                this.checkLoginStatus()
            else
                return false
        })
    }

    getUserProfile = (user) => {

        FB.api('/me', profile => {
            this.setState({
                data: {
                    ...profile,
                    ...user,
                }
            })
        })
        return true
    }

    // checkStatusCallback = data => {
    //     this.getUserProfile(data.authResponse)

    // }
    checkIsSignIn = (data) => {
        if (data.status == 'connected')
            return true
        return false

    }

    checkLoginStatus = () => {
        FB.getLoginStatus((status) => this.checkIsSignIn(status))
    }

    signInHandler = () => {
        if (!this.checkLoginStatus())
            FB.login(() => {
                FB.getLoginStatus(data => this.getUserProfile(data.authResponse))
            })
        else
            this.checkLoginStatus()
    }
    signOutHandler = () => {
        if (this.checkLoginStatus())
            FB.logout()
        return true
    }


    render() {
        const { callBack } = this.props
        callBack(this.state.data)
        return (
            <a href="#" onClick={this.signInHandler}>Login</a>

        );
    }
}

{/**

 constructor(props) {
        super(props);
        this.checkLoginState = this.checkLoginState.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.testAPI = this.testAPI.bind(this);
        this.statusChangeCallback = this.statusChangeCallback.bind(this);
    }

    componentDidMount() {
        window.fbAsyncInit = function () {
            FB.init({
                appId: '505927166703208',
                cookie: true,
                xfbml: true,
                version: 'v2.8'
            });
            FB.AppEvents.logPageView();
            FB.Event.subscribe('auth.statusChange', function (response) {
                if (response.authResponse) {
                    this.checkLoginState();
                } else {
                    console.log('---->User cancelled login or did not fully authorize.');
                }
            }.bind(this));
        }.bind(this);

        // Load the SDK asynchronously
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = '//connect.facebook.net/en_US/sdk.js';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }

    // Here we run a very simple test of the Graph API after login is
    // successful.  See statusChangeCallback() for when this call is made.
    testAPI() {
        console.log('Welcome! Fetching your information.... ');
        FB.api('/me', function (response) {
            console.log('Successful login for: ' + response.name);
            console.log(response)
            document.getElementById('status').innerHTML =
                'Thanks for logging in, ' + response.name + '!';
        });
    }

    // This is called with the results from from FB.getLoginStatus().
    statusChangeCallback(response) {
        if (response.status === 'connected') {
            console.log(response.authResponse)
            // Logged into your app and Facebook.
            this.testAPI();
        } else if (response.status === 'not_authorized') {
            // The person is logged into Facebook, but not your app.
            document.getElementById('status').innerHTML = 'Please log ' +
                'into this app.';
        } else {
            // The person is not logged into Facebook, so we're not sure if
            // they are logged into this app or not.
            document.getElementById('status').innerHTML = 'Please log ' +
                'into Facebook.';
        }
    }

    checkLoginState() {
        FB.getLoginStatus(function (response) {
            this.statusChangeCallback(response);
        }.bind(this));
    }

    handleClick() {
        FB.login(this.checkLoginState());
    }
    LogoutHandler() {
        FB.logout((er) => {
            console.log(er)
        })
    }

*/}