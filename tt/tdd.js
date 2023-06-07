
// re('false@\"c\":\\D+.@\"status\":1','true@\"c\":0@\"status\":0')

// re('\"status\":\\D+.','\"status\":0')

re('\"is_free_try\":false@\"is_read\":false@\"is_subscribe\":0@\"user_type\":\"B\"','\"is_free_try\":true@\"is_read\":true@\"is_subscribe\":1@\"user_type\":\"\"')



function re() {
    var body = $response.body;
    console.log("hello world")
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
