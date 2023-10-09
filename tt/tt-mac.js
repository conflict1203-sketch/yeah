let obj = JSON.parse($response.body);
obj = {
    "message" : "每日回顾是 PRO 限定功能。",
    "code" : -1
};
$done({
    'body': JSON.stringify(obj)
})