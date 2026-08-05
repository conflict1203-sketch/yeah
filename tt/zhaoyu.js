// 赵云与阿斗 - 修改登录信息脚本

main();

function main() {
    var body = $response.body;
    
    // 将所有装备品质升级到最高级 5（先处理复杂结构）
    // 生成 1-37 的所有装备槽位，品质全部为 5
    var newWfItems = [];
    for (var i = 1; i <= 37; i++) {
        newWfItems.push("[" + i + ",5]");
    }
    var newWfArray = newWfItems.join(', ');
    
    // 找到 "wf" 键，然后替换整个 wf 数组
    var wfIndex = body.indexOf('"wf"');
    if (wfIndex !== -1) {
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
            
            // 替换整个 wf 数组内容
            body = body.substring(0, arrayStart + 1) + newWfArray + body.substring(i);
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

