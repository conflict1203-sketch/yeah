re('\"buttons\":.*?}]','"buttons":[{"title":"免费开始训练","subTitle":"剩余 1 次机会","schema":null,"type":"primeV2","textColor":"#FFFFFFFF","buttonStartColor":"#FF24C789","buttonEndColor":"#FF24C789","icon":null}]')

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
    console.log(body)
    $done(body);
}
