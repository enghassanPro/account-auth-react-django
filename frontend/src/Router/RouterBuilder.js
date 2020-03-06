import React, { Component, Suspense } from 'react';
import Router from './Router';

import {
    Index, LoginBuilder, RegisterBuilder,
    ResetPasswordBuilder, ResetPasswordSendBuilder,
    Error404, Activate
} from './pages';

import Loading from '../Base/loading';

class RouterBuilder extends Component {
    state = {
        routes: [
            {
                path: "/",
                exact: true,
                component: Index,
            },
            {
                path: "/login",
                exact: true,
                component: LoginBuilder,
            },
            {
                path: "/register",
                exact: true,
                component: RegisterBuilder,
            },
            {
                path: "/reset-password",
                exact: true,
                component: ResetPasswordSendBuilder,
            },
            {
                path: "/reset-password/:token",
                exact: true,
                component: ResetPasswordBuilder,
            },
            {
                path: "/activate/:token",
                exact: true,
                component: Activate,
            },
            {
                component: Error404,
            }
        ]
    }
    render() {
        return (
            <Suspense fallback={<Loading />}>
                <Router routes={this.state.routes} />
            </Suspense>
        )
    }
}

export default RouterBuilder;