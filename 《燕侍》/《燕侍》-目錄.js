// sidebar.js
const sidebarContent = `
<a href="https://swallow-234.github.io/swallow_234/%E5%85%AC%E4%BD%88%E6%AC%84">首頁</a>
<h1 style="text-align: center;">《冥亡伊甸》</h1>
<ul>
    <li><a onclick="changeIframe('《燕侍》-公佈欄.html')">公佈欄</a></li>
<hr class="b005">
<h3 style="text-align: center;">《角色簡介》</h3><hr class="a001">
    <li><a onclick="changeIframe('倉庫/角色簡介-初始眾人.html')">初始眾人</a></li>
    <li><a onclick="changeIframe('倉庫/角色簡介-聖光教教主.html')">聖光教教主</a></li>
    <li><a onclick="changeIframe('倉庫/角色簡介-燕侍.html')">燕侍</a></li>
    <li><a onclick="changeIframe('倉庫/角色簡介-永夜暗夜.html')">永夜暗夜</a></li>
    <li><a onclick="changeIframe('倉庫/角色簡介-田中種島.html')">田中種島</a></li>
    <li><a onclick="changeIframe('倉庫/角色簡介-蔥尼斯坦.html')">蔥尼斯坦</a></li>
    <li><a onclick="changeIframe('倉庫/角色簡介-阿呆.html')">阿呆</a></li>
    <li><a onclick="changeIframe('倉庫/角色簡介-就是鼠.html')">就是鼠</a></li>

<h3 style="text-align: center;">《地域簡介》</h3><hr class="a001">
    <li>《田中的大人酒吧》</li>
    <li>《蔥尼斯坦KFC調查局》</li>
    <li><a onclick="changeIframe('倉庫/#.html')"></a></li>
    <li><a onclick="changeIframe('倉庫/#.html')"></a></li>
    <li><a onclick="changeIframe('倉庫/#.html')"></a></li>
</ul><hr class="a001">
`;

// 自動填充到頁面中
document.addEventListener("DOMContentLoaded", function() {
    const nav = document.getElementById('mySidenav');
    if (nav) {
        nav.innerHTML = sidebarContent;
    }
});