    function toggleNav() {
        const sidenav = document.getElementById("mySidenav");
        const mainContent = document.querySelector(".main-content-wrapper"); 
        
        // 檢查側邊欄是否處於收起狀態 (以是否有 'collapsed' class 為準)
        if (sidenav.classList.contains("collapsed")) {
            // 展開側邊欄
            sidenav.classList.remove("collapsed");
            mainContent.classList.remove("collapsed-margin");

        } else {
            // 收起側邊欄
            sidenav.classList.add("collapsed");
            mainContent.classList.add("collapsed-margin");
        }
    }
 