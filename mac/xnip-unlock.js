/*************************************
 * Xnip Pro 解锁脚本 (MITM)
 * 
 * 目标 App: Xnip - 截图 & 标注
 * Bundle ID: com.zzd.Xnip
 * 支持产品:
 *   - 1year_xnip_pro (专业版年订阅)
 *   - function_pack_1 (去水印 & 编辑窗口标注)
 *   - function_pack_1_cn (去水印 & 编辑窗口标注 CN)
 *
 * 基于 chxm1023/Rewrite iTunes.js 改写
 * 
 * [rewrite_local]
 * ^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/your-repo/xnip-unlock.js
 * 
 * [mitm]
 * hostname = buy.itunes.apple.com
 *************************************/

(function () {
    const TARGET_BUNDLE = "com.zzd.Xnip";

    // 购买时间 & 到期时间
    const PURCHASE_DATE  = "2025-09-09T09:09:09Z";
    const EXPIRE_DATE    = "2099-09-09T09:09:09Z";
    const PURCHASE_MS    = "1757380149000";
    const EXPIRE_MS      = "4092599349000";

    // Xnip 产品定义
    const PRODUCTS = [
        {
            product_id:   "1year_xnip_pro",
            transaction_id: randomTxId(),
            type: "auto_renew"       // 自动续期订阅
        },
        {
            product_id:   "function_pack_1",
            transaction_id: randomTxId(),
            type: "non_renew"        // 非消耗型
        },
        {
            product_id:   "function_pack_1_cn",
            transaction_id: randomTxId(),
            type: "non_renew"        // 非消耗型
        }
    ];

    // ====== 工具函数 ======
    function randomTxId() {
        let s = "";
        for (let i = 0; i < 18; i++) s += Math.floor(Math.random() * 10);
        return s;
    }

    function tryParse(raw) {
        try { return JSON.parse(raw); } catch (e) { return null; }
    }

    function safeParse(body) {
        let d = tryParse(body);
        if (!d) {
            let start = body.indexOf("{");
            let end   = body.lastIndexOf("}");
            if (start !== -1 && end !== -1) {
                d = tryParse(body.substring(start, end + 1));
            }
        }
        if (!d) {
            let m = body.match(/\{[\s\S]*\}/);
            if (m) d = tryParse(m[0]);
        }
        return d;
    }

    // ====== 构建单条 in_app 记录 ======
    function buildInAppRecord(product) {
        let record = {
            "quantity":                  "1",
            "product_id":                product.product_id,
            "transaction_id":            product.transaction_id,
            "original_transaction_id":    product.transaction_id,
            "purchase_date":             "2025-09-09 09:09:09 Etc/GMT",
            "purchase_date_ms":          PURCHASE_MS,
            "purchase_date_pst":         "2025-09-09 02:09:09 America/Los_Angeles",
            "original_purchase_date":    "2025-09-09 09:09:09 Etc/GMT",
            "original_purchase_date_ms": PURCHASE_MS,
            "original_purchase_date_pst":"2025-09-09 02:09:09 America/Los_Angeles",
            "is_trial_period":           "false",
            "is_in_intro_offer_period":  "false",
            "in_app_ownership_type":     "PURCHASED"
        };

        if (product.type === "auto_renew") {
            record["expires_date"]        = "2099-09-09 09:09:09 Etc/GMT";
            record["expires_date_ms"]     = EXPIRE_MS;
            record["expires_date_pst"]    = "2099-09-09 02:09:09 America/Los_Angeles";
            record["web_order_line_item_id"] = randomTxId();
        }
        return record;
    }

    // ====== 构建 latest_receipt_info ======
    function buildLatestReceiptInfo(product) {
        let info = {
            "quantity":                       "1",
            "product_id":                     product.product_id,
            "transaction_id":                 product.transaction_id,
            "original_transaction_id":        product.transaction_id,
            "purchase_date":                  "2025-09-09 09:09:09 Etc/GMT",
            "purchase_date_ms":               PURCHASE_MS,
            "purchase_date_pst":              "2025-09-09 02:09:09 America/Los_Angeles",
            "original_purchase_date":         "2025-09-09 09:09:09 Etc/GMT",
            "original_purchase_date_ms":      PURCHASE_MS,
            "original_purchase_date_pst":     "2025-09-09 02:09:09 America/Los_Angeles",
            "is_trial_period":                "false",
            "is_in_intro_offer_period":       "false",
            "in_app_ownership_type":          "PURCHASED",
            "subscription_group_identifier":  "20536713",
            "web_order_line_item_id":         randomTxId()
        };

        if (product.type === "auto_renew") {
            info["expires_date"]     = "2099-09-09 09:09:09 Etc/GMT";
            info["expires_date_ms"]  = EXPIRE_MS;
            info["expires_date_pst"] = "2099-09-09 02:09:09 America/Los_Angeles";
        }
        return info;
    }

    // ====== 构建 pending_renewal_info ======
    function buildPendingRenewalInfo(product) {
        if (product.type !== "auto_renew") return null;
        return {
            "auto_renew_product_id":     product.product_id,
            "product_id":                product.product_id,
            "original_transaction_id":   product.transaction_id,
            "auto_renew_status":         "1",
            "expiration_intent":         "1",
            "is_in_billing_retry_period": "0"
        };
    }

    // ====== 主逻辑 ======
    let body = $response.body;
    let data = safeParse(body);

    if (!data) {
        console.log("[Xnip-Unlock] JSON 解析失败，跳过");
        $done({});
        return;
    }

    // 检查是否是 Xnip 的请求
    let bundleId = "";
    if (data.receipt) {
        bundleId = data.receipt["bundle_id"] || data.receipt["Bundle_Id"] || "";
    }

    if (bundleId !== TARGET_BUNDLE) {
        // 不是 Xnip 的请求，原样返回
        $done({});
        return;
    }

    console.log("[Xnip-Unlock] 命中 Xnip 请求，开始注入...");

    // 构建所有产品的 in_app 记录
    let inAppRecords      = PRODUCTS.map(p => buildInAppRecord(p));
    let latestReceiptInfo = PRODUCTS.map(p => buildLatestReceiptInfo(p));
    let pendingRenewals   = PRODUCTS
        .map(p => buildPendingRenewalInfo(p))
        .filter(x => x !== null);

    // 注入 in_app 到 receipt
    if (!data.receipt["in_app"]) {
        data.receipt["in_app"] = [];
    }
    data.receipt["in_app"] = data.receipt["in_app"].concat(inAppRecords);

    // 注入 latest_receipt_info
    if (!data["latest_receipt_info"]) {
        data["latest_receipt_info"] = [];
    }
    data["latest_receipt_info"] = data["latest_receipt_info"].concat(latestReceiptInfo);

    // 注入 pending_renewal_info
    if (!data["pending_renewal_info"]) {
        data["pending_renewal_info"] = [];
    }
    data["pending_renewal_info"] = data["pending_renewal_info"].concat(pendingRenewals);

    // 确保 status 为 0 (有效)
    data["status"] = 0;

    // 注入 latest_receipt (伪造 base64 标记)
    if (!data["latest_receipt"]) {
        data["latest_receipt"] = "Xnip_Unlock_Patched_Receipt";
    }

    console.log("[Xnip-Unlock] 注入完成: " + inAppRecords.length + " 条产品记录");
    console.log("[Xnip-Unlock] 产品列表: " + PRODUCTS.map(p => p.product_id).join(", "));

    $done({ body: JSON.stringify(data) });

})();
