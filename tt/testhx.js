// getcode()
// re('\"sysScheduleId\":\"(.*?)\"','"sysScheduleId":"542336221569994752"')

// // "sysScheduleId":"557914079650824192"
// function re() {
//     var body = $response.body;
    
//     console.log('before: ' + body)
//     if (arguments[0].includes("@")) {
//         var regs = arguments[0].split("@");
//         var strs = arguments[1].split("@");
//         for (i = 0;i < regs.length;i++) {
//             var reg = new RegExp(regs[i],"g");
//             body = body.replace(reg, strs[i]);
//         }
//     }
//     else {
//         var reg = new RegExp(arguments[0],"g");
//         body = body.replace(reg, arguments[1]);
//     }
//     console.log('after: ' + body)

//     $done(body);
// }


const url = `https://sspai.com/api/v1/combo/recommend/page/get?limit=2&offset=0&t=1684052583584`;
const method = `GET`;
const headers = {
'Connection' : `keep-alive`
};
const body = `{}`;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
}, reason => {
    console.log(reason.error);
});
$done($response.body);
