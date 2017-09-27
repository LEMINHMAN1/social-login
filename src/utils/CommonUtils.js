import ajax from 'superagent';
import * as urlConstants from './../constants/urlConstants';
import async from 'async';
import { Observable } from 'rxjs/Observable'
import lodash from 'lodash';
import moment from 'moment';

class CommonUtils{
  
  // Show Print Page
  static print(content, title) {
    let mywindow = window.open('', 'PRINT');

    if(!content || !mywindow) return;

    if(title) content = '<head><title>'+title+'</title>'+ content;
    mywindow.document.write(content);
    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/

    mywindow.print();
    mywindow.close();
    return true;
  }

  static arrayRemoveByValue(array, value){
      var index = array.indexOf(value);
      if(index!=-1)array.splice(index, 1);
  }

  static numberHandler(number){
      let result = number;

      let specialChar = [',','+','-','*','/'];
      let regex = /^\d+(\.\d{1,2})?$/i;

      let countDot = number.split('.').length-1;
      if(number.match(regex) == null && countDot>=2 && number.substr(number.length - 1)=='.'){
        result = result.slice(0, -1)
      }else{
        for(let i = 0 ; i<specialChar.length;i++){
            if(number.substr(number.length - 1)==specialChar[i]){
                result = result.slice(0, -1)
            }
        }
      }
      return result;
  }

  static formatDate(date){
    return moment(date).format('MM/DD/YYYY');
  }

  static formatMoment(momentParam){
    return momentParam.format('MM/DD/YYYY');
  }

  static retry(apiCall, isExpected){
    async.retry(
                {times: 20, interval: 5000},
                function(callback){
                    apiCall();
                    console.log('retry...');
                    if(!isExpected)return callback(new Error("retry..."));
                },
                function(err, result){
                    console.log("Completed retry'ing");
            });
  }

  static sort(data, column, isAsc) {
      [].sort.call(data, (a, b) => {
          let result = a[column] - b[column];
          if(lodash.isNull(a[column])){
              return 1;
          }else if(lodash.isNull(b[column])){
              return -1;
          }else if(a[column] == b[column]){
              return 0;
          }else if(isNaN(result)) {
              return (isAsc) ?
                  a[column].toLowerCase().localeCompare(b[column].toLowerCase())
                  :
                  b[column].toLowerCase().localeCompare(a[column].toLowerCase())
          }else{
              return (isAsc) ? result : -result;
          }
      });
      return data
  }

}

export default CommonUtils;