
re('\"c\":\\d+@\"is_buy\":\\d+@\"is_buy\":\\d+@\"is_user_free_try\":false@\"is_subscribe\":\\d+@\"is_collected\":false@\"trial_count\":\\d+@\"trial_read_count\":\\d+@\"trial_max_read_count\":\\d+@\"trial_article_ids\":\[91808,91772,91959,94674,92685\]','\"c\":0@\"is_buy\":1@\"trial_count\":500@\"is_user_free_try\":true@\"is_subscribe\":1@\"is_collected\":true@\"trial_count\":500@\"trial_read_count\":0@\"trial_max_read_count\":500@\"trial_article_ids\":\[91808,91772,91959,94674,91900\]')

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