// 赵云与阿斗 - 修改登录信息脚本

main();

function main() {
    var body = $response.body;
    
    // 将所有装备品质升级到最高级 5（先处理复杂结构）
    var regWf = /"wf"\s*:\s*\[([\s\S]*?)\]/g;
    body = body.replace(regWf, function(match, wfContent) {
        var items = wfContent.match(/\[\s*\d+\s*,\s*\d+\s*\]/g);
        if (!items) return match;
        
        var newItems = items.map(function(item) {
            var arr = item.match(/\d+/g).map(Number);
            return "[" + arr[0] + ",5]";
        });
        return '"wf": [' + newItems.join(', ') + ']';
    });
    
    // 修改钻石数量
    var regGd = /"gd"\s*:\s*\d+/g;
    body = body.replace(regGd, '"gd": 1686');
    
    // 修改体力值
    var regSm = /"sm"\s*:\s*\d+/g;
    body = body.replace(regSm, '"sm": 30');
    
    // 修改金币数量
    var regCs = /"cs"\s*:\s*\d+/g;
    body = body.replace(regCs, '"cs": 286');
    
    // 解锁所有头像（将 aul 数组全部改成 1）
    var regAul = /"aul"\s*:\s*\[[\s\S]*?\]/g;
    body = body.replace(regAul, '"aul": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]');
    
    $done(body);
}

