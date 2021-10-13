import React, {useContext} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import { Context } from '../index';
import {privateRoutes, publicRoutes} from "../routes";
import {useAuthState} from "react-firebase-hooks/auth"

const AppRouter = () => {
    const {auth} = useContext(Context);
    const user = useAuthState(auth);

    return user ?
        (
            <Switch>
                {privateRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact={true}/>
                )}
                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact={true}/>
                )}
                <Redirect to="/"/>
            </Switch>
        )
        :
        (
            <Switch>
                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact={true}/>
                )}
                <Redirect to="/"/>
            </Switch>
        )
};

export default AppRouter;