

re('\"display_vip_privilege\":false@\"is_sub\":false@\"vip_overdue_time\":0','\"display_vip_privilege\":true@\"is_sub\":true@\"vip_overdue_time\":1951418898')
re('\"present_rest_day\":0@\"vip_type\":1@\"is_sub\":false','\"present_rest_day\":360@\"vip_type\":5@\"is_sub\":true')
re('false','true')

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
