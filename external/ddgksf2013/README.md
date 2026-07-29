# ddgksf2013 GitHub 仓库脚本本地化

## 📦 已下载的脚本（共 18 个）

**位置**: `external/ddgksf2013/scripts/`

### Rewrite 规则 (18 个)
全部来自：https://github.com/ddgksf2013/Rewrite

| # | 文件名 | 功能说明 |
|---|--------|----------|
| 1 | `amap_ads.conf` | 高德地图去广告 |
| 2 | `applet.conf` | 小程序去广告 |
| 3 | `bilibili_cc.conf` | B 站弹幕增强 |
| 4 | `caiyun_ads.conf` | 彩云天气去广告 |
| 5 | `douban.conf` | 豆瓣规则 |
| 6 | `general.conf` | 通用 HTML 规则 |
| 7 | `goofish_ads.conf` | 闲鱼去广告 |
| 8 | `keepads.conf` | Keep 去广告 |
| 9 | `moji_weather_ads.conf` | 墨迹天气去广告 |
| 10 | `qishui_music_ads.conf` | 岐水音乐去广告 |
| 11 | `qsearch.conf` | Q-Search 搜索配置 |
| 12 | `reddit_ads.conf` | Reddit 去广告 |
| 13 | `taopiaopiao_ads.conf` | 淘票票去广告 |
| 14 | `tieba_ads.conf` | 贴吧去广告 |
| 15 | `weibo_ads.conf` | 微博去广告 |
| 16 | `xiaoyuzhou_ads.conf` | 小宇宙去广告 |
| 17 | `ximalaya.conf` | 喜马拉雅去广告 |
| 18 | `youtube.ads.conf` | YouTube 去广告 |

## 🎯 正确的下载方式

**❌ 错误示例**（返回 HTML 页面）：
```
https://ddgksf2013.top/rewrite/youtube.ads.conf
```

**✅ 正确方式**（返回原始文件）：
```
https://raw.githubusercontent.com/ddgksf2013/Rewrite/master/AdBlock/YoutubeAds.conf
```

## 📚 相关 GitHub 仓库

| 仓库 | Stars | 用途 |
|------|-------|------|
| [ddgksf2013/Rewrite](https://github.com/ddgksf2013/Rewrite) | 503⭐ | Quantumult X 重写规则（本次下载来源）|
| [ddgksf2013/Scripts](https://github.com/ddgksf2013/Scripts) | 154⭐ | 油猴脚本 |
| [ddgksf2013/Filter](https://github.com/ddgksf2013/Filter) | 41⭐ | 过滤规则 |
| [ddgksf2013/ddgksf2013](https://github.com/ddgksf2013/ddgksf2013) | 13,367⭐ | 主仓库，Shadowrocket/Clash 配置 |
| [ddgksf2013/Profile](https://github.com/ddgksf2013/Profile) | 420⭐ | Profile 配置文件 |

## ⚠️ 注意事项

1. **不要使用** `ddgksf2013.top` 下的 `.conf` 或 `.js` 链接，它们会返回 HTML 网页
2. **应该使用** `raw.githubusercontent.com/ddgksf2013/...` 直接获取原始文件
3. 建议定期从 GitHub 同步更新脚本以保持最新
4. Gist 中的脚本建议使用 gist raw URL: `https://gist.githubusercontent.com/ddgksf2013/GIST_ID/raw/filename.js`

## 🔄 如何获取更多脚本

如果想下载更多脚本，可以手动访问以下 GitHub 仓库并点击对应文件进行下载：

- **Rewrite**: https://github.com/ddgksf2013/Rewrite/tree/master
- **Scripts**: https://github.com/ddgksf2013/Scripts/tree/master
- **Filter**: https://github.com/ddgksf2013/Filter/tree/master

或使用批量下载工具：
```bash
# 使用 ghfast.top 镜像加速
curl -fSL --connect-timeout 10 \
  -o "scripts.txt" \
  "https://raw.githubusercontent.com/ddgksf2013/Rewrite/master/.gitignore"
```

## 📝 验证方法

检查下载的文件是否为文本格式而非 HTML：
```bash
file external/ddgksf2013/scripts/*.conf
# 期望输出：Unicode text, UTF-8 text
# 不期望输出：HTML document text
```

查看内容前几行应为配置格式：
```bash
head -10 external/ddgksf2013/scripts/youtube.ads.conf
# 应显示：hostname = ...
# 不应显示：<!DOCTYPE html>
```
