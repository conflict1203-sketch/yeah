// getcode()
re('\"sysScheduleId\":\"(.*?)\"','"sysScheduleId":"598227973440536576"')

// "sysScheduleId":"557914079650824192"
function re() {
    var body = $response.body;
    
    // console.log('before: ' + body)
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
    // console.log('after: ' + body)

    $done(body);
}