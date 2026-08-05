// 赵云与阿斗 - 修改登录信息脚本

main();

function main() {
    var body = $response.body;
    
    // 修改钻石数量
    var reg1 = /"gd":\d+/g;
    body = body.replace(reg1, '"gd":1686');
    
    // 修改体力值
    var reg2 = /"sm":\d+/g;
    body = body.replace(reg2, '"sm":30');
    
    // 修改金币数量
    var reg3 = /"cs":\d+/g;
    body = body.replace(reg3, '"cs":286');
    
    // 解锁所有头像（将 aul 数组全部改成 1）
    var reg4 = /"aul":\[[^\]]+\]/g;
    body = body.replace(reg4, '"aul":[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]');
    
    // 将所有装备品质升级到最高级 5
    var reg5 = /"wf":\[[^\]]+\]/g;
    body = body.replace(reg5, '"wf":[[2,5],[22,5],[32,5],[21,5],[23,5],[14,5],[3,5],[35,5],[13,5],[34,5],[26,5],[37,5],[16,5],[27,5],[28,5],[8,5],[19,5],[7,5],[30,5]]');
    
    $done(body);
}

