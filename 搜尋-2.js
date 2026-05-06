// 搜尋與篩選邏輯
function filterData() {
    const keyword = document.getElementById('searchInput').value.toLowerCase();
    const filter = document.getElementById('categoryFilter').value;
    const cards = document.querySelectorAll('.box-link');

    cards.forEach(card => {
        const title = card.querySelector('.box-title').innerText.toLowerCase();
        const category = card.querySelector('.category').innerText;

        const isMatchKeyword = title.includes(keyword);
        const isMatchFilter = filter === "" || category.includes(filter);

        // 當兩者皆符合時才顯示
        if (isMatchKeyword && isMatchFilter) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
