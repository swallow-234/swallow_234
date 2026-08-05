// 1. 【核心對照表】定義哪個勢力擁有哪幾個主題
const categoryMap = {
    "《遺跡先遣隊》": ["作品展示","作品歷程",],
    "《虛擬人生》": ["作品展示","作品歷程",],
    "《青丘之燕》": ["作品展示","作品歷程",],
    "《鼠托邦》": ["作品展示","作品歷程",],
    "【其他彙整】": ["休閒日常", "二次創作", "練習紀錄",],
    // 💡 如果有新增的勢力，依樣畫葫蘆加在下面即可
};

// 2. 【大全清單】當使用者選回「系列勢力（全部）」時，要秀出的所有主題
const allCategories = [
"作品展示","作品歷程","休閒日常", "二次創作", "練習紀錄",
];

const workData = [
    { date: '2018-11-01', path: '⛩︎', pathUrl: 'https://swallow-234.github.io/swallow_234/%E3%80%8A%E7%87%95%E4%BE%8D%E3%80%8B/%E5%80%89%E5%BA%AB/%E6%95%85%E4%BA%8B%E7%AB%A0%E7%AF%80-_%E3%80%8A%E8%99%9B%E6%93%AC%E4%BA%BA%E7%94%9F%E3%80%8B_%E5%88%9D%E5%A7%8B.html', area: ' 《虛擬人生》', category: ' 作品展示', title: ' 初始', rarity: ' 一般', prefix: ' ', suffix: ' 動畫/圖文/模型/繪圖' },
    { date: '2022-03-27', path: '⛩︎', pathUrl: 'https://swallow-234.github.io/swallow_234/%E3%80%8A%E7%87%95%E4%BE%8D%E3%80%8B/%E5%80%89%E5%BA%AB/%E4%BC%91%E9%96%92%E6%97%A5%E5%B8%B8-%E6%95%A3%E6%96%87-2021_11_19.html', area: ' 【其他彙整】', category: ' 休閒日常', title: ' 散文-2021_11_19', rarity: ' 魔法', prefix: ' ', suffix: ' 散文/漫畫' },
    { date: '2023-07-04', path: '⛩︎', pathUrl: 'https://swallow-234.github.io/swallow_234/%E3%80%8A%E7%87%95%E4%BE%8D%E3%80%8B/%E5%80%89%E5%BA%AB/%E4%BC%91%E9%96%92%E6%97%A5%E5%B8%B8-%E8%9A%8A%E5%AD%90.html', area: ' 【其他彙整】', category: ' 休閒日常', title: ' 蚊子', rarity: ' 一般', prefix: ' ', suffix: ' 散文' },
    { date: '2023-07-18', path: '⛩︎', pathUrl: 'https://swallow-234.github.io/swallow_234/%E3%80%8A%E7%87%95%E4%BE%8D%E3%80%8B/%E5%80%89%E5%BA%AB/%E6%95%85%E4%BA%8B%E7%AB%A0%E7%AF%80-_%E3%80%8A%E9%9D%92%E4%B8%98%E4%B9%8B%E7%87%95%E3%80%8B_%E5%A5%BD%E4%BA%BA.html', area: ' 《青丘之燕》', category: ' 作品展示', title: ' 好人', rarity: ' 魔法', prefix: ' ', suffix: ' 小說' },
    { date: '2023-07-18', path: '⛩︎', pathUrl: 'https://swallow-234.github.io/swallow_234/%E3%80%8A%E7%87%95%E4%BE%8D%E3%80%8B/%E5%80%89%E5%BA%AB/%E6%95%85%E4%BA%8B%E7%AB%A0%E7%AF%80-_%E3%80%8A%E9%9D%92%E4%B8%98%E4%B9%8B%E7%87%95%E3%80%8B_%E5%81%B7%E7%AB%8A.html', area: ' 《青丘之燕》', category: ' 作品展示', title: ' 偷竊', rarity: ' 魔法', prefix: ' ', suffix: ' 小說' },
    { date: '2024-06-13', path: '⛩︎', pathUrl: 'https://swallow-234.github.io/swallow_234/%E3%80%8A%E7%87%95%E4%BE%8D%E3%80%8B/%E5%80%89%E5%BA%AB/%E6%95%85%E4%BA%8B%E7%AB%A0%E7%AF%80-_%E3%80%8A%E9%81%BA%E8%B7%A1%E5%85%88%E9%81%A3%E9%9A%8A%E3%80%8B_%E9%A2%A8%E8%88%87%E8%8D%89.html', area: ' 《遺跡先遣隊》', category: ' 作品展示', title: ' 風與草', rarity: ' 魔法', prefix: ' ', suffix: ' 散文' },
    { date: '日期', path: '章節/輿圖', pathUrl: 'https://swallow-234.github.io/swallow_234/%E5%85%AC%E4%BD%88%E6%AC%84', area: '系列勢力', category: '主題 ', title: '標題 ', rarity: '稀有度 ', prefix: '前綴 ', suffix: '後綴 ' }
];
const workData2 = [...workData].sort((a, b) => {
        return b.date.localeCompare(a.date);
    });