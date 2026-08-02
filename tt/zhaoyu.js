
// 执行主函数
customizeValue();

function customizeValue() {
    var body = $request.body;
    
    // 打印请求体信息
    $log('[ZHAOYU] ====== 开始处理请求 ======');
    $log('[ZHAOYU] 原始请求体 body: ' + (body ? '存在' : '不存在'));
    
    if (body) {
        // 将 "gd":xxx 替换成 "gd":98888
        var gdMatches = body.match(/"gd"\s*:\s*\d+/g);
        var gdCount = gdMatches ? gdMatches.length : 0;
        body = body.replace(/"gd"\s*:\s*\d+/g, '"gd":98888');
        if (gdCount > 0) {
            $log('[ZHAOYU] ✅ 已替换 ' + gdCount + ' 个 "gd" 字段 -> 98888');
        } else {
            $log('[ZHAOYU] ℹ️  未找到任何 "gd" 字段');
        }
        
        // 将 "sm":xx 替换成 "sm":30
        var smMatches = body.match(/"sm"\s*:\s*\d+/g);
        var smCount = smMatches ? smMatches.length : 0;
        body = body.replace(/"sm"\s*:\s*\d+/g, '"sm":30');
        if (smCount > 0) {
            $log('[ZHAOYU] ✅ 已替换 ' + smCount + ' 个 "sm" 字段 -> 30');
        } else {
            $log('[ZHAOYU] ℹ️  未找到任何 "sm" 字段');
        }
        
        // 将 "cs":xx 改成 "cs":666
        var csMatches = body.match(/"cs"\s*:\s*\d+/g);
        var csCount = csMatches ? csMatches.length : 0;
        body = body.replace(/"cs"\s*:\s*\d+/g, '"cs":666');
        if (csCount > 0) {
            $log('[ZHAOYU] ✅ 已替换 ' + csCount + ' 个 "cs" 字段 -> 666');
        } else {
            $log('[ZHAOYU] ℹ️  未找到任何 "cs" 字段');
        }
        
        // 打印处理后的部分数据（方便调试，只显示前 300 字符）
        $log('[ZHAOYU] 📝 修改后 preview (' + body.length + ' 字节):');
        $log('[ZHAOYU] ' + JSON.stringify(body).substring(0, 300));
        
        $log('[ZHAOYU] ====== 处理完成 ======\n');
    } else {
        $log('[ZHAOYU] ❌ 错误：未找到请求体 ($request.body 为 null 或 undefined)');
        $log('[ZHAOYU] 可能的原因:');
        $log('[ZHAOYU] 1. 请求类型不是 script-request-body');
        $log('[ZHAOYU] 2. 当前请求没有请求体 (POST/PUT 才有)');
        $log('[ZHAOYU] 3. URL 不匹配\n');
    }
    
    // 完成处理
    $done(body);
}
