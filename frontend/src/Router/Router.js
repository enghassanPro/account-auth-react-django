import React from 'react';
import { withRouter, Switch } from 'react-router-dom';
import Route from './Route';

export default withRouter((props) =>
    <Switch>
        {
            props.routes.map((route, i) => <Route
                key={"route_" + i}
                path={route.path}
                exact={route.exact}
                render={route.render}
                component={route.component}
            />)
        }
    </Switch>
)