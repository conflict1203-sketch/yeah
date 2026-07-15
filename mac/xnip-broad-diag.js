/*************************************
 * Xnip 广撒网诊断脚本
 * 
 * 拦截所有 Apple IAP 相关域名，确认 Xnip 到底请求了哪些接口
 * 如果连这个脚本都没触发，说明 Xnip 完全走本地验证
 * 
 * [rewrite_local]
 * # 广撒网 - 拦截所有 Apple IAP 相关请求
 * ^https?:\/\/(buy|sandbox)\.itunes\.apple\.com\/ url script-request-header xnip-broad-diag.js
 * ^https?:\/\/api\.revenuecat\.com\/ url script-request-header xnip-broad-diag.js
 * ^https?:\/\/api\.adapty\.io\/ url script-request-header xnip-broad-diag.js
 * ^https?:\/\/.*\.apphud\.com\/ url script-request-header xnip-broad-diag.js
 * ^https?:\/\/api\.qonversion\.io\/ url script-request-header xnip-broad-diag.js
 * 
 * [mitm]
 * hostname = buy.itunes.apple.com, sandbox.itunes.apple.com, api.revenuecat.com, api.adapty.io, *.apphud.com, api.qonversion.io
 *************************************/

(function () {
    let url = $request.url;
    let host = $request.headers["Host"] || $request.headers["host"] || "unknown";
    let ua = $request.headers["User-Agent"] || $request.headers["user-agent"] || "unknown";

    console.log("[Xnip-Broad] 命中! Host=" + host);
    console.log("[Xnip-Broad] URL: " + url);
    console.log("[Xnip-Broad] UA: " + ua);

    // 检查请求体中是否有 bundle_id
    if ($request.body) {
        let body = $request.body;
        try {
            let d = JSON.parse(body);
            let bid = d.receipt && (d.receipt.bundle_id || d.receipt.Bundle_Id);
            if (bid) console.log("[Xnip-Broad] Bundle ID in body: " + bid);
        } catch(e) {}
    }

    $notify("Xnip 广撒网", "命中: " + host, "URL: " + url);

    $done({});
})();
