// sidebar.js
const sidebarContent = `
<a href="https://swallow-234.github.io/swallow_234/%E5%85%AC%E4%BD%88%E6%AC%84">首頁</a>
    <h1 style="text-align: center;">《導師塔》</h1>
<ul><li><a onclick="changeIframe('生活日常-範本.html')">收藏清單</a></li>
    <!--
    <hr class="a001">
    <details><summary>《範本》</summary>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    </details>

     -->
    <hr class="b005">
    <details><summary>《生活日常》</summary>
        <li><a href="https://www.youtube.com/@dontkjoanne/videos">末羊子 dontkjoanne</a></li>
        <li><a href="https://www.youtube.com/@minimalistpaik/videos">Minimalist Paik 極簡小白</a></li>
        <li><a href="https://www.youtube.com/@NHRepair/videos">宅水電</a></li>
        <li><a href=""></a></li>
        </details>

    <hr class="a001">
    <details><summary>《裝扮造型風格》</summary>
        <li><a href="https://www.youtube.com/@ken6941/videos">KEN桑｜零貳柒髮廊與酒館</a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        </details>

    <hr class="a001">
    <details><summary>《飲食》</summary>
        <li><a href="https://www.youtube.com/@sunnymon0130/videos">晴天媽媽</a></li>
        <li><a href="https://www.youtube.com/@cooking_haru/videos">쿠킹하루 Cooking Haru :)</a></li>
        <li><a href=""></a></li>
        </details>

    <hr class="a001">
    <details><summary>《清潔打掃》</summary>
        <li><a href="https://www.youtube.com/@SatoCleaningMaster/videos">我是佐藤SATO</a></li>
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