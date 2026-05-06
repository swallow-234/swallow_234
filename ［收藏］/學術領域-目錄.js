// sidebar.js
const sidebarContent = `
<a href="https://swallow-234.github.io/swallow_234/%E5%85%AC%E4%BD%88%E6%AC%84">首頁</a>
    <h1 style="text-align: center;">《導師塔》</h1>
<ul>
    <li><a onclick="changeIframe('學術領域-範本.html')">收藏清單</a></li>
    <!--
    </h3><hr class="a001">
    <details><summary>《範本》</summary>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    </details>

     -->
    <hr class="b005">
    <details><summary>《軟體工具》</summary>
    <li><a href="https://www.youtube.com/c/anchiangchu/videos">學用數學</a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    </details>

    <hr class="a001">
    <details><summary>《醫學》</summary>
    <li><a href="https://www.youtube.com/channel/UCDQBIO3J08f4ROCLxLnfKfg/videos">Ellen Doula Care</a></li>
    <li><a href="https://smallcollation.blogspot.com/">小小整理網站 SMALLCOLLATION</a></li>
    <li><a href="https://www.youtube.com/@anneeducation/videos">安妮怎麼了? -線上急救教育平台</a></li>
    <li><a href="https://www.youtube.com/@doctorverykind/videos">醫生怎麼說</a></li>
    <li><a href=""></a></li>
    </details>

    <hr class="a001">
    <details><summary>《科學》</summary>
    <li><a href="https://www.youtube.com/@SabinCivil/videos">Sabin Civil Engineering</a></li>
    <li><a href="https://www.youtube.com/@amillison">Andrew Millison</a></li>
    <li><a href="https://www.youtube.com/c/NTUCASE/videos">臺大科學教育發展中心CASE</a></li>
    <li><a href="https://www.youtube.com/@veritasium/videos">Veritasium</a></li>
    <li><a href="https://www.youtube.com/@NYCUOCW/playlists">NYCU OCW</a></li>
    <li><a href="https://www.youtube.com/@NCUDEMO/videos">物理演示實驗室 PhysDemoLab</a></li>
    <li><a href="https://www.youtube.com/@MisterHacker/videos">Mr. Hacker</a></li>
    <li><a href="https://www.youtube.com/@stepp.academy/videos">Stepp學院</a></li>
    <li><a href="https://www.youtube.com/@yoyophysics/videos">佑來了</a></li>
    <li><a href="https://www.youtube.com/channel/UCCd23n-zY1Vfsvc9FLrZZbQ/videos">佑來認真教</a></li>
    <li><a href="https://www.youtube.com/@KeXueHuoJianShu/videos">科學火箭叔</a></li>
    <li><a href="https://www.youtube.com/@TomStantonEngineering/videos">Tom Stanton</a></li>
    <li><a href="https://www.youtube.com/@physicsfun/videos">physicsfun</a></li>
    <li><a href="https://www.youtube.com/@LISscience/videos">LIS情境科學教材</a></li>
    <li><a href="https://www.youtube.com/@MagneticGamesIT/videos">Magnetic Games</a></li>
    <li><a href="https://www.youtube.com/channel/UCk5qA4dVD1vipi6veZ9hewQ/videos">でんじろう先生のはぴエネ!【公式】Mr. Denjiro's Happy Energy!</a></li>
    <li><a href="https://www.youtube.com/@bprptw/videos">黑筆紅筆</a></li>
    <li><a href="https://www.youtube.com/@SCRAFTchannel/videos">S.CRAFT</a></li>
    <li><a href="https://www.youtube.com/c/veproject1">veproject1</a></li>
    <li><a href="https://www.youtube.com/@whatifchinese/videos">大膽科學 - What If Chinese</a></li>
    <li><a href="https://www.youtube.com/@BrickExperimentChannel/videos">Brick Experiment Channel</a></li>
    <li><a href="https://www.youtube.com/@3Blue1BrownJapan/videos">3Blue1BrownJapan</a></li>
    <li><a href="https://www.youtube.com/@JaredOwen/videos">Jared Owen</a></li>
    <li><a href=""></a></li>
    </details>

    <hr class="a001">
    <details><summary>《科技》</summary>
    <li><a href="https://www.youtube.com/@aiwarehouse/videos">AI Warehouse</a></li>
    <li><a href=""></a></li>
    </details>

    <hr class="a001">
    <details><summary>《軍武》</summary>
    <li><a href="https://www.youtube.com/@LongFei/videos">Long Fei</a></li>
    <li><a href="https://www.youtube.com/@MILITARYCHANNEL1/videos">MILITARY CHANNEL</a></li>
    <li><a href="https://www.youtube.com/@ElwynR/videos">Elwyn R</a></li>
    <li><a href="https://www.youtube.com/@GunFunSam/videos">山姆小叔Gun& Fun</a></li>
    <li><a href="https://www.youtube.com/@csknives/videos">Cold Steel</a></li>
    <li><a href=""></a></li>
    </details>

    <hr class="a001">
    <details><summary>《工匠技藝》</summary>
    <li><a href="https://www.youtube.com/@NicolasBras/videos">Nicolas Bras</a></li>
    <li><a href="https://www.youtube.com/@3tyears135/videos">三千試煉3Tyears</a></li>
    <li><a href="https://www.youtube.com/@chrisnotap/videos">Chris Notap</a></li>
    <li><a href="https://www.youtube.com/@NHRepair/videos">宅水電</a></li>
    <li><a href="https://www.youtube.com/@mr.construction9846/videos">Mr.Construction</a></li>
    <li><a href="https://www.youtube.com/@NEOTECHNOLOGYr10e5ti/videos">NOE tech</a></li>
    <li><a href="https://www.youtube.com/@dekayscrafts/videos">김팀장 크래프트Dekay's Crafts</a></li>
    <li><a href="https://www.youtube.com/@HomeInvention/videos">Home Invention</a></li>
    <li><a href="https://www.youtube.com/@Inventor101/videos">Inventor 101</a></li>
    <li><a href="https://www.youtube.com/@no1ideas/videos">No1 IDEAS</a></li>
    <li><a href="https://www.youtube.com/@QuantumTech/videos">Quantum Tech HD</a></li>
    <li><a href="https://www.youtube.com/@kingprocess/videos">king process</a></li>
    <li><a href="https://www.youtube.com/@michaelcthulhu/videos">michaelcthulhu</a></li>
    <li><a href="https://www.youtube.com/@TheCineScaper/videos">TheCineScaper</a></li>
    <li><a href="https://www.youtube.com/@Thalassohobbyer/videos">Thalasso hobbyer たらそほびや</a></li>
    <li><a href="https://www.youtube.com/@MR.ANDY911/videos">愛迪先生</a></li>
    <li><a href="https://www.youtube.com/c/AsuGreen11">Asu</a></li>
    <li>剪髮<a href="https://www.youtube.com/@hair-w3m/videos">童品儒</a></li>
    <li>剪髮<a href="https://www.youtube.com/@jrfx/videos">今日髮型@hairstyle today</a></li>
    <li>剪髮<a href="https://www.youtube.com/@norman_hair/videos">髮型師諾曼</a></li>
    <li><a href="https://www.youtube.com/@primitivetechnology9550/videos">Primitive Technology</a></li>
    <li>剪髮<a href="https://www.youtube.com/@h0947121906/videos">Kin Lu</a></li>
    <li>剪髮<a href="https://www.youtube.com/@a0932854388/videos">洪天林</a></li>
    <li><a href=""></a></li>
    </details>

    <hr class="a001">
    <details><summary>《建築學》</summary>
    <li><a href="https://www.youtube.com/@hermdesign/videos">哈赫蒙室內裝修 l 設計師豪哥</a></li>
    <li><a href="https://www.youtube.com/@PracticalEngineeringChannel/videos">Practical Engineering</a></li>
    <li><a href="https://www.youtube.com/@Zuyou2022/videos">租寓 Zuyou</a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    </details>

    <hr class="a001">
    <details><summary>《生物學》</summary>
    <li><a href="https://www.youtube.com/channel/UClEzBxwGGFrbwTVeawscqjQ/videos">許伯&簡芝—倉鼠人</a></li>
    <li><a href="https://www.youtube.com/@AC%E8%8D%89%E5%BD%B1%E6%B0%B4%E6%97%8F/videos">AC草影水族</a></li>
    <li><a href="https://www.youtube.com/@jump_spi_film/videos">ハエトリフィルム / Jumping Spider Film</a></li>
    <li><a href="https://www.youtube.com/@bbcearth/videos">BBC Earth</a></li>
    <li><a href="https://www.youtube.com/@wildlifeaid/videos">Wildlife Aid</a></li>
    <li><a href="https://www.youtube.com/channel/UCVpankR4HtoAVtYnFDUieYA/videos">Ze Frank</a></li>
    <li><a href="https://www.youtube.com/@fumeancats/videos">黃阿瑪的後宮生活</a></li>
    <li><a href="https://www.youtube.com/channel/UCPYY6mHr1RQj4Nbi9dTDY7A/videos">奈普頓—臺灣蟻窟AntsFormosa</a></li>
    <li><a href="https://www.youtube.com/channel/UC93b0TQpqI90B9rQtVYMRVw/videos">藍箱水族 Bluebox aquarium</a></li>
    <li><a href="https://www.youtube.com/@SunflowerFarmCreamery/videos">Sunflower Farm Creamery</a></li>
    <li><a href="https://www.youtube.com/@AnimalPlanetTaiwan/videos">動物星球頻道/ Animal Planet Taiwan</a></li>
    <li><a href="https://www.youtube.com/c/AsuGreen11">Asu</a></li>
    <li><a href="https://www.youtube.com/@MBARIvideo/videos">MBARI (Monterey Bay Aquarium Research Institute)</a></li>
    <li><a href="https://www.youtube.com/@MonsterBugWarsTV/videos">Monster Bug Wars - Official Channel</a></li>
    <li><a href=""></a></li>
    </details>

    <hr class="a001">
    <details><summary>《軟體硬體應用》</summary>
    <li><a href="https://www.youtube.com/@%E8%91%89%E8%80%81%E4%BC%99%E9%98%BF/videos">葉老伙阿</a></li>
    <li><a href="https://support.google.com/docs/table/25273?hl=zh-Hant&sjid=14375478145038268587-AP">Google 試算表函式清單</a></li>
    <li><a href="https://www.youtube.com/@papayaclass/playlists">PAPAYA 電腦教室</a></li>
    <li><a href="https://www.youtube.com/@sdwuntnu/playlists">吳順德</a></li>
    <li><a href="https://digitalyoming.com/category/digital-tools/google-sheet/">Google試算表 | 數位小幫手</a></li>
    <li><a href="https://vocus.cc/salon/mrsheet/room/mrsheet">Google 試算表教學站</a></li>
    <li><a href="https://www.youtube.com/@feelingteacher/playlists">謝感覺教學</a></li>
    <li><a href=""></a></li>
    </details>

    <hr class="a001">
    <details><summary>《泛科普教育》</summary>
    <li><a href="https://www.youtube.com/@ctseducation/playlists">華視教育體育文化頻道</a></li>
    <li><a href="https://www.youtube.com/@tkuocw/videos">淡江大學開放式課程</a></li>
    <li><a href="https://www.youtube.com/playlist?list=PLMBCMWY1kL6H9L5Dcccd5tFkeeW_ZFvvV">Xiaofei小飛</a></li>
    <li><a href="https://www.youtube.com/@CooC-Cloud/playlists">臺北酷課雲</a></li>
    <li><a href="https://www.youtube.com/user/b94401026/videos">呂冠緯 / 冠緯學長陪你學 & 聊 & 玩</a></li>
    <li><a href="https://www.youtube.com/@JunyiAcademy/playlists">均一教育平台 Junyi Academy</a></li>
    <li><a href="https://www.youtube.com/@academiasinica_tw/featured">中央研究院Academia Sinica</a></li>
    <li><a href="https://www.youtube.com/@NTHUOCW/playlists">NTHUOCW</a></li>
    <li><a href="https://www.shareclass.org/course/default/">ShareClass</a></li>
    <li><a href="https://www.youtube.com/@ngis8967/videos">N GIS</a></li>
    <li><a href="https://www.youtube.com/@generaleducationtw-get1274/playlists">臺灣通識網General Education TW-開放式課程GET</a></li>
    <li><a href="https://www.youtube.com/@sdwuntnu/playlists">吳順德</a></li>
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