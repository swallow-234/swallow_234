const container = document.querySelector('.boxhhh'); // 可視容器
const itemWidth = 300; // 每張卡片的固定寬度
const totalItems = workData.length; // 總資料筆數

// 1. 建立一個隱形的超長容器，用來撐開捲軸
const phantom = document.createElement('div');
phantom.style.width = `${totalItems * itemWidth}px`;
phantom.style.height = '100%';
phantom.style.position = 'relative';
container.appendChild(phantom);

// 2. 監聽滾動事件
container.addEventListener('scroll', () => {
    const scrollLeft = container.scrollLeft;
    
    // 計算當前畫面上應該顯示的「起始索引」與「結束索引」
    const startIndex = Math.floor(scrollLeft / itemWidth);
    const visibleCount = Math.ceil(container.clientWidth / itemWidth);
    const endIndex = startIndex + visibleCount + 2; // +2 作為緩衝區

    // 3. 根據索引取出資料，只渲染這個範圍內的卡片
    const visibleData = workData.slice(startIndex, endIndex);
    
    // 4. 動態更新 DOM 物件，並用絕對定位將它們推到正確的 X 軸坐標上
    renderVirtualCards(visibleData, startIndex * itemWidth);
});