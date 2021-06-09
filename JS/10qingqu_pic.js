/*
author https://github.com/fw-carl

作者是个半吊子，脚本有很大问题
看图片只启动 pic
看视频只启动 video*2

loon 配置
http-response http:\/\/www\.10qingqu.com\/api_beta1_2\/api.php script-path=https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/JS/10qingqu_pic.js, requires-body=true, timeout=10, tag=10情趣-pic
http-response http:\/\/www\.10qingqu.com\/api_beta1_2\/api.php script-path=https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/JS/10qingqu_res_video.js, requires-body=true, timeout=10,tag=10情趣-video-res
http-request http:\/\/www\.10qingqu.com\/api_beta1_2\/api.php script-path=https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/JS/10qingqu_req_video.js, requires-body=true, timeout=10,tag=10情趣-video-req
hostname = www.10qingqu.com

*/

var body = $response.body.replace(/"money":"\d+"/, '"money":"0"')
$done({ body });
