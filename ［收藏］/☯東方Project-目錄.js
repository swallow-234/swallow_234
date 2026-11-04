// sidebar.js
const sidebarContent = `
<a href="https://swallow-234.github.io/swallow_234/%E5%85%AC%E4%BD%88%E6%AC%84">首頁</a>
<h1 style="text-align: center;">《幻想鄉》</h1>
<ul><li><a onclick="changeIframe('☯東方Project-範本.html')">收藏清單</a></li>
<hr class="b005">
<!--
<hr class="a001">
<details><summary>《範本》</summary>
<li><a href=""></a></li>
<li><a href=""></a></li>
<li><a href=""></a></li>
</details>
 -->
<details><summary>《導師塔》</summary>
<li><a href="https://forum.gamer.com.tw/B.php?bsn=10039">巴哈姆特</a></li>
<li><a href="https://zh.touhouwiki.net/index.php?title=%E4%B8%9C%E6%96%B9%E7%BB%B4%E5%9F%BA:%E7%A4%BE%E5%8C%BA&variant=zh-tw">东方维基</a></li>
<li><a href="https://www.youtube.com/@0minusT/featured">minusT</a></li>
<li><a href="https://www.youtube.com/@Mirae_Somang/videos">Mirae Somang</a></li>
<li><a href="https://www.youtube.com/@manpukujinja/videos">満福神社公式 manpukujinja</a></li>
<li><a href="https://www.youtube.com/@th0503/videos">th0503</a></li>
<li><a href=""></a></li>
</details>

<hr class="a001">
<details><summary>《章節故事》</summary>
<li>《東方靈異傳》</li>
<li>《東方靈異傳》</li>
<li>《東方封魔錄》</li>
<li>《東方夢時空》</li>
<li>《東方幻想鄉》</li>
<li>《東方怪綺談》</li>
<li>《東方紅魔鄉》</li>
<li>《東方紅魔鄉：新典》</li>
<li>《東方妖妖夢》</li>
<li>《東方萃夢想》</li>
<li>《東方永夜抄》</li>
<li>《東方花映塚》</li>
<li>《東方文花帖》</li>
<li>《東方風神錄》</li>
<li>《東方緋想天》</li>
<li>《東方地靈殿》</li>
<li>《東方星蓮船》</li>
<li>《東方非想天則》</li>
<li>《對抗新聞》</li>
<li>《妖精大戰爭》</li>
<li>《東方神靈廟》</li>
<li>《東方心綺樓》</li>
<li>《東方輝針城》</li>
<li>《彈幕天邪鬼》</li>
<li>《東方深秘錄》</li>
<li>《東方紺珠傳》</li>
<li>《東方憑依華》</li>
<li>《東方天空璋》</li>
<li>《秘封夢魘日記》</li>
<li>《東方鬼形獸》</li>
<li>《東方剛欲異聞》</li>
<li>《東方虹龍洞》</li>
<li>《彈幕狂們的黑市》</li>
<li>《東方獸王園》</li>
<li>《東方錦上京》</li>
</details>

<hr class="a001">
<details><summary>《人物角色》</summary>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
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