// sidebar.js
const sidebarContent = `
<a href="https://swallow-234.github.io/swallow_234/%E5%85%AC%E4%BD%88%E6%AC%84">首頁</a>
    <h1 style="text-align: center;">《小破帳》</h1>
    <p><ul>
        <li>玉山銀行(ESUNTWTP)：808</li>
        <li>戶名：彭楷儒</li>
        <li>存戶帳號：0691-976-034236</li>
        <li>備註：《阿呆小破棧》</li><hr class="b005">
    <ul>
         <li><a href="《啊呆小破棧》.html">公佈欄</a></li>
         <li><a onclick="changeIframe('《啊呆小破棧》-範本.html')">近期上架</a></li>
         <li><a onclick="changeIframe('《啊呆小破棧》-文字宣傳.html')">文字宣傳</a></li>
         <li><a href="https://discord.gg/zVK75Uc2EF">呆呆廣場</a></li>
    <h3 style="text-align: center;">《書籍》</h3>
        <li><a>電子書</a></li><hr class="a001">
        <li><a href="https://swallow-234.github.io/swallow_234/%E3%80%8A%E5%95%8A%E5%91%86%E5%B0%8F%E7%A0%B4%E6%A3%A7%E3%80%8B/%E3%80%8A%E9%9D%92%E4%B8%98%E5%AD%B8%E9%99%A2%E3%80%8B.pdf">《青丘書館》</a></li>
      <hr class="a001"></ul></p>        
</ul><hr class="a001">
`;

// 自動填充到頁面中
document.addEventListener("DOMContentLoaded", function() {
    const nav = document.getElementById('mySidenav');
    if (nav) {
        nav.innerHTML = sidebarContent;
    }
});