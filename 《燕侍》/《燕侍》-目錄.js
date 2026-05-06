// sidebar.js
const sidebarContent = `
<a href="https://swallow-234.github.io/swallow_234/%E5%85%AC%E4%BD%88%E6%AC%84">首頁</a>
<h1 style="text-align: center;">《冥亡伊甸》</h1>
<ul>
    <li><a onclick="changeIframe('《燕侍》-近期更新.html')">近期更新</a></li>
    <li><a onclick="changeIframe('《燕侍》-公佈欄.html')">當前紀錄</a></li>
<hr class="b005">
<h3 style="text-align: center;">《青丘之燕》</h3><hr class="a001">
    <li><a onclick="changeIframe('倉庫/故事章節-_《青丘之燕》_好人.html')">好人</a></li>
    <li><a onclick="changeIframe('倉庫/故事章節-_《青丘之燕》_偷竊.html')">偷竊</a></li>
    <li><a onclick="changeIframe('倉庫/#.html')"></a></li>
<h3 style="text-align: center;">《虛擬人生》</h3><hr class="a001">
    <li><a onclick="changeIframe('倉庫/故事章節-_《虛擬人生》_初始.html')">初始</a></li>
    <li><a onclick="changeIframe('倉庫/#.html')"></a></li>
    <li><a onclick="changeIframe('倉庫/#.html')"></a></li>
    <li><a onclick="changeIframe('倉庫/#.html')"></a></li>
    <li><a onclick="changeIframe('倉庫/#.html')"></a></li>
<h3 style="text-align: center;">《遺跡先遣隊》</h3><hr class="a001">
    <li><a onclick="changeIframe('倉庫/故事章節-_《遺跡先遣隊》_風與草.html')">風與草</a></li>
    <li><a onclick="changeIframe('倉庫/#.html')"></a></li>

<h3 style="text-align: center;">【其他彙整】</h3>
<hr class="a001">
    <details><summary>休閒日常</summary>
    <li><a onclick="changeIframe('倉庫/休閒日常-散文-2021_11_19.html')">散文-2021_11_19</a></li>
    <li><a onclick="changeIframe('倉庫/休閒日常-蚊子.html')">蚊子</a></li>
    <li><a onclick="changeIframe('倉庫/#.html')"></a></li>
    <li><a onclick="changeIframe('倉庫/#.html')"></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    </details>
    <hr class="a000">
    <details><summary>二次創作</summary>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    </details>
    <hr class="a000">
    <details><summary>練習紀錄</summary>
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