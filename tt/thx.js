
re('\"loginDeviceNum\":\"(.*?)\"@\"loginDeviceUUID\":\"(.*?)\"','"loginDeviceNum":"e45ecd5853e80e9904834e74541238bc1f0debca15ed03dc4a3e091563ba590"@"loginDeviceUUID":"489E0981-0337-8C84-21D2-F66BD6B4B0F8"')


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