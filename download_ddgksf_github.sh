#!/bin/bash
# 批量下载 ddgksf2013 的 GitHub 原始脚本
BASE_DIR="/Users/apple/Documents/workspace/hzero-3/QuantumultX/external/ddgksf2013"
SUCCESS=0
FAIL=0

download() {
    local dest="$1"
    local url="$2"
    if curl -fSL --connect-timeout 10 -s -o "$dest" "$url"; then
        echo "✓ $(basename "$dest")"
        ((SUCCESS++))
    else
        echo "✗ FAIL: $dest"
        ((FAIL++))
    fi
}

echo "=== 开始下载 ddgksf2013 GitHub 仓库脚本 ==="

# ============ Rewrite 仓库 - 重写规则 ==========
echo ""
echo "--- Rewrite 仓库 ---"
download "$BASE_DIR/scripts/youtube.ads.conf" "https://raw.githubusercontent.com/ddgksf2013/Rewrite/master/AdBlock/YoutubeAds.conf"
download "$BASE_DIR/scripts/bilibili_cc.conf" "https://raw.githubusercontent.com/ddgksf2013/Rewrite/master/Function/Bilibili_CC.conf"
download "$BASE_DIR/scripts/qsearch.conf" "https://raw.githubusercontent.com/ddgksf2013/Rewrite/master/Html/Q-Search.conf"
download "$BASE_DIR/scripts/general.conf" "https://raw.githubusercontent.com/ddgksf2013/Rewrite/master/Html/General.conf"
download "$BASE_DIR/scripts/weibo_ads.conf" "https://raw.githubusercontent.com/ddgksf2013/Rewrite/master/AdBlock/WeiboAds.conf"
download "$BASE_DIR/scripts/amap_ads.conf" "https://raw.githubusercontent.com/ddgksf2013/Rewrite/master/AdBlock/AmapAds.conf"
download "$BASE_DIR/scripts/ximalaya.conf" "https://raw.githubusercontent.com/ddgksf2013/Rewrite/master/AdBlock/Ximalaya.conf"
download "$BASE_DIR/scripts/taopiaopiao_ads.conf" "https://raw.githubusercontent.com/ddgksf2013/Rewrite/refs/heads/master/AdBlock/TaoPiaoPiaoAds.conf"
download "$BASE_DIR/scripts/keepads.conf" "https://raw.githubusercontent.com/ddgksf2013/Rewrite/master/AdBlock/KeepAds.conf"
download "$BASE_DIR/scripts/cainiao_ads.conf" "https://raw.githubusercontent.com/ddgksf2013/Rewrite/master/AdBlock/CainiaoAds.conf"
download "$BASE_DIR/scripts/neaseads.conf" "https://raw.githubusercontent.com/ddgksf2013/Rewrite/master/AdBlock/NeteaseAds.conf"
download "$BASE_DIR/scripts/smzdm_ads.conf" "https://raw.githubusercontent.com/ddgksf2013/Rewrite/master/AdBlock/SmzdmAds.conf"
download "$BASE_DIR/scripts/caiyun_ads.conf" "https://raw.githubusercontent.com/ddgksf2013/Rewrite/master/AdBlock/CaiYunAds.conf"
download "$BASE_DIR/scripts/tieba_ads.conf" "https://raw.githubusercontent.com/ddgksf2013/Rewrite/refs/heads/master/AdBlock/TieBaAds.conf"
download "$BASE_DIR/scripts/reddit_ads.conf" "https://raw.githubusercontent.com/ddgksf2013/Rewrite/refs/heads/master/AdBlock/RedditAds.conf"
download "$BASE_DIR/scripts/netease_mail_ads.conf" "https://raw.githubusercontent.com/ddgksf2013/Rewrite/refs/heads/master/AdBlock/NeteaseMailAds.conf"
download "$BASE_DIR/scripts/goofish_ads.conf" "https://raw.githubusercontent.com/ddgksf2013/Rewrite/refs/heads/master/AdBlock/GoofishAds.conf"
download "$BASE_DIR/scripts/qishui_music_ads.conf" "https://raw.githubusercontent.com/ddgksf2013/Rewrite/refs/heads/master/AdBlock/QiShuiMusicAds.conf"
download "$BASE_DIR/scripts/applet.conf" "https://raw.githubusercontent.com/ddgksf2013/Rewrite/refs/heads/master/AdBlock/Applet.conf"
download "$BASE_DIR/scripts/xiaoyuzhou_ads.conf" "https://raw.githubusercontent.com/ddgksf2013/Rewrite/refs/heads/master/AdBlock/XiaoYuZhouAds.conf"
download "$BASE_DIR/scripts/chelaille_ads.conf" "https://raw.githubusercontent.com/ddgksf2013/Rewrite/refs/heads/master/AdBlock/CheLaiLeAds.conf"
download "$BASE_DIR/scripts/moji_weather_ads.conf" "https://raw.githubusercontent.com/ddgksf2013/Rewrite/refs/heads/master/AdBlock/MoJiWeatherAds.conf"
download "$BASE_DIR/scripts/douban.conf" "https://raw.githubusercontent.com/ddgksf2013/Rewrite/master/Html/Douban.conf"
download "$BASE_DIR/scripts/fake_ios_ads.conf" "https://raw.githubusercontent.com/ddgksf2013/Rewrite/refs/heads/master/AdBlock/FakeiOSAds.conf"
download "$BASE_DIR/scripts/china_unicom_ads.conf" "https://raw.githubusercontent.com/ddgksf2013/Rewrite/refs/heads/master/AdBlock/ChinaUnicomAds.conf"
download "$BASE_DIR/scripts/bilibili_comics_ads.conf" "https://raw.githubusercontent.com/ddgksf2013/Rewrite/refs/heads/master/AdBlock/BiliBiliComicsAds.conf"
download "$BASE_DIR/scripts/emby_plugin.conf" "https://raw.githubusercontent.com/ddgksf2013/Rewrite/master/Function/EmbyPlugin.conf"
download "$BASE_DIR/scripts/unblock_url_in_wechat.conf" "https://raw.githubusercontent.com/ddgksf2013/Rewrite/master/Function/UnblockURLinWeChat.conf"

