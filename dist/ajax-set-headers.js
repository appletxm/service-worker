export function doSetForGet(options, xhrObj) {
  //.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
  var headers = options.headers;

  for (var key in headers) {
    var newKey = void 0;
    newKey = key === 'contentType' ? 'Content-Type' : key;
    xhrObj.setRequestHeader(newKey, headers[key]);
  }

  if (options.method === 'POST') {
    xhrObj.setRequestHeader('Content-Length', options.paramsStr.length);
  }
}

export function doSetForPost(options, xhrObj) {
  //.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
  var headers = options.headers;

  for (var key in headers) {
    var newKey = void 0;
    newKey = key === 'contentType' ? 'Content-Type' : key;
    xhrObj.setRequestHeader(newKey, headers[key]);
  }
}