#!/bin/bash
# 批量更新为 GitLab 引用路径

BASE_DIR="/Users/apple/Documents/workspace/hzero-3/QuantumultX"
SCRIPTS_DIR="$BASE_DIR/external/ddgksf2013/scripts"
GITLAB_BASE="https://gitlab.com/conflict1203/QuantumultX/-/raw/master/external/ddgksf2013"

echo "=== 更新 JS 引用为 GitLab 路径 ==="

# ============ .conf 文件 =======================
for conf in "$SCRIPTS_DIR"/*.conf; do
    sed -i "" \
        -e 's|\.\./\.\./ddgksf2013/js/|$GITLAB_BASE/js/|g' \
        -e 's|\.\./\.\./ddgksf2013/rartv/|$GITLAB_BASE/rartv/|g' \
        "$conf"
    echo "已更新：$(basename "$conf")"
done

# ============ .js 文件 ==============
for js_file in "$SCRIPTS_DIR"/*.js; do
    if [ -f "$js_file" ]; then
        sed -i "" \
            -e 's|\.\./\.\./ddgksf2013/js/|$GITLAB_BASE/js/|g' \
            "$js_file"
    fi
done

echo ""
echo "=== 更新完成 ==="
