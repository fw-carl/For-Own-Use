/*
python AI 

loon
http-response http:\/\/ws\.60he\.com script-path=https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/JS/pythonAI.js, img-url=https://raw.githubusercontent.com/fw-carl/For-Own-Use/master/PIC/cz/pythonAI.png, requires-body=true, timeout=10, tag=pythonAI
host
ws.60he.com
*/


var body = $response.body.replace(/"vip":\d+/g,'"vip":99');
$done({body});
