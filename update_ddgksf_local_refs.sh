#!/bin/bash
# 批量更新 .conf 和 .js 文件，将外链引用改为 GitLab 引用

BASE_DIR="/Users/apple/Documents/workspace/hzero-3/QuantumultX"
SCRIPTS_DIR="$BASE_DIR/external/ddgksf2013/scripts"
GITLAB_BASE="https://gitlab.com/conflict1203/QuantumultX/-/raw/master/external/ddgksf2013"

update_conf() {
    local file="$1"
    echo "更新：$(basename "$file")"
    
    # 替换 ddgksf2013 Scripts 仓库的 JS
    sed -i "" \
        -e 's|raw.githubusercontent.com/ddgksf2013/Scripts/refs/heads/master/weixin110.js|$GITLAB_BASE/js/weixin110.js|g' \
        -e 's|raw.githubusercontent.com/ddgksf2013/Scripts/refs/heads/master/zhangshanggongjiao.js|$GITLAB_BASE/js/zhangshanggongjiao.js|g' \
        -e 's|raw.githubusercontent.com/ddgksf2013/Scripts/refs/heads/master/applet.js|$GITLAB_BASE/js/applet.js|g' \
        -e 's|raw.githubusercontent.com/ddgksf2013/Scripts/refs/heads/master/douban.js|$GITLAB_BASE/js/douban.js|g' \
        -e 's|raw.githubusercontent.com/ddgksf2013/Scripts/refs/heads/master/amdc.js|$GITLAB_BASE/js/amdc.js|g' \
        -e 's|raw.githubusercontent.com/ddgksf2013/Scripts/refs/heads/master/reddit.js|$GITLAB_BASE/js/reddit.js|g' \
        -e 's|raw.githubusercontent.com/ddgksf2013/Scripts/refs/heads/master/caiyun_json.js|$GITLAB_BASE/js/caiyun_json.js|g' \
        -e 's|raw.githubusercontent.com/app2smile/rules/master/js/tieba-proto.js|$GITLAB_BASE/js/tieba-proto.js|g' \
        "$file"
}

update_rartv_conf() {
    local file="$1"
    echo "更新 (rartv): $(basename "$file")"
    
    sed -i "" \
        -e 's|raw.githubusercontent.com/rartv/EmbyPublic/test/quantumult-x/unlock.js|$GITLAB_BASE/rartv/unlock.js|g' \
        -e 's|raw.githubusercontent.com/rartv/EmbyPublic/refs/heads/test/surge/emby-plugin.js|$GITLAB_BASE/rartv/surge/emby-plugin.js|g' \
        -e 's|raw.githubusercontent.com/rartv/EmbyPublic/refs/heads/test/surge/download_file_rename.js|$GITLAB_BASE/rartv/surge/download_file_rename.js|g' \
        "$file"
}

echo "=== 开始更新 ddgksf2013 配置文件的 JS 引用 ==="

# ============ ddgksf2013 Scripts =================
echo ""
echo "--- Scripts 引用 ---"
for conf in "$SCRIPTS_DIR"/*.conf; do
    if grep -q "raw.githubusercontent.com/ddgksf2013/Scripts" "$conf" 2>/dev/null; then
        update_conf "$conf"
    fi
done

# ============ rartv/EmbyPublic ===================
echo ""
echo "--- rartv EmbyPublic 引用 ---"
if [ -f "$SCRIPTS_DIR/emby_plugin.conf" ]; then
    update_rartv_conf "$SCRIPTS_DIR/emby_plugin.conf"
fi

# ============ 直接 JS 文件 ==========
echo ""
echo "--- 直接 JS 文件 ---"
for js_file in "$SCRIPTS_DIR"/*.js; do
    if [ -f "$js_file" ]; then
        sed -i "" \
            -e 's|raw.githubusercontent.com/ddgksf2013/Scripts/refs/heads/master/|$GITLAB_BASE/js/|g' \
            -e 's|raw.githubusercontent.com/app2smile/rules/master/js/|$GITLAB_BASE/js/|g' \
            "$js_file"
        echo "已更新：$(basename "$js_file")"
    fi
done

echo ""
echo "=== 更新完成 ==="
