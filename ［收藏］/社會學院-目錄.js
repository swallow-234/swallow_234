// sidebar.js
const sidebarContent = `
<a href="https://swallow-234.github.io/swallow_234/%E5%85%AC%E4%BD%88%E6%AC%84">首頁</a>
    <h1 style="text-align: center;">《導師塔》</h1>
<ul>
    <li><a onclick="changeIframe('社會學院-範本.html')">收藏清單</a></li>
<!--
<hr class="a001">
<details><summary>《範本》</summary>
<li><a href=""></a></li>
<li><a href=""></a></li>
<li><a href=""></a></li>
</details>
 -->
<hr class="b005">
    <details><summary>《社會學》</summary>
    <li><a href="https://www.youtube.com/@bitking888/videos">Bit King比特王出任務</a></li>
    <li><a href="https://www.youtube.com/@ourislandTAIWAN/videos">公共電視-我們的島</a></li>
    <li><a href="https://www.youtube.com/@mdddj/videos">街頭有派對</a></li>
    <li><a href="https://www.youtube.com/@Notorious_3cm/videos">館長惡名昭彰</a></li>
    <li><a href="https://www.youtube.com/@Guovision-TV/videos">郭正亮頻道</a></li>
    <li><a href="https://www.youtube.com/@user-truthteller/videos">邏輯思考 x 有一說一</a></li>
    <li><a href="https://www.youtube.com/@street-mic/streams">街頭麥克風</a></li>
    <li><a href="https://www.youtube.com/@bensanjpn/videos">Ben桑日本漫談</a></li>
    <li><a href="https://www.youtube.com/@taiwanq666">《Q時台灣》</a></li>
    <li><a href="https://www.youtube.com/@in-door-plus/videos">內門普拉斯</a></li>
    <li><a href="https://www.youtube.com/@impolite_tw/videos">不禮貌鄉民團</a></li>
    <li><a href="https://e-info.org.tw/">環境資訊中心</a></li>
    <li><a href="https://www.youtube.com/@omgoosetw/videos">老天鵝娛樂</a></li>
    <li><a href="https://www.youtube.com/@EtvOrgTwhome/videos">eTV行動傳媒</a></li>
    <li><a href="https://www.youtube.com/@tvbsfocus/videos">Focus全球新聞</a></li>
    <li><a href="https://www.youtube.com/c/%E9%BB%91%E7%9A%AE_chin_an/videos">蔡黑皮</a></li>
    <li><a href="https://www.youtube.com/@icypenguinTFC/videos">企鵝交通手札</a></li>
    <li><a href="https://www.youtube.com/@twcode158/videos">台灣解碼中</a></li>
    <li><a href="https://www.youtube.com/@engineerViewPolitics/videos">工程師看政治</a></li>
    <li><a href="https://www.youtube.com/@%E6%B4%9B%E7%8B%97">洛狗</a></li>
    <li><a href="https://www.youtube.com/@ExtremelyUnreasonable/videos">洪寶寶看台灣怪咖</a></li>
    <li><a href="https://www.youtube.com/@supernewgo/videos">牛叔雜貨店 SUPER NEWGO</a></li>
    <li><a href="https://www.facebook.com/ReTWRoad">標線改造台灣路 Reform Taiwan Roads</a></li>
    <li><a href="https://www.youtube.com/@Team__KP/videos">柯文哲</a></li>
    <li><a href="https://www.youtube.com/@KC-Huang/videos">黃國昌</a></li>
    <li><a href="https://www.youtube.com/@%E5%BB%96%E9%9C%87%E8%80%81%E5%B8%AB/videos">廖震老師</a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
</details>

<hr class="a001">
<details><summary>《吹哨者》</summary>
    <li><a href="https://www.youtube.com/@jasonleetaiwan/videos">Jason Lee in Taiwan - 李源生</a></li>
    <li><a href="https://www.youtube.com/@followxiaofei/videos">Xiaofei小飛</a></li>
    <li><a href="https://www.facebook.com/ironprofessorchan">陳椒華</a></li>
    <li><a href="https://www.youtube.com/@KC-Huang/videos">黃國昌</a></li>
    <li><a href="https://www.facebook.com/GovWatchA">監督施政聯盟</a></li>
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
<details><summary>《台灣[Taiwan]》</summary>
    <li><a href="https://www.youtube.com/@followxiaofei/videos">Xiaofei小飛</a></li>
    <li><a href="https://www.youtube.com/@hipstermyass/videos">賈文青德仔旅遊頻道</a></li>
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