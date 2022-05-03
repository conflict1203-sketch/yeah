
re('\"is_vip\":false@\"v_state_value\":\\d+@\"begin_time\":\\d+@\"end_time\":\\d+@\"expire_time\":\\d+@\"rest_of_day\":\\d+@\"over_max_privilege\":false@\"format_begin_time\":\"2018-10-28 00:00:00\"@\"format_end_time\":\"2022-01-02 23:59:59\"@\"is_expired\":true','\"is_vip\":true@\"v_state_value\":1@\"begin_time\":1651583320@\"end_time\":1966943320@\"expire_time\":1966943320@\"rest_of_day\":3650@\"over_max_privilege\":true@\"format_begin_time\":\"2022-05-03 14:08:40\"@\"format_end_time\":\"2032-04-30 14:08:40\"@\"is_expired\":false')



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