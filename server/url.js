const { required } = require("nconf");

var url = require('url');

var urlstr = "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=Popcorn";

var curUrl = url.parse(urlstr);
console.dir(curUrl);
console.log("query -> " + curUrl.query);
var curStr = url.format(curUrl);
console.log("url -> " + curStr);

var querystr = require('querystring');
var param = querystr.parse(curUrl.query);
console.log("검색어: " + param.query);