


re('false@\"vip_type\":1@"vip_overdue_time\":0@\"status\":\"normal\"@\"errCode\":52000@\"over_limit\":true@\"current\":\\d+@\"residence\":\\d+@\"max\":\\d+','true@\"vip_type\":5@\"vip_overdue_time\":1951418898000@\"status\":\"vip\"@\"errCode\":0@"over_limit\":false@\"current\":300000@\"residence\":700000@\"max\":1000000')

function re() {
    var body = $response.body;
    if (arguments[0].includes("@")) {
        var regs = arguments[0].split("@");
        var strs = arguments[1].split("@");
        for (i = 0;i < regs.length;i++) {
            var reg = new RegExp(regs[i],"g");
            body = body.replace(reg, strs[i]);
        }
    }
    else {
        var reg = new RegExp(arguments[0],"g");
        body = body.replace(reg, arguments[1]);
    }
    $done(body);
}
