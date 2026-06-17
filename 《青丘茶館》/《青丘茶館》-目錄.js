// sidebar.js
const sidebarContent = `
<a href="https://swallow-234.github.io/swallow_234/%E5%85%AC%E4%BD%88%E6%AC%84">首頁</a>
    <h1 style="text-align: center;">《青丘茶館》</h1><hr class="b005">
    <ul>
         <li><a href="《青丘茶館》.html">公佈欄</a></li>
         <li><a onclick="changeIframe('《青丘茶館》-範本.html')">當前紀錄</a></li>
         <li><a onclick="changeIframe('關於我.html')">關於我</a></li>
         <li><a onclick="changeIframe('性癖喜好.html')">性癖喜好</a></li>
         <li><a href="呆呆病院.html">呆呆病院</a></li>
         <li><a href="https://sites.google.com/view/swallow19970824/%E9%A6%96%E9%A0%81">生活紀錄</a></li>
         <li><a href="../［收藏］/音樂收藏.html">音樂收藏</a></li>
         <li><a href="我婆清單.html">我婆清單</a></li>
         <li><a onclick="changeIframe('動漫小說遊戲收藏清單.html')">動漫小說遊戲收藏清單</a></li>
         <li><a onclick="changeIframe('語錄收藏.html')">語錄收藏</a></li>
        
    <h3 style="text-align: center;">《2026》</h3><hr class="a001">
        <li><a href="https://gemini.google.com/share/9f3ec3ba51da">引導式的盲從</a></li>
        <li><a href="https://www.facebook.com/media/set/?vanity=SwallowRWBY&set=a.36644656955132747">《竺園莊園2026/05/24》</a></li>
        <li><a href="https://www.facebook.com/media/set/?set=a.36582181518046958">《鄒族逐鹿劇場2026/05/24》</a></li>
        <li><a onclick="changeIframe('倉庫/台灣共和國：起源.html')">台灣共和國：起源</a></li>    
        <li><a href="https://gemini.google.com/share/c1062ac5a9ca">善的全面總攻：獨裁政權瓦解的徵兆</a></li>
        <li><a href="https://gemini.google.com/share/d1883d60174f">微光碎星：政治事件的策略性分析</a></li>
        <li><a href="https://gemini.google.com/share/4956047b1815">［個體與組織］歸屬感：定義、來源與重要性</a></li>
        <li><a href="https://gemini.google.com/share/925904c9ec4f">［科技與昇華］EFSA 報告：萊克多巴胺安全性評估</a></li>
        <li><a href="https://gemini.google.com/share/07ba70390903">病毒與音波</a></li>
        <li><a href="https://gemini.google.com/share/b34acd897b6d">彌勒之道-覺察錯誤：從內在價值觀出發</a></li>
    <h3 style="text-align: center;">《2025》</h3><hr class="a001">
        <li><a onclick="changeIframe('倉庫/碎碎念-2025年.html')">碎碎念-2025年</a></li>
        <li><a href="https://gemini.google.com/share/39ee3b6b61df">紫薇聖人：預言中的救世主</a></li>
          <h3 style="text-align: center;">《2017》</h3><hr class="a001">
        <li><a onclick="changeIframe('https://swallow-234.github.io/swallow_234/%E3%80%8A%E9%9D%92%E4%B8%98%E8%8C%B6%E9%A4%A8%E3%80%8B/%E5%80%89%E5%BA%AB/2017%E5%B9%B403%E6%9C%88%E6%94%B6%E8%97%8F%E8%AA%9E%E9%8C%84-1.html')">2017年03月收藏語錄-1</a></li>
</ul><hr class="a001">
`;

// 自動填充到頁面中
document.addEventListener("DOMContentLoaded", function() {
    const nav = document.getElementById('mySidenav');
    if (nav) {
        nav.innerHTML = sidebarContent;
    }
});