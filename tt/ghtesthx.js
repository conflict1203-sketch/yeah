// getcode()
re('\"imageId\":\"(.*?)\"@\"verifyCode\":\"(.*?)\"','"imageId":"3y8o3qwb6p7s1iwauuipeozk1zvvfynd"@"verifyCode":"3426"')

// "sysScheduleId":"557914079650824192"
function re() {
    var body = $request.body;
    
    console.log('before: ' + body)
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
    console.log('after: ' + body)

    $done(body);
}


// {
//     "hospitalCode" : "HID0101",
//     "sysTimeArrangeId" : "",
//     "sysScheduleId" : "542336221569994752",
//     "verifyCode" : "7906",
//     "type" : "APP",
//     "channelCode" : "PATIENT_IOS",
//     "appCode" : "HXGYAPP",
//     "hospitalAreaCode" : "HID0103",
//     "imageId" : "mtvlrr001qe2d6y48xselirjrlqy4dzq",
//     "cardId" : "262997045965623296",
//     "encrypt" : "RAGLa0fLUMmr85VZpieplIaubNGbuGC1Ws/91Igo72o=",
//     "appointmentType" : "1"
//   }
  