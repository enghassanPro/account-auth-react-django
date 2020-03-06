import React, { Component } from 'react';
import '../../../static/css/style_404.css';

class Error404 extends Component {

    componentDidMount() {
        document.title = "Page Not Found"
    }

    goBackHandler = () => {

        this.props.history.goBack()

    }


    render() {
        return (
            <div class="main" >
                <div class="text">
                    <div class="left">
                        <h2>404</h2>
                    </div>
                    <div class="right">
                        <h3>SORRY!</h3>
                        <h4>The Page You Are Looking For Was Not Found</h4>
                        <span onClick={this.goBackHandler}>Go Back</span>
                    </div>
                    <div class="clear"></div>
                </div>
            </div>
        )
    }
}

export default Error404;