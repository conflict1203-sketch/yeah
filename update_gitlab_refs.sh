#!/bin/bash
# 批量更新为 GitLab 引用路径

SCRIPTS_DIR="/Users/apple/Documents/workspace/hzero-3/QuantumultX/external/ddgksf2013/scripts"

echo "=== 更新 JS 引用为 GitLab 路径 ==="

# ============ .conf 文件 =======================
for conf in "$SCRIPTS_DIR"/*.conf; do
    sed -i "" \
        -e 's|\.\./\.\./ddgksf2013/js/|https://raw.githubusercontent.com/conflict1203-sketch/yeah/refs/heads/master/external/ddgksf2013/js/|g' \
        -e 's|\.\./\.\./ddgksf2013/rartv/|https://raw.githubusercontent.com/conflict1203-sketch/yeah/refs/heads/master/external/ddgksf2013/rartv/|g' \
        "$conf"
    echo "已更新：$(basename "$conf")"
done

# ============ .js 文件 ==============
for js_file in "$SCRIPTS_DIR"/*.js; do
    if [ -f "$js_file" ]; then
        sed -i "" \
            -e 's|\.\./\.\./ddgksf2013/js/|https://raw.githubusercontent.com/conflict1203-sketch/yeah/refs/heads/master/external/ddgksf2013/js/|g' \
            "$js_file"
        echo "已更新：$(basename "$js_file")"
    fi
done

echo ""
echo "=== 更新完成 ==="
