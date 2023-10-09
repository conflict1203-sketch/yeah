let obj = JSON.parse($response.body);
obj = {
    "message" : "",
    "code" : 0
};
$done({
    'body': JSON.stringify(obj)
})