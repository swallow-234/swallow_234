// sidebar.js
const sidebarContent = `
<a href="https://swallow-234.github.io/swallow_234/%E5%85%AC%E4%BD%88%E6%AC%84">首頁</a>
<h1 style="text-align: center;">《導師塔》</h1>
<ul><li><a onclick="changeIframe('台灣民眾黨專區-範本.html')">收藏清單</a></li>
    <!--
    <hr class="a001">
    <details><summary>《範本》</summary>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    </details>
     -->
    <hr class="b005">
    <details><summary>《台灣民眾黨專區》</summary>
        <li><a href="https://www.tpp.org.tw/news">[網站]台灣民眾黨</a></li>
        <li><a href="https://www.facebook.com/TPPfanpage/">FaceBook</a></li>
        <li><a href="https://www.youtube.com/@TPP_Media">YouTube</a></li>
        <li><a href="https://www.instagram.com/tpp_taiwan/">Instagram</a></li>
        <li><a href="https://page.line.me/271pnocl?openQrModal=true">Line</a></li>
        <li><a href="https://x.com/TPP_Taiwan">x</a></li>
        <li>[電子信箱]contact@tpp.org.tw</li>
        <li><a href=""></a></li>
        </details>

    <hr class="a001">
    <details><summary>《街頭活動紀錄》</summary>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li>[2026/03/29]<a href="https://sites.google.com/view/swallow-tpp/%E5%80%89%E5%BA%AB/-%E6%88%B0%E5%87%BA%E4%BE%86">🔥𝟯𝟮𝟵 戰出來！</a></li>
        <li>[2024/10/05]<a href="https://sites.google.com/view/swallow-tpp/2024%E5%B9%B410%E6%9C%8805%E6%97%A5-%E9%90%B5%E8%8D%89%E9%9B%86%E7%B5%90?authuser=0">鐵草集結</a></li>
        <li>[2024/09/08]<a href="https://sites.google.com/view/swallow-tpp/%E5%B0%8D%E6%8A%97%E7%B6%A0%E8%89%B2%E9%BB%A8%E5%9C%8B-%E6%B0%91%E7%9C%BE%E5%85%A8%E5%9C%8B%E9%96%8B%E8%AC%9B20240908%E4%B8%8A%E8%A1%97?authuser=0">【對抗綠色黨國 民眾全國開講】上街！！</a></li>
        <li>[2024/09/20]<a href="https://sites.google.com/view/swallow-tpp/justice%E7%82%BA%E5%8F%B8%E6%B3%95%E6%AD%A3%E7%BE%A9%E7%AB%99%E5%87%BA%E4%BE%86%E5%85%A8%E5%8F%B0%E5%A0%B4%E6%AC%A1/%E9%9B%86%E7%B5%90%E7%82%BA%E5%8F%B8%E6%B3%95%E6%AD%A3%E7%BE%A9%E7%AB%99%E5%87%BA%E4%BE%86%E9%AB%98%E9%9B%84%E5%8F%B0%E5%8D%97%E5%8F%B0%E4%B8%AD%E5%A0%B4%E6%AC%A1%E6%88%B6%E5%A4%96%E9%96%8B%E8%AC%9B?authuser=0">【集結！為司法正義站出來】高雄、台南、台中場次戶外開講</a></li>
        <li>[2024/09/14]<a href="https://sites.google.com/view/swallow-tpp/justice%E7%82%BA%E5%8F%B8%E6%B3%95%E6%AD%A3%E7%BE%A9%E7%AB%99%E5%87%BA%E4%BE%86%E5%85%A8%E5%8F%B0%E5%A0%B4%E6%AC%A1/%E5%98%89%E7%BE%A9%E5%B8%82%E5%8D%97%E9%A0%86%E5%AE%AE-%E5%98%89%E7%BE%A9%E5%B8%82%E6%9D%B1%E5%8D%80%E8%88%88%E6%A5%AD%E6%9D%B1%E8%B7%AF399%E8%99%9F?authuser=0">嘉義市南順宮(嘉義市東區興業東路399號)</a></li>
        <li>[2024/09/13]<a href="https://sites.google.com/view/swallow-tpp/justice%E7%82%BA%E5%8F%B8%E6%B3%95%E6%AD%A3%E7%BE%A9%E7%AB%99%E5%87%BA%E4%BE%86%E5%85%A8%E5%8F%B0%E5%A0%B4%E6%AC%A1/%E6%96%B0%E5%8C%97%E6%96%B0%E8%8E%8A%E9%AB%94%E8%82%B2%E9%A4%A8%E5%A4%96-%E6%96%B0%E5%8C%97%E5%B8%82%E6%96%B0%E8%8E%8A%E5%8D%80%E4%B8%AD%E8%8F%AF%E8%B7%AF%E4%B8%80%E6%AE%B5%E5%85%AC%E5%9C%92%E8%B7%AF%E5%8F%A3?authuser=0">新北新莊體育館外(新北市新莊區中華路一段/公園路口)</a></li>
        <li>[2024/09/08]<a href="https://sites.google.com/view/swallow-tpp/%E5%B0%8D%E6%8A%97%E7%B6%A0%E8%89%B2%E9%BB%A8%E5%9C%8B-%E6%B0%91%E7%9C%BE%E5%85%A8%E5%9C%8B%E9%96%8B%E8%AC%9B20240908%E4%B8%8A%E8%A1%97/%E5%85%AC%E6%B0%91%E6%80%92%E5%90%BC%E7%AC%AC%E4%B8%80%E7%AB%99-%E5%9C%B0%E9%BB%9E%E5%8F%B0%E5%8C%97%E5%B8%82%E4%B8%AD%E6%AD%A3%E5%8D%80%E6%BF%9F%E5%8D%97%E8%B7%AF%E4%B8%8A-%E6%99%82%E9%96%9398-%E6%97%A51800-2030?authuser=0">📍公民怒吼第一站 地點：台北市中正區濟南路上 時間：9/8 （日）18:00 - 20:30</a></li>
        </details>

    <hr class="a001">
    <details><summary>《小草專區》</summary>
        <li><a href="https://www.youtube.com/@DearNaNa1313/streams">DearNaNa</a></li>
        <li><a href="https://www.youtube.com/@%E6%B4%9B%E7%8B%97/streams">洛狗</a></li>
        <li><a href="https://www.youtube.com/@%E8%B2%93%E8%8D%89KP/featured">貓草</a></li>
        <li><a href="https://www.youtube.com/@Super_TW_People/videos">超級普通老百姓</a></li>
        <li><a href="https://www.youtube.com/@%E7%8B%90%E5%B0%BE%E8%8D%89KP/featured">狐尾草</a></li>
        <li><a href="https://www.youtube.com/@%E8%89%BE%E8%8D%89%E6%84%9B%E5%B0%8D%E5%9B%89/videos">艾草愛對囉</a></li>
        <li><a href="https://www.youtube.com/@changellen2001/featured">花若盛開蝴蝶自來</a></li>
        <li><a href="https://www.facebook.com/profile.php?id=100064120651641">我家阿北啦</a></li>
        <li><a href="https://www.youtube.com/@%E6%88%91%E5%AE%B6%E9%98%BF%E5%8C%97%E5%95%A6tv/featured">我家阿北啦TV</a></li>
        <li><a href="https://www.youtube.com/@%E6%94%BF%E6%B2%BBJia/featured">政治Jia</a></li>
        <li><a href="https://www.youtube.com/@%E8%A9%B1%E7%9C%BE%E9%BB%9E">話眾點</a></li>
        <li><a href="https://www.youtube.com/@%E5%B0%8F%E8%8D%89%E8%AA%AA%E7%99%BD%E8%A9%B1/videos">小草說白話</a></li>
        <li><a href="https://www.youtube.com/@%E5%97%A1%E5%97%A1%E5%B0%8F%E8%94%A5%E8%8A%B1">嗡嗡小蔥花</a></li>
        <li><a href="https://www.youtube.com/@mentoK-11/streams">mentoK</a></li>
        <li><a href="https://www.youtube.com/@KP-cutewa/featured">挺KP台中萌蛙陸戰隊</a></li>
        <li><a href="https://www.youtube.com/@%E8%B7%AF%E8%A6%8B%E4%B8%8D%E5%B9%B3%E5%B0%8F%E5%B8%82%E6%B0%91">路見不平小市民</a></li>
        <li><a href="https://www.facebook.com/fatmanvoice">凹凸不平胖市民</a></li>
        <li><a href="https://www.youtube.com/@%E6%8C%BA%E9%98%BF%E5%8C%97/featured">挺阿北</a></li>
        <li><a href="https://www.youtube.com/@%E7%99%BD%E7%88%B8and%E8%8A%AF%E7%BE%BD_%E7%B1%B3%E9%A4%85%E5%93%A5/featured">白爸and芯羽_米餅哥</a></li>
        <li><a href="https://www.youtube.com/@2Chillytr/streams">2Chill直播Live</a></li>
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