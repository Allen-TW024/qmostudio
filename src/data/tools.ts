/**
 * 網站上所有小工具的清單。
 * 新增工具的步驟：
 *   1. 在 src/pages/ 底下建立新頁面（例如 src/pages/timer.astro）
 *   2. 在這裡加一筆資料，首頁的卡片牆就會自動出現它
 */
export interface Tool {
  /** 網址路徑，例如 "calculator" 會變成 qmostudio.com/calculator */
  slug: string;
  name: string;
  nameEn: string;
  description: string;
  emoji: string;
  /** 卡片頂部的糖果色：coral | sunny | mint | sky | grape | peach */
  color: string;
  status: 'live' | 'soon';
}

export const tools: Tool[] = [
  {
    slug: 'calculator',
    name: '計算機',
    nameEn: 'Calculator',
    description: '一台圓滾滾的四則運算計算機，支援鍵盤輸入。',
    emoji: '🧮',
    color: 'sunny',
    status: 'live',
  },
  {
    slug: '',
    name: '敬請期待',
    nameEn: 'Coming Soon',
    description: '下一個突發奇想正在醞釀中……',
    emoji: '🥚',
    color: 'mint',
    status: 'soon',
  },
];
