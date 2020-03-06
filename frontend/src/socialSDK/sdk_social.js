import React, { Component } from 'react';

class App extends Component {

    // componentDidMount() {
    //     // this.googleSDK();
    //     this.facebookSDK();
    //     console.log('sfsfd');
    // }

    // prepareLoginButton = () => {

    //     console.log(this.refs.googleLoginBtn);

    //     this.auth2.attachClickHandler(this.refs.googleLoginBtn, {},
    //         (googleUser) => {

    //             let profile = googleUser.getBasicProfile();
    //             console.log('Token || ' + googleUser.getAuthResponse().id_token);
    //             console.log('ID: ' + profile.getId());
    //             console.log('Name: ' + profile.getName());
    //             console.log('Image URL: ' + profile.getImageUrl());
    //             console.log('Email: ' + profile.getEmail());
    //             //YOUR CODE HERE


    //         }, (error) => {
    //             alert(JSON.stringify(error, undefined, 2));
    //         });

    // }

    // facebookSDK = () => {
    //     window.fbAsyncInit = function () {
    //         FB.init({
    //             appId: '505927166703208',
    //             autoLogAppEvents: true,
    //             xfbml: true,
    //             version: 'v6.0'
    //         });
    //     };
    //     (function (d, s, id) {
    //         var js, fjs = d.getElementsByTagName(s)[0];
    //         if (d.getElementById(id)) return;
    //         js = d.createElement(s); js.id = id;
    //         js.src = "//connect.facebook.net/en_US/sdk.js";
    //         fjs.parentNode.insertBefore(js, fjs);
    //     }(document, 'script', 'facebook-jssdk'));
    // }

    // googleSDK = () => {

    //     window['googleSDKLoaded'] = () => {
    //         window['gapi'].load('auth2', () => {
    //             this.auth2 = window['gapi'].auth2.init({
    //                 client_id: '764194037935-hkai71dhmgitqvsmv7alnj7ivcab3fvt.apps.googleusercontent.com',
    //                 cookiepolicy: 'single_host_origin',
    //                 scope: 'profile email'
    //             });
    //             this.prepareLoginButton();
    //         });
    //     }

    //     (function (d, s, id) {
    //         var js, fjs = d.getElementsByTagName(s)[0];
    //         if (d.getElementById(id)) { return; }
    //         js = d.createElement(s); js.id = id;
    //         js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
    //         fjs.parentNode.insertBefore(js, fjs);
    //     }(document, 'script', 'google-jssdk'));

    // }

    loadFbLoginApi = () => {

        window.fbAsyncInit = function () {
            FB.init({
                appId: '505927166703208',
                cookie: true,  // enable cookies to allow the server to access
                // the session
                xfbml: true,  // parse social plugins on this page
                version: 'v3.2' // use version 2.1
            });
        };

        console.log("Loading fb api");
        // Load the SDK asynchronously
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }

    componentDidMount() {
        this.loadFbLoginApi();
    }

    testAPI = () => {
        console.log('Welcome!  Fetching your information.... ');
        FB.api('/me', function (response) {
            console.log('Successful login for: ' + response.name);
            document.getElementById('status').innerHTML =
                'Thanks for logging in, ' + response.name + '!';
        });
    }

    statusChangeCallback = (response) => {
        console.log('statusChangeCallback');
        console.log(response);
        if (response.status === 'connected') {
            this.testAPI();
        } else if (response.status === 'not_authorized') {
            console.log("Please log into this app.");
        } else {
            console.log("Please log into this facebook.");
        }
    }

    checkLoginState = () => {
        FB.getLoginStatus(function (response) {
            this.statusChangeCallback(response);
        }.bind(this));
    }

    handleFBLogin = () => {
        FB.login(this.checkLoginState());
    }

    render() {

        return (

            <button className="loginBtn loginBtn--google" onClick={this.handleFBLogin}>
                Login with Google
            </button>

        );
    }
}

export default App