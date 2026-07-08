# QmoStudio 🎡

Allen 的個人小工具遊樂場，收集各種突發奇想做出來的網頁小工具。

**Live**: https://www.qmostudio.com

## 技術架構

- [Astro](https://astro.build) — 多頁靜態網站框架，每個工具是一個獨立頁面
- [Tailwind CSS v4](https://tailwindcss.com) — 樣式，設計 token 定義在 `src/styles/global.css` 的 `@theme`
- Cloudflare Pages — 部署

## 開發

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 輸出到 dist/
npm run preview
```

## 新增一個小工具

1. 在 `src/pages/` 建立新頁面，例如 `src/pages/timer.astro`（自動對應 `qmostudio.com/timer`），用 `BaseLayout` 包起來即可繼承導覽列與風格。
2. 在 `src/data/tools.ts` 加一筆工具資料，首頁的卡片牆會自動顯示。
3. 需要複雜互動時，可以為那一頁單獨安裝 framework integration（`npx astro add react` 等），其他頁面不受影響。

## 部署（Cloudflare Pages）

Push 到 `main` 即自動部署。Pages 專案設定：

- **Build command**: `npm run build`
- **Build output directory**: `dist`
