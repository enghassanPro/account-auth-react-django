import React from 'react';

import '../../static/css/loading.css';
export default function Loading() {
    return (
        <div className="loading" style={{ background: "url('../../static/images/loading.jpg') no-repeat center ", backgroundSize: "auto" }}>
            <div className="overlay"></div>
            <div class="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}