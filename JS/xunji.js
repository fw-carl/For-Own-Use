 /*
 author https://github.com/fw-carl
 训记app破解vip

 loon 配置
 http-response ^https?:\/\/xunji\.implements\.io\/whole_user_info script-path=https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/JS/xunji.js, requires-body=true, timeout=10, tag=训记
 hostname = xunji.implements.io
 */

var body = $response.body.replace(/"vipDay":\d/, '"vipDay":10000')
$done({ body });
