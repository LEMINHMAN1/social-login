import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as types from '../actions/types';
import loginReducer from './access/loginReducer';

const rootReducer = combineReducers({
    loginReducer,
    routing
});

export default rootReducer;