// 卡片式-圖卡【自動生成函式】
class WaifuCard extends HTMLElement {
    // 當組件被放到網頁上時觸發
    connectedCallback() {
        // 取得 HTML 屬性 (Attributes) 傳進來的資料
        const name = this.getAttribute('name') || '未知角色';
        const img = this.getAttribute('img') || '';
        const link = this.getAttribute('link') || '#';
        const link2 = this.getAttribute('link2') || '#2';
        const category = this.getAttribute('category') || '';

        // 直接寫入組件的 HTML (不用 shadowRoot)
        this.innerHTML = `
            <article class="box">
                <img src="${img}" loading="lazy" alt="${name}">
                <span style="display:none;" class="category">${category}</span>
                <h1>
                    <a href="${link}">☯</a>
                    <a href="${link2}">${name}</a>
                </h1>
            </article>
        `;
    }
}

// 4. 向瀏覽器註冊這個全新標籤：名稱必須要有「橫線 -」以防跟原生標籤衝突
customElements.define('waifu-card', WaifuCard);