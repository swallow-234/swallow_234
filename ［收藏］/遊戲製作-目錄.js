// sidebar.js
const sidebarContent = `
<a href="https://swallow-234.github.io/swallow_234/%E5%85%AC%E4%BD%88%E6%AC%84">首頁</a>
    <h1 style="text-align: center;">《導師塔》</h1>
<ul>
    <li><a onclick="changeIframe('遊戲製作-範本.html')">收藏清單</a></li>
<!--
<hr class="a001">
<details><summary>《範本》</summary>
<li><a href=""></a></li>
<li><a href=""></a></li>
<li><a href=""></a></li>
</details>
 -->
    <hr class="b005">
    <details><summary>《Godot》</summary>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    </details>
    <hr class="a001">
    <details><summary>《Unity》</summary>
    <li><a href="https://www.youtube.com/@RemptyGame">阿空的遊戲部屋</a></li>
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