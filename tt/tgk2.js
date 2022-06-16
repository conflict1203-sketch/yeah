


re('".*"error"','"code":0,"data":{"list":[{"type":"c","end_time":-1,"status":0},{"type":"d","end_time":1607183999,"status":0},{"type":"q","end_time":-1,"status":0},{"type":"p","end_time":1686882295,"status":1},{"type":"s","end_time":-1,"status":0}],"tag":{"has_first_auto_renewal_right":true,"auto_renewable":0,"experience_pvip":true},"pvip":{"is_paid":true,"current":{"pvip_type":5,"pvip_type_label":"体验卡"},"will":null}},"error"')




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
