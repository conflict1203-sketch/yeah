

// 可选：定义安全的日志函数（如果 $log 不可用则定义为空函数）
if (typeof $log === 'undefined') {
    var $log = function(msg) { /* 无日志输出 */ };
}

// 执行主函数
customizeValue();

function customizeValue() {
    var body = $request.body;
    
    // 打印请求体信息（如果支持日志）
    if (typeof $log !== 'undefined' && body) {
        $log('[ZHAOYU] ====== 开始处理请求 ======');
        $log('[ZHAOYU] 原始请求体 body: 存在');
    }
    
    if (body) {
        // 将 "gd":xxx 替换成 "gd":98888
        var gdMatches = body.match(/"gd"\s*:\s*\d+/g);
        var gdCount = gdMatches ? gdMatches.length : 0;
        body = body.replace(/"gd"\s*:\s*\d+/g, '"gd":98888');
        
        // 将 "sm":xx 替换成 "sm":30
        var smMatches = body.match(/"sm"\s*:\s*\d+/g);
        var smCount = smMatches ? smMatches.length : 0;
        body = body.replace(/"sm"\s*:\s*\d+/g, '"sm":30');
        
        // 将 "cs":xx 改成 "cs":666
        var csMatches = body.match(/"cs"\s*:\s*\d+/g);
        var csCount = csMatches ? csMatches.length : 0;
        body = body.replace(/"cs"\s*:\s*\d+/g, '"cs":666');
        
        // 打印处理后的部分数据（方便调试，只显示前 300 字符）
        if (typeof $log !== 'undefined') {
            $log('[ZHAOYU] 📝 修改后 preview (' + body.length + ' 字节):');
            $log('[ZHAOYU] ' + JSON.stringify(body).substring(0, 300));
            
            $log('[ZHAOYU] ====== 处理完成 ======\n');
        }
    } else {
        if (typeof $log !== 'undefined') {
            $log('[ZHAOYU] ❌ 错误：未找到请求体 ($request.body 为 null 或 undefined)');
            $log('[ZHAOYU] 可能的原因:');
            $log('[ZHAOYU] 1. 请求类型不是 script-request-body');
            $log('[ZHAOYU] 2. 当前请求没有请求体 (POST/PUT 才有)');
            $log('[ZHAOYU] 3. URL 不匹配\n');
        }
    }
    
    // 完成处理
    $done(body);
}
