
re('\"is_user_free_try\":false@\"trial_read_count\":\\d+@\"trial_max_read_count\":\\d+@\"trial_count\":\\d+@\"is_subscribe\":\\d+@\"c\":\\d+@\"is_buy\":\\d+@\"is_vip\":false@\"begin_time\":\\d+@\"end_time\":\\d+@\"rest_of_day\":\\d+@\"expire_time\":\\d+@\"vip_expire\":true@\"v_state_value\":\\d+@\"vip_begin_time\":\\d+@\"vip_end_time\":\\d+@\"expire_time\":\\d+@\"rest_of_day\":\\d+@\"free_maximum\":\\d+@\"free_consume_num\":\\d+@\"vip_valid\":false@\"format_begin_time\":\"2018-10-28 00:00:00\"@\"format_end_time\":\"2022-01-02 23:59:59\"@\"is_expired\":true@\"display_vip_privilege\":false@\"is_sub\":false@\"vip_overdue_time\":0','\"is_user_free_try\":true@\"trial_read_count\":0@\"trial_max_read_count\":500@\"trial_count\":500@\"is_subscribe\":1@\"c\":0@\"is_buy\":1@\"is_vip\":true@\"begin_time\":1651583320@\"end_time\":1966943320@\"rest_of_day\":3650@\"expire_time\":1966943320@\"vip_expire\":false@\"v_state_value\":1@\"vip_begin_time\":1651583320@\"vip_end_time\":1966943320@\"expire_time\":1966943320@\"rest_of_day\":3650@\"free_maximum\":10000@\"free_consume_num\":5@\"vip_valid\":true@\"format_begin_time\":\"2022-05-03 14:08:40\"@\"format_end_time\":\"2032-04-30 14:08:40\"@\"is_expired\":false@\"display_vip_privilege\":true@\"is_sub\":true@\"vip_overdue_time\":1966943320')

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
