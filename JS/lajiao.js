/*
辣椒视频 
http://v.sj18.live/?code=6MO26S

loon
http-response ^http:\/\/jk.5apk.cn\/api\/play script-path= https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/JS/lajiao.js, requires-body=true, timeout=10, tag=辣椒视频

host
jk.5apk.cn

*/




var body = $response.body.replace(/"dltime":\d+/g,'"dltime":99999');
$done({body});
