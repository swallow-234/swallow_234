// sidebar.js
const sidebarContent = `
<ul>
  <a href="https://swallow-234.github.io/swallow_234/%E5%85%AC%E4%BD%88%E6%AC%84">首頁</a>
  <h1 style="text-align: center;">《冥亡伊甸》</h1>
      <li><a onclick="changeIframe('《冥亡伊甸》-範本.html')">版本更新</a></li>

  <h3 style="text-align: center;">《基礎概念》</h3><hr class="a001">
      <li><a onclick="changeIframe('倉庫/ＱＡ問答.html')">ＱＡ問答</a></li>
      <li>格式範本</li>
      <li><a onclick="changeIframe('倉庫/任務編制.html')">任務編制</a></li>
      <li><a onclick="changeIframe('倉庫/隊伍編制.html')">隊伍編制</a></li>
      <li><a onclick="changeIframe('倉庫/旗幟編制.html')">旗幟編制</a></li>
      <li><a onclick="changeIframe('倉庫/紀錄保存.html')">紀錄保存</a></li>
      <li><a onclick="changeIframe('倉庫/基金運作.html')">基金運作</a></li>
  <h3 style="text-align: center;">《流程概念》</h3><hr class="a001">
      <li><a onclick="changeIframe('倉庫/天災救援.html')">天災救援</a></li>
      <li><a onclick="changeIframe('倉庫/攻佔據點.html')">攻佔據點</a></li>
  <h3 style="text-align: center;">《任務種類》</h3><hr class="a001">
      <li>哨兵任務</li>
      <li>偵查任務</li>
      <li>支援任務</li>
      <li>護衛任務</li>
      <li>救援任務</li>
      <li>討伐任務</li>
  <h3 style="text-align: center;">《職位單位》</h3><hr class="a001">
      <li><a onclick="changeIframe('倉庫/紀錄單位.html')">紀錄單位</a></li>
      <li>一般單位</li>
      <li>技術單位</li>
      <li>醫療單位</li>
      <li>工程單位</li>
      <li><a onclick="changeIframe('倉庫/後勤單位.html')">後勤單位</a></li>
      <li>運輸單位</li>
  <h3 style="text-align: center;">《地形環境》</h3><hr class="a001">
      <li>城市</li>
      <li>偏鄉</li>
      <li>野外</li>
      <li>山區</li>
  <h3 style="text-align: center;">《救災應變》</h3><hr class="a001">
      <li>火災</li>
      <li>水災</li>
      <li>風災</li>
      <li>旱災</li>
  <h3 style="text-align: center;">《基礎設施》</h3><hr class="a001">
      <li><a onclick="changeIframe('倉庫/浴室廁所.html')">浴室廁所</a></li>
      <li>休息站</li>
      <li>醫護站</li>
      <li>物資區</li>
      <li>寮望台</li>
  <h3 style="text-align: center;">《社群分館》</h3><hr class="a001">
      <li>Discord</li>
      <li>Facebook</li>
      <li>LINE</li>
</ul><hr class="a001">
`;

// 自動填充到頁面中
document.addEventListener("DOMContentLoaded", function() {
    const nav = document.getElementById('mySidenav');
    if (nav) {
        nav.innerHTML = sidebarContent;
    }
});