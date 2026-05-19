// 卡片式-圖卡【自動生成函式】
function renderWorks() {
    const container = document.getElementById('grid-container');
    const template = document.getElementById('card-template');

    // 清空容器（避免重複渲染）
    container.innerHTML = '';

    workData.forEach(item => {
        // 1. 複製模板內容
        const clone = template.content.cloneNode(true);
        const card = clone.querySelector('.work-card');
        const img = clone.querySelector('img');
        const cat = clone.querySelector('.category');

        // 2. 填入資料
        img.src = item.imgUrl;
        img.alt = item.title;
        cat.textContent = item.category;

        // 3. 綁定點擊事件 (自動帶入所有參數)
        card.onclick = function() {
            showDetail(
                item.title, 
                item.author, 
                item.desc, 
                item.date, 
                item.tool, 
                item.size, 
                item.imgUrl
            );
        };

        // 4. 放進網頁中
        container.appendChild(clone);
    });
}

// 當網頁載入完成後執行
document.addEventListener('DOMContentLoaded', renderWorks);