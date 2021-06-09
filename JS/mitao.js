/*
author https://github.com/fw-carl
秘桃 app破解无限金币 需要登录
loon 配置
http-response ^http?:\/\/120.78.206.12\/user\/payPost script-path=https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/JS/mitao.js, requires-body=true, timeout=10, tag=秘桃
hostname = 120.78.206.12

*/

var body = $response.body.replace(/"gold":\d+/, '"gold":9999999').replace(/"code":"\d+"/, '"code":"0"')
$done({ body });
