document.getElementById('searchInput').addEventListener('keyup', function() {
  var filter = this.value.toLowerCase();
  var lis = document.querySelectorAll('#搜尋 tr');
  lis.forEach(function(tr) {
    tr.style.display = tr.textContent.toLowerCase().includes(filter) ? '' : 'none';
  });
});