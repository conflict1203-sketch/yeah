# ddgksf2013 本地化脚本使用说明

## 📍 已下载脚本位置

所有脚本已下载到：
```
external/ddgksf2013/scripts/
```

**数量**: 18 个 `.conf` 配置文件  
**格式**: Quantumult X 重写规则（可直接使用）

---

## 📖 如何使用

### 方法 1: 添加到 default.txt

如果你想将这些规则整合到主配置中，可以将以下内容添加到 `default.txt` 的 `[filter_remote]` 或 `[rewrite_remote]` 部分：

```conf
[filter_remote]
# ddgksf2013 去广告规则（本地化版本）
https://raw.githubusercontent.com/conflict1203-sketch/yeah/refs/heads/master/external/ddgksf2013/scripts/youtube.ads.conf, tag=youtube-ads, enabled=true
https://raw.githubusercontent.com/conflict1203-sketch/yeah/refs/heads/master/external/ddgksf2013/scripts/bilibili_comics_ads.conf, tag=bilibili-comics, enabled=false
https://raw.githubusercontent.com/conflict1203-sketch/yeah/refs/heads/master/external/ddgksf2013/scripts/douban.conf, tag=douban, enabled=false
```

**或者直接用本地路径**:
```conf
external/ddgksf2013/scripts/youtube.ads.conf
external/ddgksf2013/scripts/weibo_ads.conf
external/ddgksf2013/scripts/tieba_ads.conf
```

### 方法 2: 单独导入

每个 `.conf` 文件都是独立的 Quantumult X 配置，可以单独复制导入到 Quantumult X 中：

1. **YouTube 去广告**: `external/ddgksf2013/scripts/youtube.ads.conf`
2. **微博去广告**: `external/ddgksf2013/scripts/weibo_ads.conf`
3. **贴吧去广告**: `external/ddgksf2013/scripts/tieba_ads.conf`
4. **高德地图去广告**: `external/ddgksf2013/scripts/amap_ads.conf`
5. **喜马拉雅去广告**: `external/ddgksf2013/scripts/ximalaya.conf`
6. **Keep 去广告**: `external/ddgksf2013/scripts/keepads.conf`
7. **闲鱼去广告**: `external/ddgksf2013/scripts/goofish_ads.conf`
8. **淘宝票务去广告**: `external/ddgksf2013/scripts/taopiaopiao_ads.conf`
9. **网易云音乐去广告**: `external/ddgksf2013/scripts/neaseads.conf`
10. **什么值得买去广告**: `external/ddgksf2013/scripts/smzdm_ads.conf`
11. **彩云天气去广告**: `external/ddgksf2013/scripts/caiyun_ads.conf`
12. **Reddit 去广告**: `external/ddgksf2013/scripts/reddit_ads.conf`
13. **小宇宙去广告**: `external/ddgksf2013/scripts/xiaoyuzhou_ads.conf`
14. **墨迹天气去广告**: `external/ddgksf2013/scripts/moji_weather_ads.conf`
15. **小程序去广告**: `external/ddgksf2013/scripts/applet.conf`
16. **豆瓣规则**: `external/ddgksf2013/scripts/douban.conf`
17. **B 站漫画去广告**: `external/ddgksf2013/scripts/bilibili_comics_ads.conf`
18. **岐水音乐去广告**: `external/ddgksf2013/scripts/qishui_music_ads.conf`
19. **QQ 通用 HTML 规则**: `external/ddgksf2013/scripts/general.conf`
20. **Q-Search 搜索**: `external/ddgksf2013/scripts/qsearch.conf`
21. **FakeiOS 去广告**: `external/ddgksf2013/scripts/fake_ios_ads.conf`
22. **联通去广告**: `external/ddgksf2013/scripts/china_unicom_ads.conf`
23. **B 站弹幕增强**: `external/ddgksf2013/scripts/bilibili_cc.conf`
24. **微信外链解锁**: `external/ddgksf2013/scripts/unblock_url_in_wechat.conf`
25. **Emby 插件**: `external/ddgksf2013/scripts/emby_plugin.conf`

---

## 🔧 完整下载清单

