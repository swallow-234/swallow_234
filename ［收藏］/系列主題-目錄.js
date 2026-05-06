// sidebar.js
const sidebarContent = `
<a href="https://swallow-234.github.io/swallow_234/%E5%85%AC%E4%BD%88%E6%AC%84">首頁</a>
<ul>
    <h1 style="text-align: center;">《導師塔》</h1>
    <li><a onclick="changeIframe('系列主題-範本.html')">收藏清單</a></li>
<!--
<hr class="a001">
<details><summary>《範本》</summary>
<li><a href=""></a></li>
<li><a href=""></a></li>
<li><a href=""></a></li>
</details>
 -->
    <hr class="b005">
    <details><summary>《柯文哲-先行者》</summary>
        <li><a href="https://www.youtube.com/@Team__KP">YouTube</a></li>
        <li><a href="https://www.facebook.com/DoctorKoWJ/">Facebook</a></li>
        <li><a href="https://www.instagram.com/doctorkowj/">Instagram</a></li>
        <li><a href="https://x.com/KP_Taiwan">Twitter</a></li>
        <li><a href="https://www.threads.com/@doctorkowj">threads</a></li>
        </details>
    
    <hr class="a001">
        <details><summary>《黃國昌-通識課》</summary>
        <li><a href="https://www.youtube.com/@KC-Huang/featured">YouTube</a></li>
        <li><a href="https://www.facebook.com/kcfor2016/">Facebook</a></li>
        </details>
    
    <hr class="a001">
    <details><summary>《陳之漢-義士》</summary>
        <li><a href="https://www.youtube.com/channel/UCi2GvcaxZCN-61a0co8Smnw/featured">YouTube</a></li>
        <li><a href="https://notorious-2019.com/">惡名昭彰官方網站</a></li>
        <li><a href="https://www.facebook.com/profile.php?id=100044226139684#">飆悍FB粉絲團</a></li>
        <li><a href="https://www.instagram.com/power3067830678/">飆捍IG</a></li>
        <li><a href="https://www.facebook.com/notorious.taiwan">惡名昭彰FB粉絲團</a></li>
        </details>
        
    <hr class="a001">
    <details><summary>《陳椒華-循道者》</summary>
        <li><a href="https://www.youtube.com/@%E9%99%B3%E6%A4%92%E8%8F%AF/featured">YouTube</a></li>
        <li><a href="https://www.facebook.com/ironprofessorchan/">Facebook</a></li>
        <li><a href="https://www.facebook.com/GovWatchA">Facebook</a>監督施政聯盟</li>
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