

// re('false@\"c\":\\D+.@\"status\":1','true@\"c\":0@\"status\":0')

// re('\"status\":\\D+.','\"status\":0')

re('\"trial_read_count\":\\d+@\"trial_max_read_count\":\\d+@\"trial_count\":\\d+@\"is_collected\":false@\"is_subscribe\":\\d+','\"trial_read_count\":0@\"trial_max_read_count\":500@\"trial_count\":500@\"is_collected\":true@\"is_subscribe\":1')


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
