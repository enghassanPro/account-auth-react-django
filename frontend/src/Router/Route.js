import React from 'react';
import { Route } from 'react-router-dom';


export default (props) =>
    <Route
        path={props.path}
        exact={props.exact}
        render={props.render}
        component={props.component}
    />