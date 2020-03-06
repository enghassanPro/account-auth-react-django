import React, { Component } from 'react';

export default class GoogleLogin extends Component {
    state = {
        data: {}

    }
    componentDidMount() {
        this.googleSDK(this.props.clientId, this.props.cookiepolicy);


    }

    // initialize Google Api
    googleSDK = (clientId, cookiepolicy) => {
        window['googleSDKLoaded'] = () => {
            window['gapi'].load('auth2', () => {
                this.auth2 = window['gapi'].auth2.init({
                    client_id: clientId,
                    cookiepolicy: cookiepolicy,
                    scope: 'profile email'
                });

                // this.auth2.isSignedIn.listen(res => {
                //     if (res)
                //         this.getUserProfile()

                // })
            });
        }

        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'google-jssdk'));

    }

    // check if User already Sign In
    checkIsSignIn = () => {

        // check if a user already Sign In return boolean
        if (this.auth2.isSignedIn.get())
            return true
        return false
    }

    signInHandler = () => {

        // check if user is sign in or Not
        // if not sign in then redirect to google sign in ortherwise return current profile user
        if (!this.checkIsSignIn())
            this.auth2.signIn()
        if (this.checkIsSignIn())
            this.getUserProfile()

    }

    signOutHandler = () => {
        // check if user Already sign in to sign out or Not
        if (this.checkIsSignIn())
            this.auth2.signOut()

        // return true if both case is Done
        return true

    }

    getUserProfile = () => {

        // get current user profile and store it into state
        let user = this.auth2.currentUser.get()
        let profile = user.getBasicProfile()
        this.setState({
            data: {
                "token": user.getAuthResponse().id_token,
                "ID": profile.getId(),
                "Name": profile.getName(),
                "Image URL": profile.getImageUrl(),
                "Email": profile.getEmail(),
                "user_data": user,
                "user_basic_profile": profile
            }
        })

        return true
    }


    render() {
        const { callBack } = this.props
        callBack(this.state.data)
        return (
            <div className={this.props.className} style={this.props.style} onClick={this.signInHandler}>
                {this.props.icon}

            </div>
        )
    }
}