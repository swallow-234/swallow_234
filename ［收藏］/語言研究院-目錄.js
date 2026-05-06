// sidebar.js
const sidebarContent = `
<a href="https://swallow-234.github.io/swallow_234/%E5%85%AC%E4%BD%88%E6%AC%84">首頁</a>
    <h1 style="text-align: center;">《導師塔》</h1>
<ul>
    <li><a onclick="changeIframe('語言研究院-範本.html')">收藏清單</a></li>
    <!--
    <hr class="a001">
    <details><summary>《範本》</summary>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    </details>
    
     -->
    <hr class="b005">
    <details><summary>《中文》</summary>
    <li><a href="https://language.moe.gov.tw/index">教育部 語文成果網</a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    </details>

    <hr class="a001">
    <details><summary>《英文》</summary>
    <li><a href="https://www.youtube.com/@VooksStorybooks/playlists">Vooks - Stories and Read Alouds for Kids</a></li>
    <li><a href="https://www.youtube.com/@ComprehensibleEnglish/playlists">English Comprehensible Input for ESL Beginners</a></li>
    <li><a href="https://www.youtube.com/@BrightlyStorytime">Brightly Storytime</a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    </details>

    <hr class="a001">
    <details><summary>《日文》</summary>
    <li><a href="https://www.youtube.com/@yesjap568/videos">何必日語</a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    </details>

</ul>
    <hr class="a001">
`;

// 自動填充到頁面中
document.addEventListener("DOMContentLoaded", function() {
    const nav = document.getElementById('mySidenav');
    if (nav) {
        nav.innerHTML = sidebarContent;
    }
});