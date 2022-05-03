

re('\"is_vip\":false@\"begin_time\":\\d+@\"end_time\":\\d+@\"rest_of_day\":\\d+@\"expire_time\":\\d+','\"is_vip\":true@\"begin_time\":1651583320@\"end_time\":1966943320@\"rest_of_day\":3650@\"expire_time\":1966943320')


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

