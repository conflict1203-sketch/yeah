
re('\"vip_expire\":true@\"v_state_value\":\\d+@\"vip_begin_time\":\\d+@\"vip_end_time\":\\d+@\"expire_time\":\\d+@\"rest_of_day\":\\d+@\"free_maximum\":\\d+@\"free_consume_num\":\\d+@\"vip_valid\":false','\"vip_expire\":false@\"v_state_value\":1@\"vip_begin_time\":1651583320@\"vip_end_time\":1966943320@\"expire_time\":1966943320@\"rest_of_day\":3650@\"free_maximum\":10000@\"free_consume_num\":5@\"vip_valid\":true')



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

