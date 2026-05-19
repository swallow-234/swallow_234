// 1. 【自動生成函式】改為接收 data 參數，放在最外層
function renderWorks(data = workData) {
    const container = document.getElementById('grid-container');
    const template = document.getElementById('card-template');

    // 清空現有的卡片
    container.innerHTML = '';

    if (data.length === 0) {
            container.innerHTML = '<p style="color: #999; text-align: center; width: 100%; grid-column: 1/-1;">無相關的資料...</p>';
            return;
        }

    // 使用傳進來的 data (過濾後或原始資料) 進行渲染
    data.forEach(item => {
        const clone = template.content.cloneNode(true);
        const card = clone.querySelector('.work-card');
        const img = clone.querySelector('img');
        const cat = clone.querySelector('.category');

        img.src = item.imgUrl;
        img.alt = item.title;
        cat.textContent = item.category;

        card.onclick = function() {
            showDetail(item.title, item.author, item.desc, item.date, item.tool, item.size, item.imgUrl);
        };

        container.appendChild(clone);
    });
}

// 2. 【搜尋功能】
function filterData() {
    const keyword = document.getElementById('searchInput').value.toLowerCase();
    const filter = document.getElementById('categoryFilter').value;

    // 過濾原始資料
    const filteredData = workData.filter(item => {
        const matchesKeyword = 
            item.title.toLowerCase().includes(keyword) ||
            item.author.toLowerCase().includes(keyword) ||
            item.desc.toLowerCase().includes(keyword) ||
            item.date.toLowerCase().includes(keyword) ||
            item.tool.toLowerCase().includes(keyword) ||
            item.category.toLowerCase().includes(keyword);

        const matchesFilter = (filter === "" || item.category === filter);
        return matchesKeyword && matchesFilter;
    });

    // 關鍵：執行渲染函式，並把過濾後的資料丟進去
    renderWorks(filteredData); 
}

// 3. 【初始化】當網頁載入完成後執行第一次渲染
document.addEventListener('DOMContentLoaded', () => {
    renderWorks(workData);
});