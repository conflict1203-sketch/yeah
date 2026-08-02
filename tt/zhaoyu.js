// 赵云与阿斗 - 修改登录信息脚本
// 将 "gd":xxx 替换成 "gd":98888
// 将 "sm":xx 替换成 "sm":30
// 将 "cs":xx 改成 "cs":666

re('"gd"\s*:\s*\d+@"sm"\s*:\s*\d+@"cs"\s*:\s*\d+', '"gd":98888@"sm":30@"cs":666')


function re() {
    var body = $response.body;
    if (arguments[0].includes("@")) {
        var regs = arguments[0].split("@");
        var strs = arguments[1].split("@");
        for (i = 0; i < regs.length; i++) {
            var reg = new RegExp(regs[i], "g");
            body = body.replace(reg, strs[i]);
        }
    }
    else {
        var reg = new RegExp(arguments[0], "g");
        body = body.replace(reg, arguments[1]);
    }
    $done(body);
}
