import * as types from './../../actions/types';
import { loginSuccess, checkLoginSuccess, checkLoginFail } from './../../actions/access/LoginAction'
import userApi from './../../api/access/UserApi'
import 'rxjs'
import { Observable } from 'rxjs/Observable'


export const checkLoginEpic = action$ =>
    action$.ofType(types.CHECK_LOGIN)
    .mergeMap(action =>
        userApi.checkLogin(action.url)
        .map(res => checkLoginSuccess(action.url, res))
        .catch(error => Observable.of({
              type: types.CHECK_LOGIN_FAIL,
          }))
      )

export const checkLoginEpicFail = action$ =>
  action$.ofType(types.CHECK_LOGIN_FAIL)
    .map(action => checkLoginFail()
)

export const loginEpic = action$ =>
  action$.ofType(types.LOGIN)
    .mergeMap(action =>
      userApi.login(action.username, action.password)
        .map(response => loginSuccess(action.username, response))
        .catch(error => {throw new Error(error.status)})
      )
