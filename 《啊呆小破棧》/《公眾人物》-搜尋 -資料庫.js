// 1. 【核心對照表】定義哪個勢力擁有哪幾個主題
const categoryMap = {
    " ": ["Ⅰ社會貢獻", "Ⅰ建議方法", "Ⅰ發現問題", "Ⅱ宣揚口號", "Ⅱ未能處理", "Ⅱ詢問回應", "Ⅱ政見發表", "Ⅲ負面方法", "Ⅲ負面行為", "Ⅳ破壞民主", ],
    "優良": ["Ⅰ社會貢獻", "Ⅰ建議方法", "Ⅰ發現問題", ],
    "平庸": ["Ⅱ宣揚口號", "Ⅱ未能處理", "Ⅱ詢問回應", "Ⅱ政見發表", ],
    "劣質": ["Ⅲ負面方法", "Ⅲ負面行為", ],
    "邪惡": ["Ⅳ破壞民主", ],
    // 💡 如果有新增的勢力，依樣畫葫蘆加在下面即可
};

// 2. 【大全清單】當使用者選回「系列勢力（全部）」時，要秀出的所有主題
const allCategories = [
"Ⅰ社會貢獻", "Ⅰ建議方法", "Ⅰ發現問題", "Ⅱ宣揚口號", "Ⅱ未能處理", "Ⅱ詢問回應", "Ⅱ政見發表", "Ⅲ負面方法", "Ⅲ負面行為", "Ⅳ破壞民主", 
];

// 1. 原始資料庫 (表格1 的真實內容)
//外交與國防：國際、邦交、國防軍事戰略、國家安全。
//經濟與財政：產業發展、貿易、科技創新、國家預算、稅收制度、貨幣供給及金融管理。
//社會與民生：勞動權益、社會福利、住宅正義、公共衛生及醫療保健。
//教育與文化：國民教育、高等教育、體育發展、文化資產保護及文化傳播。
//環境與基礎建設：環境保護、自然生態、氣候變遷因應、交通運輸及公共工程。
//法治與行政：司法改革、治安維護、廉政建設、公務員體制及選舉制度。
//經過專案整理，則為「動動鼠」。
//可以複選。
const workData = [
    { date: '2026-10-01', path: '⛨', pathUrl: 'https://swallow-234.github.io/swallow_234/《聖光教教主》/倉庫/清單/公眾人物-蕭文乾_1974-09-27.html', area: ' 優良', category: ' Ⅰ社會貢獻<br>Ⅰ建議方法<br>Ⅰ發現問題', title: ' 蕭文乾_1974-09-27', rarity: ' ★★★☆☆', prefix: ' 問題<br>建設性', suffix: ' 清流人才+3<br>商業行銷' },
    { date: '2026-09-30', path: '⛨', pathUrl: 'https://swallow-234.github.io/swallow_234/《聖光教教主》/倉庫/清單/公眾人物-沈伯洋_1982-06-07.html', area: ' 平庸', category: ' Ⅱ詢問回應', title: ' 沈伯洋_1982-06-07', rarity: ' ☆☆☆☆☆', prefix: ' 廢話<br>毫無邏輯', suffix: ' 無良商人' },
    { date: '2026-09-29', path: '⛨', pathUrl: 'https://swallow-234.github.io/swallow_234/《聖光教教主》/倉庫/清單/公眾人物-唐新民_1950-12-25.html', area: ' 平庸', category: ' Ⅱ宣揚口號', title: ' 唐新民_1950-12-25', rarity: ' ☆☆☆☆☆', prefix: ' 毫無邏輯', suffix: ' 奇文共賞' },
    { date: '2026-09-29', path: '⛨', pathUrl: 'https://swallow-234.github.io/swallow_234/《聖光教教主》/倉庫/清單/公眾人物-蔣萬安_1978-12-26.html', area: ' 平庸', category: ' Ⅱ宣揚口號', title: ' 蔣萬安_1978-12-26', rarity: ' ☆☆☆☆☆', prefix: ' 輕浮', suffix: ' 才疏學淺' },
    { date: '2026-09-23', path: '⛨', pathUrl: 'https://swallow-234.github.io/swallow_234/《聖光教教主》/倉庫/清單/公眾人物-林瑞祥_0000-12-25.html', area: ' 平庸', category: ' Ⅱ宣揚口號', title: ' 林瑞祥_0000-12-25', rarity: ' ☆☆☆☆☆', prefix: ' 廢話', suffix: ' 靜觀其變' },
    { date: '2026-09-23', path: '⛨', pathUrl: 'https://swallow-234.github.io/swallow_234/《聖光教教主》/倉庫/清單/公眾人物-邱臣遠_1981-12-11.html', area: ' 平庸', category: ' Ⅱ宣揚口號', title: ' 邱臣遠_1981-12-11', rarity: ' ☆☆☆☆☆', prefix: ' 廢話', suffix: ' 腐敗政客' },
    { date: '2026-09-23', path: '⛨', pathUrl: 'https://swallow-234.github.io/swallow_234/《聖光教教主》/倉庫/清單/公眾人物-戴于文_0000-00-00.html', area: ' 平庸', category: ' Ⅱ詢問回應', title: ' 戴于文_0000-00-00', rarity: ' ☆☆☆☆☆', prefix: ' 輕浮', suffix: ' 魁儡小人' },
    { date: '2026-09-22', path: '⛨', pathUrl: 'https://swallow-234.github.io/swallow_234/《聖光教教主》/倉庫/清單/公眾人物-張啓楷_1962-12-21.html', area: ' 優良', category: ' Ⅰ發現問題', title: ' 張啓楷_1962-12-21', rarity: ' ★★★☆☆', prefix: ' 問題', suffix: ' 清流人才+1' },
    { date: '1997-08-24', path: '⛨', pathUrl: '#', area: ' 《圓桌騎士》', category: ' 《天啟降臨》', title: ' 迷途的羔羊...', rarity: ' 根源', prefix: ' 真小人', suffix: ' 此間最邪惡之存在' },
    { date: '日期', path: '章節/輿圖', pathUrl: 'https://swallow-234.github.io/swallow_234/%E5%85%AC%E4%BD%88%E6%AC%84', area: '系列勢力', category: '主題 ', title: '標題 ', rarity: '稀有度 ', prefix: '前綴 ', suffix: '後綴 ' }
];
const workData2 = [...workData].sort((a, b) => {
        return b.date.localeCompare(a.date);
    });