

re('\"is_collected\":false@\"is_subscribe\":\\d+@\"trial_count\":\\d+@\"is_user_free_try\":false','\"is_collected\":true@\"is_subscribe\":1@\"trial_count\":500@\"is_user_free_try\":true')




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
