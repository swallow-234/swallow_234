// 1. 初始化全域變數
window.allWorkData = [];
window.categoryMap = {};
window.allCategories = [];

// 2. 欲自動匯入的子資料庫清單
const dbFiles = [
    "公佈欄-搜尋 -資料庫.js",
    "［收藏］/英雄聯盟-搜尋 -資料庫.js",
    "［收藏］/寶可夢-搜尋 -資料庫.js",
    "《啊呆小破棧》/《呆呆教授》-搜尋 -資料庫.js",
    "《啊呆小破棧》/《公眾人物》-搜尋 -資料庫.js",
    "《啊呆小破棧》/《吟遊詩章》-搜尋 -資料庫.js",
    "《啊呆小破棧》/《鼠鼠戰團》-搜尋 -資料庫.js",
];

// 3. 透過同步請求安全讀取並解析各子資料庫
dbFiles.forEach(file => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', file, false); // 同步讀取
    try {
        xhr.send();
        if (xhr.status === 200 || xhr.status === 0) {
            const code = xhr.responseText;
            
            // 💡 關鍵升級：使用獨立的 Function 封裝，徹底隔絕 const 衝突與字串崩潰
            try {
                const parseFn = new Function(`
                    ${code}
                    return {
                        workData: typeof workData !== 'undefined' ? workData : [],
                        categoryMap: typeof categoryMap !== 'undefined' ? categoryMap : {},
                        allCategories: typeof allCategories !== 'undefined' ? allCategories : []
                    };
                `);
                
                const result = parseFn();

                // 🤖 自動合併 workData
                if (result.workData && Array.isArray(result.workData)) {
                    window.allWorkData.push(...result.workData);
                }

                // 🤖 自動合併 categoryMap (勢力與對應主題)
                if (result.categoryMap) {
                    for (const [key, val] of Object.entries(result.categoryMap)) {
                        if (!window.categoryMap[key]) {
                            window.categoryMap[key] = [];
                        }
                        if (Array.isArray(val)) {
                            window.categoryMap[key] = [...new Set([...window.categoryMap[key], ...val])];
                        }
                    }
                }

                // 🤖 自動合併 allCategories
                if (result.allCategories && Array.isArray(result.allCategories)) {
                    window.allCategories.push(...result.allCategories);
                }
            } catch (innerErr) {
                console.error("解析子資料庫內部變數失敗: " + file, innerErr);
            }
        }
    } catch (e) {
        console.error("無法載入資料庫檔案: " + file, e);
    }
});

// 對全域清單進行去重複
window.allCategories = [...new Set(window.allCategories)];

// 4. 根據頁面自訂排序（或預設排序）產生 workData2 供公佈欄-搜尋.js 使用
const defaultSort = (a, b) => b.date.localeCompare(a.date);
const pageSortFunction = window.customSortHandler || defaultSort;

var workData2 = [...window.allWorkData].sort(pageSortFunction);
window.workData2 = workData2;

// 同時掛載全域變數，確保公佈欄-搜尋.js 內的所有函式（如 updateCategories）能完美取用
var categoryMap = window.categoryMap;
var allCategories = window.allCategories;

// 5. 最後，動態載入你的「公佈欄-搜尋.js」，確保此時所有資料與變數皆已完全就緒
const mainScript = document.createElement('script');
mainScript.src = "公佈欄-搜尋.js"; // 請依你的實際相對路徑調整（如上一層用 "../公佈欄-搜尋.js"）
document.head.appendChild(mainScript);