// sidebar.js
const sidebarContent = `
<a href="https://swallow-234.github.io/swallow_234/%E5%85%AC%E4%BD%88%E6%AC%84">首頁</a>
    <h1 style="text-align: center;">《心得筆記》</h1>
    <ul>
        <li><a onclick="changeIframe('程式語言-範本.html')">收藏項目</a></li>
<hr class="b005">

    <details><summary>《導師塔》</summary>
    <li><a href="https://steam.oxxostudio.tw/">STEAM 教育學習網</a></li>
    <li><a href="https://www.youtube.com/@KevinPowell/videos">Kevin Powell</a></li>
    <li><a href="https://css-tricks.com/">CSS-Tricks - A Website About Making Websites</a></li>
    <li><a href="https://www.freecodecamp.org/learn">Learn to Code — For Free — Coding Courses for Busy People</a></li>
    <li><a href="https://developer.mozilla.org/zh-TW/">MDN Web Docs</a></li>
    <li><a href="https://www.youtube.com/@Proladon/videos">Proladon</a></li>
    <li><a href="https://www.w3.org/Style/CSS/">Cascading Style Sheets</a></li>
    <li><a href="https://www.w3schools.com/">w3schools 百科手冊</a></li>
    <li><a href="https://docs.python.org/zh-tw/3/">python手冊</a></li>
    <li><a href="https://whatwg.org/">HTML手冊</a></li>
    <li><a href="https://www.youtube.com/@cs50/playlists">CS50</a></li>
    <li><a href="https://packagecontrol.io/">Package Control</a></li>
    <li><a href="https://discordpy.readthedocs.io/en/stable/index.html">discord.py</a></li>
    <li><a href="https://learn.microsoft.com/zh-tw/windows-server/administration/windows-commands/windows-commands">Windows 命令</a></li>
    <li><a href="https://www.youtube.com/@GrandmaCan/videos">GrandmaCan -我阿嬤都會</a></li>
    <li><a href="https://www.youtube.com/@CodeShiba/playlists">CodeShiba 程式柴</a></li>
    <li><a href="https://web.ntnu.edu.tw/~algo/">演算法筆記</a></li>
    <li><a href="https://www.youtube.com/@sdwuntnu/playlists">吳順德</a></li>
    <li><a href="https://www.youtube.com/channel/UCguZS-y7codLSt6vpkVdnKg/videos">彭彭的課程</a></li>
    <li><a href="https://www.youtube.com/@KenYiLee/playlists">Feis Studio</a></li>
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
    </details><hr class="a001">
<h3 style="text-align: center;">《AutoHotkey》</h3><hr class="a001">
    <li><a onclick="changeIframe('倉庫/程式語言-AutoHotkey-滑鼠連點器.html')">程式語言-AutoHotkey-滑鼠連點器</a></li>
    <li><a onclick="changeIframe('倉庫/程式語言-AutoHotkey-圖片下載.html')">程式語言-AutoHotkey-圖片下載</a></li>
    <li><a onclick="changeIframe('倉庫/程式語言-AutoHotkey-自動幻燈片.html')">程式語言-AutoHotkey-自動幻燈片</a></li>
    <li><a onclick="changeIframe('倉庫/程式語言-AutoHotkey-腳本循環範本.html')">程式語言-AutoHotkey-腳本循環範本</a></li>
<h3 style="text-align: center;">《Python》</h3><hr class="a001">
    <li><a onclick="changeIframe('倉庫/程式語言-Python-網頁瀏覽器 .html')">程式語言-Python-網頁瀏覽器</a></li>
    <li><a onclick="changeIframe('倉庫/程式語言-Python-圖片瀏覽器.HTML')">程式語言-Python-圖片瀏覽器</a></li>
    <li><a onclick="changeIframe('倉庫/程式語言-Python-圖片篩選器.HTML')">程式語言-Python-圖片篩選器</a></li>
    <li><a onclick="changeIframe('倉庫/程式語言-Python-圖片下載器.HTML')">程式語言-Python-圖片下載器</a></li>
    <li><a onclick="changeIframe('倉庫/程式語言-Python-檔案命名.html')">檔案命名</a></li>
    <li><a onclick="changeIframe('倉庫/程式語言-python-影片切割.html')">影片切割</a></li>
    <li><a onclick="changeIframe('倉庫/程式語言-Python-自訂義辭典.html')">自訂義辭典</a></li>
    <li><a onclick="changeIframe('倉庫/程式語言-Python-圖片轉GIF.html')">圖片轉GIF</a></li>
    <li><a onclick="changeIframe('倉庫/程式語言-Python-youtube影片下載.html')">youtube影片下載</a></li>
    <li><a onclick="changeIframe('倉庫/程式語言-Python-x影片下載 .html')">x影片下載</a></li>
<h3 style="text-align: center;">《命令提示字元》</h3><hr class="a001">
    <li><a onclick="changeIframe('倉庫/程式語言-命令提示字元-影片下載.html')">影片下載</a></li>
    <li><a onclick="changeIframe('倉庫/程式語言-命令提示字元-youtube影片下載.html')">youtube影片下載</a></li>
<h3 style="text-align: center;">《網頁程式》</h3><hr class="a001">
    <li><a onclick="changeIframe('倉庫/程式語言-靜態頁面搜尋.html')">靜態頁面搜尋</a></li>
    <li><a onclick="changeIframe('倉庫/程式語言-靜態分頁.html')">靜態分頁</a></li>
    <li><a onclick="changeIframe('倉庫/程式語言-重複選單-物件內容輸出.html')">重複選單/物件內容輸出</a></li>
</ul><hr class="a001">
`;

// 自動填充到頁面中
document.addEventListener("DOMContentLoaded", function() {
    const nav = document.getElementById('mySidenav');
    if (nav) {
        nav.innerHTML = sidebarContent;
    }
});