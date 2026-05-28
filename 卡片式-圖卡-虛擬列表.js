const container = document.querySelector('.grid-container'); // 可視容器
const columnsCount = 4; // 一排固定 4 個圖卡
const totalItems = workData.length; // 總資料筆數
const totalRows = Math.ceil(totalItems / columnsCount); // 總列數

// 1. 建立一個隱形的超長容器，用來撐開捲軸
const phantom = document.createElement('div');
phantom.style.width = '100%';
phantom.style.position = 'relative';
container.appendChild(phantom);

// 2. 定義一個「動態計算高度」的公式
function getDynamicItemHeight() {
    // 算出當前一整排（100%）在螢幕上是多少像素
    const containerWidth = container.clientWidth; 
    
    // 扣掉你可能設定的 gap（間距），這裡假設間距微乎其微。
    // 單張卡片的寬度 = 容器總寬除以 4
    const currentItemWidth = containerWidth / columnsCount; 
    
    // 根據 CSS 的 aspect-ratio: 4 / 3 算出當前最精確的高度！
    return currentItemWidth * (3 / 4); 
    }

// 3. 實時更新隱形容器的高度（初次載入，以及視窗大小改變時都要更新）
function updatePhantomHeight() {
    const itemHeight = getDynamicItemHeight();
    phantom.style.height = `${totalRows * itemHeight}px`;
    }
    updatePhantomHeight();
    window.addEventListener('resize', updatePhantomHeight); // 當瀏覽器視窗縮放時，重新計算總高度

    // 4. 監聽滾動事件
    container.addEventListener('scroll', () => {
    const scrollTop = container.scrollTop;
    
    // 每次滾動時，都抓取此時此刻最精確的卡片高度
    const itemHeight = getDynamicItemHeight();
    
    // 以下邏輯不變，但裡面的 itemHeight 變成了會隨著視窗伸縮的聰明數值！
    const startRow = Math.floor(scrollTop / itemHeight);
    const startIndex = startRow * columnsCount;
    
    const visibleRows = Math.ceil(container.clientHeight / itemHeight);
    const visibleCount = visibleRows * columnsCount;
    const endIndex = startIndex + visibleCount + (columnsCount * 2);

    const visibleData = workData.slice(startIndex, endIndex);
    
    // 丟給渲染函式
    renderVirtualCards(visibleData, startRow * itemHeight, itemHeight);});