# Morning Light Global (morlight.cc)

辰光環球贵金属交易官网的静态站点工程，从 [https://morlight.cc/](https://morlight.cc/) 还原，可直接修改后重新发布。

## 项目结构

```
morlight/
├── index.html      # 主页面（含中英双语 data-en / data-zh）
├── styles.css      # 样式
├── script.js       # 语言切换、价格模拟、产品筛选、移动端菜单
├── favicon.svg     # 站点图标
├── images/         # 产品图片
└── package.json
```

技术栈：纯静态 HTML / CSS / JS（无构建步骤）。托管在 Cloudflare 上。

## 本地预览

```bash
cd morlight
npm start
```

浏览器打开 http://localhost:5173

或用任意静态服务器，例如：

```bash
npx serve .
# 或 Python
python -m http.server 5173
```

## 修改说明

| 想改的内容 | 文件 |
|-----------|------|
| 文案 / 区块结构 | `index.html` |
| 中英文文案 | 元素上的 `data-en` / `data-zh` |
| 配色、布局 | `styles.css`（主色 `--primary-color: #d4af37`） |
| 语言切换、价格跳动、产品筛选 | `script.js` |
| 产品图 | `images/`，并在 `index.html` 对应 `<img>` |

当前产品目录为电子设备与电脑器材（录音笔、转接线、鼠标、键盘、耳机、摄像头等）。

法律页链接（Privacy / Terms / Disclaimer）目前指向 `#`，需要时可补独立页面。

## 重新发布到 morlight.cc

把整个目录（不含 `node_modules`）上传到当前托管即可，常见方式：

1. **Cloudflare Pages**：连接 Git 仓库，构建命令留空，输出目录设为项目根目录（`.`）
2. **直接覆盖**：用 FTP / Cloudflare Dashboard / Wrangler 上传 `index.html`、`styles.css`、`script.js`、`favicon.svg`、`images/`

发布后建议清 CDN 缓存再访问。
