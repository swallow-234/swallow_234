// sidebar.js
const sidebarContent = `
<a href="https://swallow-234.github.io/swallow_234/%E5%85%AC%E4%BD%88%E6%AC%84">首頁</a>
<h1 style="text-align: center;">《版本收藏》</h1>
 <ul>
        <li><a onclick="changeIframe('POE流亡暗道-心得.html')">當前紀錄</a></li>
        <li><a onclick="changeIframe('POE流亡暗道-範本.html')">收藏紀錄</a></li>
        <li><a onclick="changeIframe('倉庫/POE流亡暗道-小技巧.html')">小技巧</a></li>
    <hr class="b005">
    <details><summary>《導師塔》</summary>
        <li><a href="https://www.youtube.com/@%E6%AD%A3%E7%BE%A9%E9%A4%8A%E8%B2%93%E4%B8%AD/playlists">正義養貓中</a></li>
        <li><a href="https://home.gamer.com.tw/creationDetail.php?sn=5461268">不要使用特殊符號字元</a></li>
        <li><a href="https://www.youtube.com/@%E9%98%BF%E8%8D%89/videos">阿草</a></li>
        <li><a href="https://www.youtube.com/@Lilballz/videos">Lilballz</a></li>
        <li><a href="https://www.youtube.com/@change5596/videos">Change</a></li>
        <li><a href="https://www.youtube.com/@%E4%BD%8E%E6%AC%B8%E6%AD%BB/videos">DS 低欸死</a></li>
        <li><a href="https://www.youtube.com/@TenFrenzyFlicker/videos">Ten_Frenzy_Flicker</a></li>
        <li><a href="https://www.youtube.com/@takedakun/videos">武田君</a></li>
        <li><a href="https://www.youtube.com/@ekwow/videos">EKwow聊劇情</a></li>
        <li><a href="https://www.youtube.com/@POOGF/videos">老P</a></li>
        <li><a href="https://www.youtube.com/@Mathilification/videos">Mathilification</a></li>
        <li><a href="https://www.youtube.com/@raye_1_2/videos">Raye雷</a></li>
        <li><a href="https://www.youtube.com/@Krys7/videos">Krys7</a></li>
        <li><a href="https://www.youtube.com/@howhowgoose-8254/videos">Howhowgoose 皓皓鵝</a></li>
        <li><a href="https://www.youtube.com/@KayGaming/videos">Kay Gaming</a></li>
        <li><a href="#"></a></li>
        </details>

    <h3 style="text-align: center;">《POE3.28》</h3><hr class="a001">
        <p>ID：遠古披薩<BR>
        技能：奉獻之路</p>
    <h3 style="text-align: center;">《POE3.26》</h3><hr class="a001">
        <li><a onclick="changeIframe('倉庫/裝備-幻化守衛-護衛.html')">[裝備]幻化守衛/護衛</a></li>
    <h3 style="text-align: center;">《POE3.22》</h3><hr class="a001">
        <li><a onclick="changeIframe('倉庫/POE流亡暗道-【心得】美德不是個好東西.html')">【心得】美德不是個好東西</a></li>
        <li><a onclick="changeIframe('倉庫/POE流亡暗道-RE：【心得】美德不是個好東西.html')">RE：【心得】美德不是個好東西</a></li>
</ul><hr class="a001">
`;

// 自動填充到頁面中
document.addEventListener("DOMContentLoaded", function() {
    const nav = document.getElementById('mySidenav');
    if (nav) {
        nav.innerHTML = sidebarContent;
    }
});