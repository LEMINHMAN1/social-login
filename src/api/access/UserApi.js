import ajax from 'superagent';
import { Observable } from 'rxjs/Observable'
import * as urlConstants from './../../constants/urlConstants';

class UserApi{

  static checkLogin() {
    return Observable.ajax.get(urlConstants.GET_CURRENT_USER_INFO);
  }
}
export default UserApi;