

// 自定义值替换函数 - 替换 gd, sm, cs 等字段值
function customizeValue() {
    var body = $request.body;
    if (body) {
        // 将 "gd":xxx 替换成 "gd":98888
        body = body.replace(/"gd"\s*:\s*\d+/g, '"gd":98888');
        
        // 将 "sm":xx 替换成 "sm":30
        body = body.replace(/"sm"\s*:\s*\d+/g, '"sm":30');
        
        // 将 "cs":xx 改成 "cs":666
        body = body.replace(/"cs"\s*:\s*\d+/g, '"cs":666');
    }
    $done(body);
}

// 执行自定义值替换
customizeValue();
