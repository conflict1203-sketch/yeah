#!/bin/bash
# 批量替换所有 url script 中的 GitHub URL 为 GitLab URL

SCRIPTS_DIR="/Users/apple/Documents/workspace/hzero-3/QuantumultX/external/ddgksf2013/scripts"
GITLAB_BASE="https://raw.githubusercontent.com/conflict1203-sketch/yeah/refs/heads/master/external/ddgksf2013/js"

echo "=== 批量替换 url script 引用的 GitHub URL ==="

updated=0

for file in "$SCRIPTS_DIR"/*.conf "$SCRIPTS_DIR"/*.js; do
    if [ ! -f "$file" ]; then
        continue
    fi
    
    # 检查是否包含 url script + github raw URL
    if grep -q "url script.*raw.githubusercontent.com/ddgksf2013" "$file" 2>/dev/null; then
        echo "更新：$(basename "$file")"
        
        sed -i "" \
            -e 's|raw\.githubusercontent\.com/ddgksf2013/Scripts/refs/heads/master/ximalaya_json.js|$GITLAB_BASE/ximalaya_json.js|g' \
            -e 's|raw\.githubusercontent\.com/ddgksf2013/Scripts/refs/heads/master/weibo_json.js|$GITLAB_BASE/weibo_json.js|g' \
            -e 's|raw\.githubusercontent\.com/ddgksf2013/Scripts/refs/heads/master/keepStyle.js|$GITLAB_BASE/keepStyle.js|g' \
            -e 's|raw\.githubusercontent\.com/ddgksf2013/Scripts/refs/heads/master/bilibili_cc.js|$GITLAB_BASE/bilibili_cc.js|g' \
            -e 's|raw\.githubusercontent\.com/ddgksf2013/Scripts/refs/heads/master/amap.js|$GITLAB_BASE/amap.js|g' \
            "$file"
        
        ((updated++))
    fi
done

echo ""
echo "=== 完成：已更新 $updated 个文件 ==="
