function renderWorks(data = workData) {
    const container = document.getElementById('boxhhh');
    container.innerHTML = ''; // 清空容器

    data.forEach(item => {
        // 1. 直接建立你的自訂組件標籤
        const card = document.createElement('waifu-card');
        
        // 2. 把資料庫的值，當作屬性塞給組件
        card.setAttribute('name', item.title);     // 假設你的角色名稱在 title
        card.setAttribute('img', item.imgUrl);
        card.setAttribute('link', '#');            // 你的連結位置
        card.setAttribute('link2', '#2');            // 你的連結位置
        card.setAttribute('category', item.category);

        // 3. 丟進容器裡，瀏覽器就會自動去跑組件內部的 connectedCallback
        container.appendChild(card);
    });
}