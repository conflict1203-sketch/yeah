#!/bin/bash
# 下载 ddgksf2013 相关的外部 JS 脚本

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

echo "=== 开始下载 ddgksf2013 相关的 JS 脚本 ==="

# ============ ddgksf2013 Scripts 仓库 ==========
echo ""
echo "--- Scripts 仓库 (ddgksf2013) ---"
download "$BASE_DIR/js/weixin110.js" "https://raw.githubusercontent.com/ddgksf2013/Scripts/refs/heads/master/weixin110.js"
download "$BASE_DIR/js/zhangshanggongjiao.js" "https://raw.githubusercontent.com/ddgksf2013/Scripts/refs/heads/master/zhangshanggongjiao.js"
download "$BASE_DIR/js/applet.js" "https://raw.githubusercontent.com/ddgksf2013/Scripts/refs/heads/master/applet.js"
download "$BASE_DIR/js/douban.js" "https://raw.githubusercontent.com/ddgksf2013/Scripts/refs/heads/master/douban.js"
download "$BASE_DIR/js/amdc.js" "https://raw.githubusercontent.com/ddgksf2013/Scripts/refs/heads/master/amdc.js"
download "$BASE_DIR/js/reddit.js" "https://raw.githubusercontent.com/ddgksf2013/Scripts/refs/heads/master/reddit.js"
download "$BASE_DIR/js/caiyun_json.js" "https://raw.githubusercontent.com/ddgksf2013/Scripts/refs/heads/master/caiyun_json.js"

# ============ app2smile/rules 仓库 ==========
echo ""
echo "--- app2smile/rules 仓库 ---"
download "$BASE_DIR/js/tieba-proto.js" "https://raw.githubusercontent.com/app2smile/rules/master/js/tieba-proto.js"

# ============ rartv/EmbyPublic 仓库 ==========
echo ""
echo "--- rartv/EmbyPublic 仓库 ---"
mkdir -p "$BASE_DIR/rartv/surge"
mkdir -p "$BASE_DIR/rartv/quantumult-x"
download "$BASE_DIR/rartv/unlock.js" "https://raw.githubusercontent.com/rartv/EmbyPublic/test/quantumult-x/unlock.js"
download "$BASE_DIR/rartv/surge/emby-plugin.js" "https://raw.githubusercontent.com/rartv/EmbyPublic/refs/heads/test/surge/emby-plugin.js"
download "$BASE_DIR/rartv/surge/download_file_rename.js" "https://raw.githubusercontent.com/rartv/EmbyPublic/refs/heads/test/surge/download_file_rename.js"

# ============ GitHub raw URL 直接下载 ==========
echo ""
echo "--- GitHub Raw Direct Download ---"
# 注意：GitHub 原始链接可能重定向到 blob 页面，建议使用 raw.githubusercontent.com 格式

echo ""
echo "=== 下载完成 ==="
echo "成功：$SUCCESS"
echo "失败：$FAIL"
