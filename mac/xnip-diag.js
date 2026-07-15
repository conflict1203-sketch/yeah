/*************************************
 * Xnip MITM 诊断脚本 (增强版)
 * 
 * 用途: 确认 Xnip 是否调用 Apple IAP 验证接口
 * 
 * [rewrite_local]
 * # 拦截请求头 - 在任何响应返回之前就能看到请求是否命中
 * ^https?:\/\/(buy|sandbox)\.itunes\.apple\.com\/verifyReceipt$ url script-request-header xnip-diag.js
 * # 拦截响应体 - 查看完整返回内容
 * ^https?:\/\/(buy|sandbox)\.itunes\.apple\.com\/verifyReceipt$ url script-response-body xnip-diag.js
 * 
 * [mitm]
 * hostname = buy.itunes.apple.com, sandbox.itunes.apple.com
 * 
 * 使用方法:
 *   1. 导入脚本到 QX
 *   2. 打开 Xnip → 点击"订阅"或"恢复购买"
 *   3. 查看系统通知（$notify 会弹出系统通知）
 *   4. 如果没弹出通知，说明 Xnip 根本没请求这个接口
 *************************************/

(function () {
    // script-request-header 阶段: $response 不存在
    if (typeof $response === 'undefined' || $response === null) {
        let url = $request.url;
        console.log("[Xnip-Diag] 请求头拦截命中!");
        console.log("[Xnip-Diag] URL: " + url);
        
        // 弹出系统通知，确保能看到
        $notify("Xnip 诊断", "请求头阶段命中", "URL: " + url);
        
        $done({});
        return;
    }

    // script-response-body 阶段
    let body = $response.body;
    let url  = $request.url;

    let data = null;
    try { data = JSON.parse(body); } catch(e) {}

    let bundleId = "UNKNOWN";
    if (data && data.receipt) {
        bundleId = data.receipt["bundle_id"] || data.receipt["Bundle_Id"] || "NOT_FOUND";
    }

    let msg = "URL: " + url + "\n";
    msg += "Bundle ID: " + bundleId + "\n";
    msg += "Status: " + (data ? data.status : "PARSE_FAILED") + "\n";

    console.log("===== Xnip 诊断 =====");
    console.log("URL: " + url);
    console.log("Bundle ID: " + bundleId);
    console.log("Response Status: " + (data ? data.status : "PARSE_FAILED"));

    if (data && data.receipt) {
        let inApp = data.receipt["in_app"] || [];
        console.log("in_app count: " + inApp.length);
        msg += "in_app count: " + inApp.length + "\n";
        inApp.forEach(function(item, i) {
            let line = "  [" + i + "] product_id=" + item.product_id
                + " tx=" + item.transaction_id
                + " expires=" + (item.expires_date || "N/A");
            console.log(line);
            msg += item.product_id + "\n";
        });
    }

    if (data && data["latest_receipt_info"]) {
        let lri = data["latest_receipt_info"];
        console.log("latest_receipt_info count: " + lri.length);
        msg += "latest_receipt_info: " + lri.length + "\n";
        lri.forEach(function(item, i) {
            let line = "  [" + i + "] product_id=" + item.product_id
                + " expires=" + (item.expires_date || "N/A");
            console.log(line);
            msg += item.product_id + "\n";
        });
    }

    console.log("===== 诊断结束 =====");

    // 系统通知 - 最醒目
    $notify("Xnip 诊断", "Bundle: " + bundleId, msg);

    // 原样返回，不修改内容
    $done({});
})();
