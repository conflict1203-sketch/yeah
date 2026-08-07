// 赵云与阿斗 - 修改登录信息脚本
// 只更新新增字段的值，其他保持不变

main();

function main() {
    var body = $response.body;
    
    // 获取 serverTime（用于 ps 数组的第三个值）
    var serverTimeMatch = body.match(/"serverTime"\s*:\s*(\d+)/);
    var serverTime = serverTimeMatch ? serverTimeMatch[1] : "1785941716640";
    
    // 修改最近位置 (lp): [6]
    var regLp = /"lp"\s*:\s*\[[\s\S]*?\]/g;
    body = body.replace(regLp, '"lp": [6]');
    
    // 修改 wd
    var regWd = /"wd"\s*:\s*\d+/g;
    body = body.replace(regWd, '"wd": 4');
    
    // 修改魔法阵配置 (mgc): "2-6"
    var regMgc = /"mgc"\s*:\s*"[^"]*"/g;
    body = body.replace(regMgc, '"mgc": "2-6"');
    
    // 修改宠物/坐骑列表 (ps): 统一替换为默认的 7 条记录
    var psIndex = body.indexOf('"ps"');
    if (psIndex !== -1) {
        var arrayStart = body.indexOf('[', psIndex);
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
            
            // 统一替换为默认的 7 条记录
            var defaultItems = [];
            var ids = [17, 10, 24, 21, 13, 19, 22, 23,25,28];
            for (var j = 0; j < ids.length; j++) {
                defaultItems.push("[" + ids[j] + ", 5, " + serverTime + "]");
            }
            var newArray = defaultItems.join(', ');
            body = body.substring(0, arrayStart + 1) + newArray + body.substring(i);
        }
    }



        // 修改体力值
        var regSm = /"sm"\s*:\s*\d+/g;
        body = body.replace(regSm, '"sm": 30');



    
    $done(body);
}

