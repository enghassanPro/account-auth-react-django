import React, { Component } from 'react';
import axios from 'axios';
// import { Redirec }

export default class Activate extends Component {

    componentDidMount() {
        axios.post("/auth/verify", { "token": this.props.match.params.token }).then(result => {

            this.props.history.replace("/login")
        }).catch(error => {
            this.props.history.replace("/login")

        })
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}