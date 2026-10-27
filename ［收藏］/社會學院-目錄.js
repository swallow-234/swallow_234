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
    <details><summary>《社會學》</summary> <!--待整理。 -->
    <li><a href="https://www.youtube.com/@ourislandTAIWAN/videos">公共電視-我們的島</a></li>
    <li><a href="https://www.youtube.com/@Notorious_3cm/videos">館長惡名昭彰</a></li>
    <li><a href="https://www.youtube.com/@KC-Huang/videos">黃國昌</a></li>
    <li><a href="https://www.youtube.com/@Team__KP/videos">柯文哲</a></li>
    <li><a href="https://www.youtube.com/@bensanjpn/videos">Ben桑日本漫談</a></li>
    <li><a href="https://e-info.org.tw/">環境資訊中心</a></li>
    <li><a href="https://www.youtube.com/c/%E9%BB%91%E7%9A%AE_chin_an/videos">蔡黑皮</a></li>
    <li><a href="https://www.youtube.com/@icypenguinTFC/videos">企鵝交通手札</a></li>
    <li><a href="https://www.youtube.com/@twcode158/videos">台灣解碼中</a></li>
    <li><a href="https://www.youtube.com/@engineerViewPolitics/videos">工程師看政治</a></li>
    <li><a href="https://www.youtube.com/@ExtremelyUnreasonable/videos">洪寶寶看台灣怪咖</a></li>
    <li><a href="https://www.youtube.com/@supernewgo/videos">牛叔雜貨店 SUPER NEWGO</a></li>
    <li><a href="https://www.facebook.com/ReTWRoad">標線改造台灣路 Reform Taiwan Roads</a></li>
    <li><a href="https://www.youtube.com/@%E5%BB%96%E9%9C%87%E8%80%81%E5%B8%AB/videos">廖震老師</a></li>
    <li><a href="https://www.youtube.com/@judicial_revolution_party/shorts">司法改革黨</a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
</details>

<hr class="a001">
<details><summary>《吹哨者》</summary> <!--發現問題+建議方法-->
    <li><a href="https://www.youtube.com/@Team__KP/videos">柯文哲</a></li>
    <li><a href="https://www.youtube.com/@KC-Huang/videos">黃國昌</a></li>
    <li><a href="https://www.facebook.com/ironprofessorchan">陳椒華</a></li>
    <li><a href="https://www.youtube.com/@%E9%AB%98%E8%99%B9%E5%AE%89">高虹安</a></li>
    <li><a href="https://www.facebook.com/GovWatchA">監督施政聯盟</a></li>
    <li><a href="https://www.youtube.com/@followxiaofei/videos">Xiaofei小飛</a></li>
    <li><a href="https://www.youtube.com/@jasonleetaiwan/videos">Jason Lee in Taiwan - 李源生</a></li>
    <li><a href="https://www.facebook.com/chen.jin.chuan.441889/">陳盡川</a></li>
    <li><a href="https://www.youtube.com/@%E5%BC%B5%E5%95%93%E6%A5%B7">張啓楷(張啟楷)</a></li>
    <li><a href="https://www.youtube.com/@ourislandTAIWAN/videos">公共電視-我們的島</a></li>
    <li><a href="https://www.facebook.com/liang.wen.tao.879135">梁文韜</a></li>
    <li><a href="https://www.youtube.com/@Chung-Ming-Wang">王忠銘</a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    </details>

<hr class="a001">
<details><summary>《台灣[Taiwan]》</summary> <!--社會貢獻+建議方法-->
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