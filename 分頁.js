    function showTab(index) {
      const tabs = document.querySelectorAll('.tab1');
      const contents = document.querySelectorAll('.tab1-content');
      tabs.forEach((tab, i) => {
        tab.classList.toggle('active', i === index);
        contents[i].classList.toggle('active', i === index);
      });
    }