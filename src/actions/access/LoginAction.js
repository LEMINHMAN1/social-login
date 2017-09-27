import * as types from './../types';
import * as pageConstants from './../../constants/pageConstants';
import { browserHistory } from 'react-router';

let defaultState = {
  type: '',
  userInfo:null
};

export const checkLogin = (url) => ({ type: types.CHECK_LOGIN, url});

export function checkLoginSuccess(url, res) {
    if(url.includes(pageConstants.LOGIN)) url = pageConstants.ROOT;
    browserHistory.replace(url);
      return{ type: types.CHECK_LOGIN_SUCCESS, userInfo: res.response};
}
export function checkLoginFail() {
    browserHistory.replace(pageConstants.LOGIN);
    return { type: types.CHECK_LOGIN_SUCCESS};
}

export function getState() {
    return defaultState;
}
