#!/bin/bash
# 批量下载 ddgksf2013.top 脚本到本地
BASE_DIR="/Users/apple/Documents/workspace/hzero-3/QuantumultX/external/ddgksf2013"
BASE_URL="https://ddgksf2013.top"
SUCCESS=0
FAIL=0

download() {
    local path="$1"
    local file="$BASE_DIR/$path"
    local url="$BASE_URL/$path"
    mkdir -p "$(dirname "$file")"
    if curl -fSL --connect-timeout 10 -s -o "$file" "$url"; then
        echo "✓ $path"
        ((SUCCESS++))
    else
        echo "✗ FAIL: $path"
        ((FAIL++))
    fi
}

echo "=== 开始下载 ddgksf2013.top 脚本 ==="

# Profile
download "Profile/QuantumultX.conf"
download "Profile/Shadowrocket.conf"

# scripts - 会员解锁
download "scripts/buyitunes.vip.js"
download "scripts/revenuecat.vip.js"
download "scripts/drafts.vip.js"
download "scripts/jijianhuilv.vip.js"
download "scripts/soutushenqi.vip.js"
download "scripts/wannianli.vip.js"
download "scripts/nicegram.vip.js"
download "scripts/kkmusic.vip.js"
download "scripts/appraven.vip.js"
download "scripts/sanlianzhongdu.vip.js"
download "scripts/fimo.vip.js"
download "scripts/goodbility.vip.js"
download "scripts/judou.vip.js"
download "scripts/endel.vip.js"
download "scripts/flightradar24.vip.js"
download "scripts/yiyan.vip.js"
download "scripts/session.vip.js"
download "scripts/apowersoft.vip.js"
download "scripts/vis.vip.js"
download "scripts/slidebox.vip.js"

# scripts - 功能增强
download "scripts/bdpan.unlock.js"
download "scripts/pikpak.fnc.js"

# scripts - 去广告
download "scripts/zhihu.ads.js"
download "scripts/bdpan.ads.js"
download "scripts/bdmap.ads.js"
download "scripts/suishouji.ads.js"
download "scripts/123pan.ads.js"
download "scripts/missav.ads.js"
download "scripts/pornhub.ads.js"
download "scripts/javdbapp.ads.js"
download "scripts/v2ex.ads.js"
download "scripts/yangjibao.vip.js"

# rewrite - 去广告
download "rewrite/StartUpAds.conf"
download "rewrite/BiliBiliAds.conf"
download "rewrite/BiliBiliAdsLite.conf"
download "rewrite/XiaoHongShuAds.conf"
download "rewrite/XiaoHongShuBlockVideo.conf"
download "rewrite/ChinaBroadAds.conf"
download "rewrite/KuaiKanComicsAds.conf"
download "rewrite/MeiYouAds.conf"
download "rewrite/XueQiuAds.conf"
download "rewrite/iDailyAds.conf"
download "rewrite/MaiDuiDuiAds.conf"
download "rewrite/HeFengWeatherAds.conf"
download "rewrite/MiGuVideoAds.conf"
download "rewrite/DLabelAds.conf"
download "rewrite/ZhiLianZhaoPinAds.conf"
download "rewrite/DaShiXiongAds.conf"
download "rewrite/JiaXiaoYiDianTongAds.conf"
download "rewrite/TencentDocAds.conf"
download "rewrite/JinShiDataAds.conf"
download "rewrite/WeiFengAds.conf"
download "rewrite/DaMaiAds.conf"

# module
download "module/JavDB.WebEnhance.sgmodule"
download "module/Redirect2Swift.sgmodule"
download "module/Redirect2Turrit.sgmodule"

echo ""
echo "=== 下载完成 ==="
echo "成功: $SUCCESS"
echo "失败: $FAIL"
