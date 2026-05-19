// 卡片式-圖卡-點擊放大遮罩
function showDetail(name, author, desc, date, soft, size, imgSrc) {
    //顯示或隱藏
    document.getElementById('detail-box').style.display = 'block';
    document.getElementById('info-hint').style.display = 'none';
    //數據參數
    document.getElementById('p-name').innerText = name;
    document.getElementById('p-author').innerText = author;
    document.getElementById('p-desc').innerText = desc;
    document.getElementById('p-date').innerText = date;
    document.getElementById('p-soft').innerText = soft;
    document.getElementById('p-size').innerText = size;
    // 2. 觸發全螢幕放大
    document.getElementById('lightbox-img').src = imgSrc;
    document.getElementById('lightbox').style.display = 'flex';
}
