/*************************************
 * Xnip MITM 诊断脚本
 * 
 * 用途: 确认 Xnip 是否调用 buy.itunes.apple.com/verifyReceipt
 *       以及查看请求中的 bundle_id 和 receipt 内容
 * 
 * 使用方法: 先导入此脚本，打开 Xnip 点击"订阅"或"恢复购买"，
 *           然后在 Quantumult X 的 HTTP 请求日志中查看输出
 * 
 * [rewrite_local]
 * ^https?:\/\/(buy|sandbox)\.itunes\.apple\.com\/verifyReceipt$ url script-response-body xnip-diag.js
 * 
 * [mitm]
 * hostname = buy.itunes.apple.com, sandbox.itunes.apple.com
 *************************************/

(function () {
    let body = $response.body;
    let url  = $request.url;
    let headers = $request.headers;

    let data = null;
    try { data = JSON.parse(body); } catch(e) {}

    let bundleId = "UNKNOWN";
    if (data && data.receipt) {
        bundleId = data.receipt["bundle_id"] || data.receipt["Bundle_Id"] || "NOT_FOUND";
    }

    console.log("===== Xnip 诊断 =====");
    console.log("URL: " + url);
    console.log("Bundle ID: " + bundleId);
    console.log("Response Status: " + (data ? data.status : "PARSE_FAILED"));

    if (data && data.receipt) {
        let inApp = data.receipt["in_app"] || [];
        console.log("in_app count: " + inApp.length);
        inApp.forEach(function(item, i) {
            console.log("  [" + i + "] product_id=" + item.product_id
                + " transaction_id=" + item.transaction_id
                + " expires=" + (item.expires_date || "N/A"));
        });
    }

    if (data && data["latest_receipt_info"]) {
        let lri = data["latest_receipt_info"];
        console.log("latest_receipt_info count: " + lri.length);
        lri.forEach(function(item, i) {
            console.log("  [" + i + "] product_id=" + item.product_id
                + " expires=" + (item.expires_date || "N/A"));
        });
    }

    console.log("===== 诊断结束 =====");

    // 原样返回，不修改任何内容
    $done({});
})();
