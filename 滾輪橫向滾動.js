document.addEventListener("DOMContentLoaded", () => {

    // 1. 取得特定的橫向容器
    const horizontalBox = document.querySelector('.boxhhh');
    // 加上一個「保險檢查」，防止抓不到元素時崩潰
    if (horizontalBox) {
        // 2. 針對該容器綁定滾輪事件
        horizontalBox.addEventListener('wheel', (evt) => {
            // 檢查該容器是否可以橫向捲動 (內容寬度 > 容器寬度)
            // 如果內容沒有溢出，就維持預設縱向滾動，不攔截
            if (horizontalBox.scrollWidth <= horizontalBox.clientWidth) {
                return;
            }

            // 攔截預設的垂直捲動行為
            evt.preventDefault();

            // 將垂直滾動力道 (deltaY) 轉嫁給水平位移 (scrollLeft)
            horizontalBox.scrollLeft += evt.deltaY;

        }, { passive: false }); // 必須設定為 false 才能成功攔截 preventDefault
    } else {
        console.error("錯誤：找不到 class 為 .boxhhh 的容器，請檢查 HTML 標籤。");
    }
});