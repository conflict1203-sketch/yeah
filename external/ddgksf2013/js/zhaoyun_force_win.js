// ==UserScript==
// @ScriptName        赵云与阿斗 - 强制胜利脚本
// @Author            ddgksf2013
// @UpdateTime        2026-07-30
// @Game              赵云与阿斗 (api01.mihuangame.com)
// @Function          修改游戏结束请求中的 win 参数为 1（强制胜利）
// ==/UserScript==

/**
 * 修改请求 URL，将 win 参数强制改为 1
 * 
 * 原始请求示例：
 *   https://api01.mihuangame.com/api/v2/zyyad/game/end?star=9&win=0
 * 
 * 修改后：
 *   https://api01.mihuangame.com/api/v2/zyyad/game/end?star=9&win=1
 */

// 获取当前请求的 URL
var url = $request.url;

// 方法 1：使用正则表达式替换 win 参数
var modifiedUrl = url.replace(/win=\d+/g, 'win=1');

// 方法 2：如果 win 参数不存在，则添加
if (!url.includes('win=')) {
    if (url.includes('?')) {
        modifiedUrl = url + '&win=1';
    } else {
        modifiedUrl = url + '?win=1';
    }
}

// 打印日志（可在 Quantumult X 日志中查看）
console.log('【赵云与阿斗 - 强制胜利】');
console.log('原始 URL: ' + url);
console.log('修改后 URL: ' + modifiedUrl);

// 返回修改后的请求
$done({
    url: modifiedUrl,
    headers: $request.headers
});
