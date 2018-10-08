const fs = require('fs')
const path = require('path')
const getContentType = require('./server-get-content-type')

function getGMTdate(){
  let date = new Date()
  let mileSecondes = date.getTime()
  let gmtDate

  // mileSecondes = mileSecondes + 1 * 1000 * 5
  gmtDate = (new Date(mileSecondes)).toGMTString()

  return gmtDate
}

function cacheControl(res){
  // res.set('Cache-Control', 'max-age=600') //http 1.1 all response request html
  // res.set('Pragma', 'no-cache') //http1.0  all response request html
  // res.set('Expires', getGMTdate()) //http1.0  all response request html

  res.set('Last-Modified', getGMTdate()) //http1.1 response
  res.set('ETag', '1234567890') //http1.1 response
}

function getImageFile (req, res) {
  let filename = path.join(__dirname, ('..' + req.path))
  let fileType = (req.path).match(/.+\.(.+)/)
  let file = fs.readFileSync(filename)
  let contentType = getContentType(fileType[1])

  res.set('Content-Type', contentType)
  res.send(file)
  res.end()
}

function getHtmlFile (req, res) {
  let htmlFilePath = path.join(__dirname, '../index.html')
  let html = fs.readFileSync(htmlFilePath)
  let contentType = getContentType('html')

  res.set('Content-Type', contentType)
  res.send(html)
  res.end()
}

function getScriptFile (req, res) {
  let scriptFilePath = path.join(__dirname, '..' + req.originalUrl)
  let script = fs.readFileSync(scriptFilePath)
  let contentType = getContentType('js')

  res.set('Content-Type', contentType)
  res.send(script)
  res.end()
}

function getCssFile (req, res) {
  console.info('====get css file')
  let contentType = getContentType('css')
}

function routerAssets (req, res, logger) {
  console.info('[http get]', req.baseUrl, req.originalUrl)
  logger.info('[http get]', req.baseUrl, req.originalUrl)

  cacheControl(res)
  
  if (req.originalUrl.indexOf('assets/images') >= 0) {
    getImageFile(req, res)
  } else if (req.originalUrl.indexOf('.js') >= 0) {
    getScriptFile(req, res)
  } else if (req.originalUrl.indexOf('.css') >= 0) {
    getCssFile(req, res)
  } else if (req.originalUrl.indexOf('.html') >= 0 || req.originalUrl.indexOf('.htm') >= 0) {
    getHtmlFile(req, res)
  } else {
    getHtmlFile(req, res)
  }

  // if (next && typeof next === 'function') {
  //   next()
  // }
}

module.exports = routerAssets
