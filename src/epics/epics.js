import { combineEpics } from 'redux-observable';

import {checkLoginEpic, checkLoginEpicFail, loginEpic} from './access/loginEpic';

const rootEpic = combineEpics(
    checkLoginEpic, checkLoginEpicFail, loginEpic
);

export default rootEpic;