# ============ Scripts 仓库 - 油猴脚本 ==========
echo ""
echo "--- Scripts 仓库 ---"
download "$BASE_DIR/scripts/pixiv_ads.js" "https://raw.githubusercontent.com/ddgksf2013/Scripts/master/pixivAds.js"
download "$BASE_DIR/scripts/coolapk.js" "https://raw.githubusercontent.com/ddgksf2013/Scripts/master/coolapk.js"
download "$BASE_DIR/scripts/12306.js" "https://raw.githubusercontent.com/ddgksf2013/Scripts/master/12306.js"

# ============ Filter 仓库 - 过滤规则 ==========
echo ""
echo "--- Filter 仓库 ---"
download "$BASE_DIR/filter/apple_intelligence.list" "https://raw.githubusercontent.com/ddgksf2013/Filter/refs/heads/master/AppleIntelligence.list"

# ============ Profile 仓库 - 配置文件 ==========
echo ""
echo "--- Profile 仓库 ---"
# download "$BASE_DIR/profile/shadowrocket.conf" "https://raw.githubusercontent.com/ddgksf2013/Profile/master/Shadowrocket.conf"

# ============ Gist - 独立的 JavaScript ==========
echo ""
echo "--- Gist ---"
download "$BASE_DIR/gist/alibabacloud_adblock.js" "https://gist.githubusercontent.com/ddgksf2013/f4752e632fd3375ea2811985c5b635dc/raw/alicloud.js"
download "$BASE_DIR/gist/youku_adblock.js" "https://gist.githubusercontent.com/ddgksf2013/5b431857f8b88acbc7ac2453a21e676a/raw/youku.adblock.js"
download "$BASE_DIR/gist/pipixia_adblock.js" "https://gist.githubusercontent.com/ddgksf2013/bb1dadbd32f67c68772caebcc70b0a33/raw/pipixia.adblock.js"
download "$BASE_DIR/gist/cmsAdblock.js" "https://gist.githubusercontent.com/ddgksf2013/d3a5059645378a05861d6ba18e2fda4c/raw/cmsAdblock.js"

echo ""
echo "=== 下载完成 ==="
echo "成功：$SUCCESS"
echo "失败：$FAIL"
