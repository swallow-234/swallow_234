// sidebar.js
const sidebarContent = `
<a href="https://swallow-234.github.io/swallow_234/%E5%85%AC%E4%BD%88%E6%AC%84">首頁</a>
<h1 style="text-align: center;">《導師塔》</h1>
<ul><li><a onclick="changeIframe('人生哲學-範本.html')">收藏清單</a></li>
    <!--
    <hr class="a001">
    <details><summary>《範本》</summary>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    </details>
     -->
    <hr class="b005">
    <details><summary>《人生哲學》</summary>
        <li><a href="https://www.youtube.com/channel/UCWDaU-qRXrZcUQYDRv2asvw/videos">艾爾文</a></li>
        <li><a href="https://www.youtube.com/@JRLeeRadio">JR Lee Radio</a></li>
        <li><a href="https://www.youtube.com/@teacherOya/videos">歐耶老師</a></li>
        <li><a href="https://www.youtube.com/playlist?list=PLeGq5a9wTGUokN5_JxcQveTkT8uhWuh4a">莊子&蔡璧名老師</a></li>
        <li><a href="https://www.youtube.com/@readingoutpost">下一本讀什麼？</a></li>
        <li><a href="https://www.youtube.com/@koob">啟點文化</a></li>
        <li><a href="https://www.youtube.com/@da.ren.cademy">大人學</a></li>
        <li><a href="https://www.youtube.com/channel/UCSaNMML9AAXTN4142jD-dxw">Sadhguru 繁體中文</a></li>
        <li><a href="https://www.youtube.com/channel/UC-qwAKnBVzUlbNwol3UCZIA">Wisdom Bread 智慧麵包</a></li>
        <li><a href="https://www.youtube.com/playlist?list=PLyYI2fZBFmkJ_BexsbccX0Mq_Boof0DVI">聽天下：天下雜誌Podcast</a></li>
        <li><a href="https://www.youtube.com/channel/UCPgGtH2PxZ9xR0ehzQ27FHw/videos">文森說書</a></li>
        <li><a href="https://www.youtube.com/@Jackalchatnlp/videos">人生解扣方程式</a></li>
        <li><a href="https://www.youtube.com/@NeKo_Wumiao/videos">NeKo嗚喵</a></li>
        <li><a href="https://www.youtube.com/@WeisWay/videos">維思維WeisWay</a></li>
        <li><a href="https://www.youtube.com/@amogoodfun/videos">谷阿莫爽發就發</a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        </details>

    <hr class="a001">
    <details><summary>《戀愛研究院》</summary>
        <li><a href="https://www.youtube.com/@ououyu/videos">凹凹u彤葳</a></li>
        <li><a href="https://www.youtube.com/@beckbook1/videos">貝克書</a></li>
        <li><a href="https://www.youtube.com/@intimacylab/videos">性致聊研究室</a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        </details>

    <hr class="a001">
    <details><summary>《商學院》</summary>
        <li><a href="https://www.youtube.com/@jbs_school/videos">JBS商學院 | 創業升級攻略</a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        </details>
</ul><hr class="a001">
`;

// 自動填充到頁面中
document.addEventListener("DOMContentLoaded", function() {
    const nav = document.getElementById('mySidenav');
    if (nav) {
        nav.innerHTML = sidebarContent;
    }
});