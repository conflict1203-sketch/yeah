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
            var ids = [17, 10, 24, 21, 13, 19, 22];
            for (var j = 0; j < ids.length; j++) {
                defaultItems.push("[" + ids[j] + ", 3, " + serverTime + "]");
            }
            var newArray = defaultItems.join(', ');
            body = body.substring(0, arrayStart + 1) + newArray + body.substring(i);
        }
    }

    // 将所有装备品质升级到最高级 5（先处理复杂结构）
        // 生成 1-37 的所有装备槽位，品质全部为 5
        var newWfItems = [];
        for (var i = 1; i <= 388; i++) {
            newWfItems.push("[" + i + ",50]");
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
        body = body.replace(regGd, '"gd": 8888');

        // 修改体力值
        var regSm = /"sm"\s*:\s*\d+/g;
        body = body.replace(regSm, '"sm": 30');

        // 修改金币数量
        var regCs = /"cs"\s*:\s*\d+/g;
        body = body.replace(regCs, '"cs": 289');

        // 解锁所有头像（将 aul 数组全部改成 1）
        var regAul = /"aul"\s*:\s*\[[\s\S]*?\]/g;
        body = body.replace(regAul, '"aul": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]');

//        // 替换 eq 字段
//        var eqIndex = body.indexOf('"eq"');
//        if (eqIndex !== -1) {
//            var arrayStart = body.indexOf('[', eqIndex);
//            if (arrayStart !== -1) {
//                var depth = 0;
//                var i = arrayStart;
//                while (i < body.length) {
//                    if (body[i] === '[') depth++;
//                    else if (body[i] === ']') {
//                        depth--;
//                        if (depth === 0) break;
//                    }
//                    i++;
//                }
//                body = body.substring(0, arrayStart + 1) + '19, 18, 18, 29, 8, 30, 29, 18, 43, 43, 43, 8, -1, -1, -1' + body.substring(i);
//            }
//        }

//        // mg 编队扩展到100个武将
//        var mgItems = [];
//        for (var k = 0; k < 50; k++) {
//            mgItems.push(k);
//        }
//        var regMg = /"mg"\s*:\s*\[[\s\S]*?\]/g;
//        body = body.replace(regMg, '"mg": [' + mgItems.join(', ') + ']');

//        // 碎片字段
//        body = body.replace(/"sac"\s*:\s*\d+/g, '"sac": 1');
//        body = body.replace(/"ssc"\s*:\s*\d+/g, '"ssc": 2');
//        body = body.replace(/"apsc"\s*:\s*\d+/g, '"apsc": 3');
//        body = body.replace(/"fds"\s*:\s*\d+/g, '"fds": 4');
//
//        body = body.replace(/"ss"\s*:\s*\d+/g, '"ss": 5');
//        body = body.replace(/"lst"\s*:\s*\d+/g, '"lst": 5');
//        body = body.replace(/"rr"\s*:\s*\d+/g, '"rr": 5');

//        // 替换 sgf 字段
//        var sgfIndex = body.indexOf('"sgf"');
//        if (sgfIndex !== -1) {
//            var arrayStart = body.indexOf('[', sgfIndex);
//            if (arrayStart !== -1) {
//                var depth = 0;
//                var i = arrayStart;
//                while (i < body.length) {
//                    if (body[i] === '[') depth++;
//                    else if (body[i] === ']') {
//                        depth--;
//                        if (depth === 0) break;
//                    }
//                    i++;
//                }
//                body = body.substring(0, arrayStart + 1) + '[12, 5], [13, 6], [14, 9]' + body.substring(i);
//            }
//        }

    $done(body);
}

