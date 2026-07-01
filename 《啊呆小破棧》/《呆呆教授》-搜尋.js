// 2. 渲染函式：負責把資料倒進指定的表格裡
function renderTable(data, tbodyId) {
    const tbody = document.getElementById(tbodyId);
    tbody.innerHTML = ''; // 清空舊內容

    if (data.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; color:var(--A021A);">《呆呆教授》正在發呆中．．．</td></tr>`;
        return;
    }

    data.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${item.date}</td>
            <td><a href="${item.pathUrl}">${item.path}</a></td>
            <td>${item.area}</td>
            <td>${item.category}</td>
            <td>${item.title}</td>
            <td class="rare-${item.rarity}">${item.rarity}</td>
            <td>${item.prefix}</td>
            <td>${item.suffix}</td>
        `;
        tbody.appendChild(tr);
    });
}

// 3. 核心搜查篩選與表格切換功能
function filterData() {
    // 獲取所有輸入欄位的值
    const keyword = document.getElementById('searchInput').value.trim().toLowerCase();
    const area = document.getElementById('areaFilter').value;
    const cat = document.getElementById('catFilter').value;
    const rarity = document.getElementById('rarityFilter').value;
    const prefix = document.getElementById('prefixFilter').value;
    const suffix = document.getElementById('suffixFilter').value;

    // 🌟 判斷當前是否處於「有進行搜尋/篩選」的狀態
    const isSearching = (keyword !== "" || area !== "" || cat !== "" || rarity !== "" || prefix !== "" || suffix !== "");

    // 抓取三大區塊與教授狀態元件
    const profStatus = document.getElementById('professor-status');
    const secTable1 = document.getElementById('section-table1');
    const secTable2 = document.getElementById('section-table2');
    const secResults = document.getElementById('section-search-results');

    if (!isSearching) {
        // 【尚未搜尋狀態】
        profStatus.innerText = "《呆呆教授》正在發呆中．．．";
        profStatus.style.color = "#f0883e";
        
        // 顯示表格1、2，隱藏結果表格
        secTable1.classList.remove('hidden');
        secTable2.classList.remove('hidden');
        secResults.classList.add('hidden');
    } else {
        // 【搜尋/篩選進行中狀態】
        profStatus.innerText = "呆呆叫！";
        profStatus.style.color = "#ff453a"; // 叫的時候變紅色字！
        
        // 隱藏表格2，顯示結果表格 (表格1 保留或隱藏可依個人喜好，這裡依規範顯示結果表並隱藏表2)
        secTable2.classList.add('hidden');
        secResults.classList.remove('hidden');

        // 開始進行多重過濾
        const filtered = workData2.filter(item => {
            // 文字模糊搜尋：檢查標題、前綴、後綴等欄位
            const matchesKeyword = 
                item.title.toLowerCase().includes(keyword) ||
                item.prefix.toLowerCase().includes(keyword) ||
                item.suffix.toLowerCase().includes(keyword) ||
                item.path.toLowerCase().includes(keyword);

            // 下拉選單精準篩選
            const matchesArea = (area === "" || item.area === area);
            const matchesCat = (cat === "" || item.category === cat);
            const matchesRarity = (rarity === "" || item.rarity === rarity);
            const matchesPrefix = (prefix === "" || item.prefix === prefix);
            const matchesSuffix = (suffix === "" || item.suffix === suffix);

            // 所有條件必須同時滿足 (&&)
            return matchesKeyword && matchesArea && matchesCat && matchesRarity && matchesPrefix && matchesSuffix;
        });

        // 將篩選完的資料丟進結果表格渲染
        renderTable(filtered, 'results-body');
    }
}

// 3-0. 下拉選單【連動核心函式】
function updateCategories() {
    const areaValue = document.getElementById('areaFilter').value;
    const catSelect = document.getElementById('catFilter');

    // 先把第二層完全清空，只留下最上面的「主題」預設提示欄
    catSelect.innerHTML = '<option value="">主題</option>';

    let targetList = [];

    if (areaValue === "") {
        // 情況 A：如果使用者選了「系列勢力（沒選特定勢力）」，就載入「全部主題」
        targetList = allCategories;
    } else {
        // 情況 B：根據選中的勢力，去對照表撈出對應的小弟清單。如果沒撈到，就給空陣列 []
        targetList = categoryMap[areaValue] || [];
    }

    // 將撈出來的清單，用迴圈一筆一筆做成 <option> 標籤塞進第二層選單
    targetList.forEach(catName => {
        const opt = document.createElement('option');
        opt.value = catName;
        opt.textContent = catName;
        catSelect.appendChild(opt);
    });

    // 🌟 關鍵：當第二層的清單刷新完畢後，立刻自動執行原本的篩選資料功能！
    filterData();
}


// 4. 初始化網頁載入
document.addEventListener('DOMContentLoaded', () => {
    // 一開始未搜尋前，先把完整資料庫渲染在表格 1 裡
    renderTable(workData2, 'table1-body');
});