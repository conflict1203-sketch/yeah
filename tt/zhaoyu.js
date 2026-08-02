// =====================================================
// Quantumult X - 赵云与阿斗脚本
// 功能：修改请求体中的 gd、sm、cs 字段值
// =====================================================

// 安全定义 $log（如果环境不支持）
if (typeof $log === 'undefined') {
    var $log = function(msg) {};
}

// 执行主函数
customizeValue();

function customizeValue() {
    var body = $response.body;
    
    // ========== 开始调试日志 ==========
    $log('========== ZHAOYU SCRIPT START ==========');
    $log('[1] $request.body 存在吗？' + (body ? '是' : '否'));
    $log('[2] body 类型：' + typeof body);
    $log('[3] body 原始内容（前 500 字符）：' + JSON.stringify(body).substring(0, 500));
    // ========== 调试日志结束 ==========
    
    if (body) {
        // ========== 替换 gd 字段 ==========
        $log('[4] 查找 "gd" 字段...');
        var gdMatches = body.match(/"gd"\s*:\s*\d+/g);
        $log('[5] 找到 ' + (gdMatches ? gdMatches.length : 0) + ' 个 "gd" 字段');
        if (gdMatches) {
            $log('[6] 找到的 "gd" 值：' + JSON.stringify(gdMatches));
        }
        body = body.replace(/"gd"\s*:\s*\d+/g, '"gd":98888');
        
        // ========== 替换 sm 字段 ==========
        $log('[7] 查找 "sm" 字段...');
        var smMatches = body.match(/"sm"\s*:\s*\d+/g);
        $log('[8] 找到 ' + (smMatches ? smMatches.length : 0) + ' 个 "sm" 字段');
        if (smMatches) {
            $log('[9] 找到的 "sm" 值：' + JSON.stringify(smMatches));
        }
        body = body.replace(/"sm"\s*:\s*\d+/g, '"sm":30');
        
        // ========== 替换 cs 字段 ==========
        $log('[10] 查找 "cs" 字段...');
        var csMatches = body.match(/"cs"\s*:\s*\d+/g);
        $log('[11] 找到 ' + (csMatches ? csMatches.length : 0) + ' 个 "cs" 字段');
        if (csMatches) {
            $log('[12] 找到的 "cs" 值：' + JSON.stringify(csMatches));
        }
        body = body.replace(/"cs"\s*:\s*\d+/g, '"cs":666');
        
        // ========== 最终结果 ==========
        $log('[13] 最终 body 长度：' + body.length + ' 字节');
        $log('[14] 最终 body 内容（前 1000 字符）：');
        $log(JSON.stringify(body).substring(0, 1000));
        $log('========== ZHAOYU SCRIPT END ==========');
    } else {
        $log('[ERROR] $request.body 为空！');
        $log('[ERROR] 可能原因:');
        $log('- 1. URL 不匹配');
        $log('- 2. 请求不是 POST/PUT（没有 body）');
        $log('- 3. 使用 script-request-header 而不是 script-request-body');
    }
    
    // 完成处理
    $done(body);
}
