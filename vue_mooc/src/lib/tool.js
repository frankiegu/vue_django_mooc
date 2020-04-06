import moment from 'moment'

export const urlEncode = (param, key, encode) => {
  if (param == null) return '';
  var paramStr = '';
  var t = typeof (param);
  if (t == 'string' || t == 'number' || t == 'boolean') {
    paramStr += '&' + key + '=' + ((encode == null || encode) ? encodeURIComponent(param) : param);
  } else {
    for (var i in param) {
      var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);
      paramStr += urlEncode(param[i], k, encode);
    }
  }
  return paramStr;
}

export const saveTokenTime = (days) => {
  localStorage.removeItem('token_end_time')
  localStorage.setItem('token_end_time', moment().add(days, 'days'))
}

export const isValidToken = () => {
  let endTime = localStorage.getItem('token_end_time')
  if (endTime) {
    return moment().valueOf() < moment(endTime).valueOf()
  }

  return false
}