### Rewrite 仓库 (18 个)
- ✓ [youtube.ads.conf](file:///Users/apple/Documents/workspace/hzero-3/QuantumultX/external/ddgksf2013/scripts/youtube.ads.conf) - YouTube 去广告
- ✓ [weibo_ads.conf](file:///Users/apple/Documents/workspace/hzero-3/QuantumultX/external/ddgksf2013/scripts/weibo_ads.conf) - 微博去广告
- ✓ [tieba_ads.conf](file:///Users/apple/Documents/workspace/hzero-3/QuantumultX/external/ddgksf2013/scripts/tieba_ads.conf) - 贴吧去广告
- ✓ [amap_ads.conf](file:///Users/apple/Documents/workspace/hzero-3/QuantumultX/external/ddgksf2013/scripts/amap_ads.conf) - 高德地图去广告
- ✓ [ximalaya.conf](file:///Users/apple/Documents/workspace/hzero-3/QuantumultX/external/ddgksf2013/scripts/ximalaya.conf) - 喜马拉雅去广告
- ✓ [keepads.conf](file:///Users/apple/Documents/workspace/hzero-3/QuantumultX/external/ddgksf2013/scripts/keepads.conf) - Keep 去广告
- ✓ [goofish_ads.conf](file:///Users/apple/Documents/workspace/hzero-3/QuantumultX/external/ddgksf2013/scripts/goofish_ads.conf) - 闲鱼去广告
- ✓ [taopiaopiao_ads.conf](file:///Users/apple/Documents/workspace/hzero-3/QuantumultX/external/ddgksf2013/scripts/taopiaopiao_ads.conf) - 淘票票去广告
- ✓ [neaseads.conf](file:///Users/apple/Documents/workspace/hzero-3/QuantumultX/external/ddgksf2013/scripts/neaseads.conf) - 网易云音乐去广告
- ✓ [smzdm_ads.conf](file:///Users/apple/Documents/workspace/hzero-3/QuantumultX/external/ddgksf2013/scripts/smzdm_ads.conf) - 什么值得买去广告
- ✓ [caiyun_ads.conf](file:///Users/apple/Documents/workspace/hzero-3/QuantumultX/external/ddgksf2013/scripts/caiyun_ads.conf) - 彩云天气去广告
- ✓ [reddit_ads.conf](file:///Users/apple/Documents/workspace/hzero-3/QuantumultX/external/ddgksf2013/scripts/reddit_ads.conf) - Reddit 去广告
- ✓ [xiaoyuzhou_ads.conf](file:///Users/apple/Documents/workspace/hzero-3/QuantumultX/external/ddgksf2013/scripts/xiaoyuzhou_ads.conf) - 小宇宙去广告
- ✓ [moji_weather_ads.conf](file:///Users/apple/Documents/workspace/hzero-3/QuantumultX/external/ddgksf2013/scripts/moji_weather_ads.conf) - 墨迹天气去广告
- ✓ [applet.conf](file:///Users/apple/Documents/workspace/hzero-3/QuantumultX/external/ddgksf2013/scripts/applet.conf) - 小程序去广告
- ✓ [douban.conf](file:///Users/apple/Documents/workspace/hzero-3/QuantumultX/external/ddgksf2013/scripts/douban.conf) - 豆瓣规则
- ✓ [bilibili_comics_ads.conf](file:///Users/apple/Documents/workspace/hzero-3/QuantumultX/external/ddgksf2013/scripts/bilibili_comics_ads.conf) - B 站漫画去广告
- ✓ [qishui_music_ads.conf](file:///Users/apple/Documents/workspace/hzero-3/QuantumultX/external/ddgksf2013/scripts/qishui_music_ads.conf) - 岐水音乐去广告

### 其他文件 (3 个)
- ✓ [general.conf](file:///Users/apple/Documents/workspace/hzero-3/QuantumultX/external/ddgksf2013/scripts/general.conf) - QQ 通用 HTML 规则
- ✓ [qsearch.conf](file:///Users/apple/Documents/workspace/hzero-3/QuantumultX/external/ddgksf2013/scripts/qsearch.conf) - Q-Search 搜索配置
- ✓ [fake_ios_ads.conf](file:///Users/apple/Documents/workspace/hzero-3/QuantumultX/external/ddgksf2013/scripts/fake_ios_ads.conf) - FakeiOS 去广告
- ✓ [china_unicom_ads.conf](file:///Users/apple/Documents/workspace/hzero-3/QuantumultX/external/ddgksf2013/scripts/china_unicom_ads.conf) - 联通去广告
- ✓ [bilibili_cc.conf](file:///Users/apple/Documents/workspace/hzero-3/QuantumultX/external/ddgksf2013/scripts/bilibili_cc.conf) - B 站弹幕增强
- ✓ [unblock_url_in_wechat.conf](file:///Users/apple/Documents/workspace/hzero-3/QuantumultX/external/ddgksf2013/scripts/unblock_url_in_wechat.conf) - 微信外链解锁
- ✓ [emby_plugin.conf](file:///Users/apple/Documents/workspace/hzero-3/QuantumultX/external/ddgksf2013/scripts/emby_plugin.conf) - Emby 插件

**总计**: 25 个配置规则文件

---

## ⚙️ 源仓库信息

| 文件名 | 原始 URL | Stars |
|--------|---------|-------|
| 全部规则 | https://github.com/ddgksf2013/Rewrite/tree/master | 503⭐ |

---

## 🔄 更新提醒

建议定期从 GitHub 同步更新：
```bash
# 访问官方仓库查看最新脚本
https://github.com/ddgksf2013/Rewrite
```

或使用镜像站点加速下载：
```bash
curl -fSL \
  -o external/ddgksf2013/scripts/new_script.conf \
  "https://ghfast.top/https://raw.githubusercontent.com/ddgksf2013/Rewrite/master/xxx.conf"
```

---

## 📝 注意事项

1. **不是直接替换**这些 `.conf` 是独立配置规则，不需要修改项目中的现有配置文件
2. **按需启用**可以根据需求选择性地启用某些规则
3. **冲突处理**如果多个规则有相同域名，后加载的规则会覆盖先加载的
4. **性能优化**不建议一次性启用所有规则，避免影响 Quantumult X 性能
