const accessTime=Date.now();
var socket = new WebSocket('ws://127.0.0.1:5050');
socket.onmessage = msg=>{if(msg.data=='connected')return;
let [eventPath,eventTime]=JSON.parse(msg.data);
if(eventTime>accessTime&&eventPath=='/var/www/html'+location.pathname)
{location.reload();new Notification('Reload '+location.pathname)}};
