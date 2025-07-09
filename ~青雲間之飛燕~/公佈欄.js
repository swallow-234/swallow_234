 const PAGE_ORDER = [
    "",
    "POE流亡暗道",
    "Fate/Grand Order",
    "這是什麼酷酷的東西",
    "休閒牧場",
    "ACG同好會",
    "體育運動",
    "棋類技藝",
    "Vtuber/Vup收藏",
    "台灣[Taiwan]",
    "吹哨者",
    "生活日常",
    "裝扮造型風格",
    "blender",
    "繪圖",
    "劇本",
    "影片/攝影編輯",
    "人生哲學",
    "社會學",
    "開創者",
    "戀愛研究院",
    "法律相關",
    "食譜",
    "醫學",
    "健身|養身|武術",
    "樂理知識",
    "音樂收藏",
    "舞蹈",
    "科學",
    "科技",
    "軍武",
    "工匠技藝",
    "語言研究院",
    "程式語言",
    "Unity遊戲引擎",
    "Google相關",
    "Windows",
    "軟體硬體應用",
    "建築學",
    "風水|玄學|靈異",
    "生物學",
    "泛普教育",
    "防災手冊",
    "防詐騙宣導",
    "AI相關",
    "系列主題",
    "台灣民眾黨專區",
  ];

  const GoogleSheetTabs = {
    template: `
      <div>
        <div class="tabs">
          <div
            v-for="(tab, i) in tabs"
            :key="tab"
            class="tab"
            :class="{active: activeTab === i}"
            @click="activeTab = i"
          >{{ tab }}</div>
        </div>
        <div class="tab-content">
          <table v-if="filteredRows.length > 0" class="my-custom-table">
            <thead>
              <tr>
                <th>日期</th>
                <th>連結</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, idx) in filteredRows" :key="idx">
                <td>{{ row[dateHeader] }}</td>
                <td class="link-cell">
                  <a v-if="row[urlHeader] && row[textHeader]" :href="row[urlHeader]" target="_blank" rel="noopener">
                    {{ row[textHeader] }}
                  </a>
                  <span v-else>無資料</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div v-else style="padding:40px 0; text-align:center;">資料載入中...</div>
        </div>
      </div>
    `,
    data() {
      return {
        rows: [],
        tabs: [],
        activeTab: 0,
        dateHeader: "",
        urlHeader: "",
        textHeader: "",
        pageHeader: ""
      }
    },
    computed: {
      filteredRows() {
        if (!this.tabs.length) return [];
        const tab = this.tabs[this.activeTab];
        return this.rows.filter(row => (row[this.pageHeader] || '').includes(tab));
      }
    },
    mounted() {
      // 你的 Google Sheets "發佈到網路" CSV 連結
      const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTYaye4pjVsaq7vZhdi-RRD71pH0sWcjGmAPKRXu8BdpJ6xttrGMFr7XxrT1oQdmSTqis40ONep9hwC/pub?output=csv';
      fetch(csvUrl)
        .then(res => res.text())
        .then(csv => {
          const lines = csv.trim().split('\n');
          const headers = lines[0].split(',');
          // 假設A,B,C,D欄依序為「日期,網址,名稱,分頁」
          this.dateHeader = headers[0];
          this.urlHeader = headers[1];
          this.textHeader = headers[2];
          this.pageHeader = headers[3];
          const rows = lines.slice(1).map(line => {
            const values = [];
            let curr = '', inQuotes = false;
            for (let i = 0; i < line.length; i++) {
              const char = line[i];
              if (char === '"' && line[i+1] === '"') { curr += '"'; i++; }
              else if (char === '"') { inQuotes = !inQuotes; }
              else if (char === ',' && !inQuotes) { values.push(curr); curr = ''; }
              else { curr += char; }
            }
            values.push(curr);
            const row = {};
            headers.forEach((h, i) => row[h] = values[i] || '');
            return row;
          });
          this.rows = rows;
          // 只保留有資料的分頁，且用 includes 判斷
          this.tabs = PAGE_ORDER.filter(page =>
            rows.some(row => (row[this.pageHeader] || '').includes(page))
          );
        })
        .catch(err => {
          console.error('Google Sheets 讀取失敗：', err);
        });
    }
  }

  const app = Vue.createApp({});
  app.component('google-sheet-tabs', GoogleSheetTabs);
  app.mount('#app');