import React from 'react';
import { Route, IndexRoute } from 'react-router';
import * as pageConstants from './constants/pageConstants';
import EnsureLoggedInContainer from './containers/EnsureLoggedInContainer';
import Layout from './components/layout/Layout';
import Login from './components/login/Login';
import UserInfo from './components/userinfo/UserInfo';

const reloadPage = (nextState, replace, callback) => {
  window.location = '/';
};

export default (
        <Route component={EnsureLoggedInContainer}>
                <Route path = {pageConstants.ROOT} component={Layout}>
                        <Route path = {pageConstants.LOGIN} component={Login} />
                        <IndexRoute component={UserInfo}/>
                </Route>
        </Route>
);
