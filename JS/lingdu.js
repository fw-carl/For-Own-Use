/*
author https://github.com/fw-carl
零度app 写真  视频无法破解


loon配置
http-response ^https?:\/\/appa\.lingdu2019\.cn\/api\/my_home\/check_vip script-path=https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/JS/lingdu.js, requires-body=true, timeout=10, tag=零度
hostname = apa.lingdu2019.cn

*/

var body = $response.body.replace(/"xiezhen_vip":\d/, '"xiezhen_vip":1').replace(/"video_vip":\d/, '"video_vip":1')
$done({ body });
