
var _isIE8 = !(document.createTextNode('test').textContent);

export function isIE8() {
  return _isIE8;
}

var _isIE9 = !!(document.documentMode);

export function isIE9() {
  return _isIE9;
}

var _isSafari = (/Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor));

export function isSafari() {
  return _isSafari;
}

var _isChrome = (/Chrome/.test(navigator.userAgent) && /Google/.test(navigator.vendor));

export function isChrome() {
  return _isChrome;
}

export function isMobileBrowser(userAgent) {
  if (!userAgent) {
    userAgent = navigator.userAgent;
  }

  return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent));
}

export function getBrowser() {
  var result = 'other';
  var agent = window.navigator.userAgent.toLowerCase();
  var version = window.navigator.appVersion.toLowerCase();
  if(agent.indexOf("msie") > -1){
    result = 'IE';
  }else if(agent.indexOf("trident/7") > -1){
    result = 'IE11';
  }else if(agent.indexOf("edge") > -1){
    result = 'Edge';
  }else if ((agent.indexOf("chrome") > -1) && (agent.indexOf("android") <= -1)) {
    result = 'Chrome';
  }else if ((agent.indexOf("chrome") > -1) && (agent.indexOf("android") > -1)) {
    result = 'ChromeForAndroid';
  }else if (agent.indexOf("safari") > -1){
    result = 'Safari';
  }else if (agent.indexOf("firefox") > -1){
    result = 'Firefox';
  }
  return result;
}