// 赵云与阿斗 - 修改登录信息脚本

main();

function main() {
    var body = $response.body;
    
    // 将所有装备品质升级到最高级 5（先处理复杂结构）
    // 找到 "wf" 键，然后手动匹配对应的数组
    var wfIndex = body.indexOf('"wf"');
    if (wfIndex !== -1) {
        // 从 [ 开始位置
        var arrayStart = body.indexOf('[', wfIndex);
        if (arrayStart !== -1) {
            // 使用深度计数器找到匹配的 ]
            var depth = 0;
            var i = arrayStart;
            while (i < body.length) {
                if (body[i] === '[') depth++;
                else if (body[i] === ']') {
                    depth--;
                    if (depth === 0) break;
                }
                i++;
            }
            
            var wfContent = body.substring(arrayStart + 1, i);  // 去掉外层 []
            var items = wfContent.match(/\[\s*\d+\s*,\s*\d+\s*\]/g);
            
            if (items) {
                var newItems = items.map(function(item) {
                    var arr = item.match(/\d+/g).map(Number);
                    return "[" + arr[0] + ",5]";
                });
                
                var newArray = newItems.join(', ');
                body = body.substring(0, arrayStart + 1) + newArray + body.substring(i);
            }
        }
    }
    
    // 修改钻石数量
    var regGd = /"gd"\s*:\s*\d+/g;
    body = body.replace(regGd, '"gd": 1686');
    
    // 修改体力值
    var regSm = /"sm"\s*:\s*\d+/g;
    body = body.replace(regSm, '"sm": 30');
    
    // 修改金币数量
    var regCs = /"cs"\s*:\s*\d+/g;
    body = body.replace(regCs, '"cs": 187');
    
    // 解锁所有头像（将 aul 数组全部改成 1）
    var regAul = /"aul"\s*:\s*\[[\s\S]*?\]/g;
    body = body.replace(regAul, '"aul": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]');
    
    $done(body);
}

