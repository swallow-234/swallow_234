// 卡片式-圖卡-資料庫：未來要新增作品，只要在這裡增加一個物件 {} 即可
// title: '名稱',
// author: '武器',
// desc: '簡介',
// date: '陣營',
// tool: '攻擊',
// size: '防禦',
// imgUrl: '圖片網址',
// category: '陣營'

const workData = [
    {
        title: 'Ruby Rose',
        author: '大鐮刀/狙擊槍',
        desc: '代表色是紅色，為Yang同父異母的妹妹。',
        date: '《RWBY隊》',
        tool: '快速/劈砍',
        size: '閃避',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/Ruby Rose.jpg',
        category: '《RWBY隊》'
    },
    {
        title: 'Weiss Schnee',
        author: '細劍/魔法',
        desc: '代表色是白色，左撇子。雪倪塵晶公司的繼承人，雪倪家次女。',
        date: '《RWBY隊》',
        tool: '快速/穿刺',
        size: '閃避/格黨',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/Weiss Schnee.jpg',
        category: '《RWBY隊》'
    },
    {
        title: 'Blake Belladonna',
        author: '武士刀/手槍',
        desc: '代表色是黑色。擁有一對貓耳的弗納人，個性沉默寡言，帶有貓的習氣，喜歡魚類料理且不喜歡狗。',
        date: '《RWBY隊》',
        tool: '快速/劈砍',
        size: '閃避/格黨',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/Blake Belladonna.jpg',
        category: '《RWBY隊》'
    },
    {
        title: 'Yang Xiao Long',
        author: '拳套/霰彈槍/吸收反擊',
        desc: '代表色是黃色。Ruby同父異母的姐姐，年幼迦梨親Raven因不明原因離家出走。',
        date: '《RWBY隊》',
        tool: '普通/拳擊',
        size: '閃避/招架',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/Yang Xiao Long.webp',
        category: '《RWBY隊》'
    },
    {
        title: 'Jaune Arc',
        author: '劍盾',
        desc: '',
        date: '《JNPR隊》',
        tool: '普通/劈砍突刺',
        size: '格黨/治癒',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/Jaune Arc.webp',
        category: '《JNPR隊》'
    },    {
        title: 'Nora Valkyrie',
        author: '大槌/榴彈砲',
        desc: '',
        date: '《JNPR隊》',
        tool: '普通/重擊',
        size: '閃避',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/Nora Valkyrie.webp',
        category: '《JNPR隊》'
    },    {
        title: 'Pyrrha Nikos',
        author: '盾牌｜矛/劍/步槍/特殊能力',
        desc: '',
        date: '《JNPR隊》',
        tool: '快速/劈砍突刺',
        size: '格黨/閃避',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/Pyrrha Nikos.jpg',
        category: '《JNPR隊》'
    },    {
        title: 'Lie Ren',
        author: '雙鐮刀/雙衝鋒槍',
        desc: '',
        date: '《JNPR隊》',
        tool: '快速/劈砍/徒手/氣功',
        size: '格黨/閃避',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/Lie Ren.jpg',
        category: '《JNPR隊》'
    },    {
        title: 'Cardin Winchester',
        author: '流星錘/魔法',
        desc: '',
        date: '《CRDL隊》',
        tool: '普通/重擊',
        size: '閃避',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/Cardin Winchester.webp',
        category: '《CRDL隊》'
    },    {
        title: 'Russel Thrush',
        author: '雙刀/魔法',
        desc: '',
        date: '《CRDL隊》',
        tool: '快速/劈砍突刺',
        size: '閃避',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/Russel Thrush.webp',
        category: '《CRDL隊》'
    },    {
        title: 'Dove Bronzewing',
        author: '長劍/左輪手槍',
        desc: '',
        date: '《CRDL隊》',
        tool: '普通/劈砍突刺',
        size: '閃避/格黨',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/Dove Bronzewing.webp',
        category: '《CRDL隊》'
    },    {
        title: 'Sky Lark',
        author: '戰斧/狙擊槍',
        desc: '',
        date: '《CRDL隊》',
        tool: '普通/劈砍',
        size: '閃避/格黨',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/Sky Lark.webp',
        category: '《CRDL隊》'
    },    {
        title: 'Coco Adel',
        author: '徒手/手提箱/重機槍',
        desc: '',
        date: '《CFVY隊》',
        tool: '快速/普通/重擊',
        size: '閃避/招架',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/Coco Adel.webp',
        category: '《CFVY隊》'
    },    {
        title: 'Fox Alistair',
        author: '臂刃拐刀/散彈槍',
        desc: '',
        date: '《CFVY隊》',
        tool: '快速/劈砍',
        size: '閃避/格黨/招架',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/Fox Alistair.jpg',
        category: '《CFVY隊》'
    },    {
        title: 'Velvet Scarlatina',
        author: '？',//能量巨劍。
        desc: '',
        date: '《CFVY隊》',
        tool: '？',
        size: '？',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/Velvet Scarlatina.webp',
        category: '《CFVY隊》'
    },    {
        title: 'Yatsuhashi Daichi',
        author: '大彎刀/徒手/氣功',
        desc: '',
        date: '《CFVY隊》',
        tool: '快速/劈砍',
        size: '格黨/招架',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/Yatsuhashi Daichi.webp',
        category: '《CFVY隊》'
    },
    {
        title: 'Ozpin',
        author: '手杖/魔法',
        desc: '',
        date: '烽火學院',
        tool: '快/劈砍突刺',
        size: '格黨/招架',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/Ozpin.webp',
        category: '烽火學院'
    },
    {
        title: 'Bartholomew Oobleck',
        author: '短鞭/魔法',
        desc: '',
        date: '烽火學院',
        tool: '普通/揮舞',
        size: '閃避/招架',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/Bartholomew Oobleck.webp',
        category: '烽火學院'
    },
    {
        title: 'Glynda Goodwitch',
        author: '戰斧/散彈槍',
        desc: '',
        date: '烽火學院',
        tool: '普/劈砍',
        size: '閃避/招架',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/Glynda Goodwitch.webp',
        category: '烽火學院'
    },
    {
        title: 'Peter Port',
        author: '長棍棒/噴火槍',
        desc: '',
        date: '烽火學院',
        tool: '快/劈砍',
        size: '閃避/招架',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/Peter Port.webp',
        category: '烽火學院'
    },
    {
        title: 'Penny Polendina',
        author: '徒手/飛刃/鋼絲/雷射炮',
        desc: '',
        date: '王國',
        tool: '快速/劈砍',
        size: '格黨/招架',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/Penny Polendina.webp',
        category: '王國'
    },
        {
        title: 'Junior Xiong',
        author: '大棍棒/火箭筒',
        desc: '',
        date: '酒吧',
        tool: '慢/重擊',
        size: '格黨/招架',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/Junior Xiong.webp',
        category: '酒吧'
    },
    {
        title: 'Melanie Malachite',
        author: '鞋刃',
        desc: '',
        date: '酒吧',
        tool: '快速/重擊',
        size: '閃避/格黨/招架',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/Melanie Malachite.webp',
        category: '酒吧'
    },
    {
        title: 'Miltia Malachite',
        author: '長爪刃',
        desc: '',
        date: '酒吧',
        tool: '快速/重擊',
        size: '閃避/格黨/招架',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/Miltia Malachite.webp',
        category: '酒吧'
    },
    {
        title: 'Raven Branwen',
        author: '武士刀/魔法',
        desc: '',
        date: '王國',
        tool: '快速/劈砍',
        size: '格黨/招架',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/Raven Branwen.webp',
        category: '王國'
    },
    {
        title: 'Qrow Branwen',
        author: '大砍刀/大鐮刀/手槍/氣功',//烏鴉視野共享
        desc: '',
        date: '王國',
        tool: '快速/劈砍',
        size: '格黨/招架',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/Qrow Branwen.webp',
        category: '王國'
    },
    {
        title: 'Winter Schnee',
        author: '軍刀/細劍/魔法',
        desc: '',
        date: '王國',
        tool: '快速/劈砍突刺',
        size: '閃避/格黨',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/Winter Schnee.webp',
        category: '王國'
    },
    {
        title: 'James Ironwood',
        author: '徒手/手槍',
        desc: '',
        date: '王國',
        tool: '普通/重擊',
        size: '閃避/格黨/招架',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/James Ironwood.webp',
        category: '王國'
    },
    {
        title: 'Sun Wukong',
        author: '長棍/雙節棍/散彈槍',
        desc: '',
        date: '《SSSN隊》',
        tool: '快速/鈍擊',
        size: '閃避/格黨',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/Sun Wukong.webp',
        category: '《SSSN隊》'
    },
        {
        title: 'Neptune Vasilias',
        author: '關刀/步槍',
        desc: '',
        date: '《SSSN隊》',
        tool: '普通/劈砍',
        size: '閃避/格黨',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/Neptune Vasilias.webp',
        category: '《SSSN隊》'
    },
        {
        title: 'Scarlet David',
        author: '彎刀/小槍',
        desc: '',
        date: '《SSSN隊》',
        tool: '快速/劈砍',
        size: '閃避/格黨',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/Scarlet David.webp',
        category: '《SSSN隊》'
    },
        {
        title: 'Sage Ayana',
        author: '大劍',
        desc: '',
        date: '《SSSN隊》',
        tool: '普通/劈砍',
        size: '閃避/格黨',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/Sage Ayana.webp',
        category: '《SSSN隊》'
    },
    {
        title: 'Nebula Violette',
        author: '弩/長刀',
        desc: '',
        date: '《NDGO隊》',
        tool: '普通/劈砍',
        size: '閃避/格黨',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/Nebula Violette.webp',
        category: '《NDGO隊》'
    },
    {
        title: 'Dew Gayl',
        author: '長仗/長槍/魔法',
        desc: '',
        date: '《NDGO隊》',
        tool: '快速/劈砍突刺',
        size: '格黨/招架',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/Dew Gayl.webp',
        category: '《NDGO隊》'
    },
    {
        title: 'Gwen Darcy',
        author: '匕首/魔法',
        desc: '',
        date: '《NDGO隊》',
        tool: '快速/投擲',
        size: '閃避',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/Gwen Darcy.webp',
        category: '《NDGO隊》'
    },
    {
        title: 'Octavia Ember',
        author: '蛇劍/法仗/魔法',
        desc: '工三小',
        date: '《NDGO隊》',
        tool: '快速/劈砍突刺',
        size: '閃避',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/Octavia Ember.webp',
        category: '《NDGO隊》'
    },
    {
        title: 'Brawnz Ni',
        author: '指爪刀/氣功',
        desc: '',
        date: '《BRNZ隊》',
        tool: '普通/重擊',
        size: '招架',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/Brawnz Ni.webp',
        category: '《BRNZ隊》'
    },
    {
        title: 'Roy Stallion',
        author: '齒輪飛盤/徒手',
        desc: '',
        date: '《BRNZ隊》',
        tool: '普通/重擊',
        size: '閃避',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/Roy Stallion.webp',
        category: '《BRNZ隊》'
    },
    {
        title: 'Nolan Porfirio',
        author: '甩棍/電擊棒',
        desc: '',
        date: '《BRNZ隊》',
        tool: '快速/劈砍突刺',
        size: '閃避/格黨',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/Nolan Porfirio.webp',
        category: '《BRNZ隊》'
    },
    {
        title: 'May Zedong',
        author: '狙擊槍/戰斧',
        desc: '',
        date: '《BRNZ隊》',
        tool: '普通/劈砍',
        size: '閃避',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/May Zedong.webp',
        category: '《BRNZ隊》'
    },    
    {
        title: 'Arslan Altan',
        author: '繃帶/徒手/氣功',
        desc: '',
        date: '《ABRN隊》',
        tool: '普通/重擊',
        size: '格黨/招架',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/Arslan Altan.webp',
        category: '《ABRN隊》'
    },
    {
        title: 'Bolin Hori',
        author: '棍棒/魔法',
        desc: '',
        date: '《ABRN隊》',
        tool: '快速/劈砍突刺',
        size: '閃避/格黨',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/Bolin Hori.webp',
        category: '《ABRN隊》'
    },
    {
        title: 'Reese Chloris',
        author: '滑板/雙槍刃/魔法',
        desc: '',
        date: '《ABRN隊》',
        tool: '快速/劈砍突刺',
        size: '閃避/格黨',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/Reese Chloris.webp',
        category: '《ABRN隊》'
    },
    {
        title: 'Nadir Shiko',
        author: '槍/長刀',
        desc: '',
        date: '《ABRN隊》',
        tool: '普通/劈砍突刺',
        size: '閃避/格黨',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/Nadir Shiko.webp',
        category: '《ABRN隊》'
    },
    {
        title: 'Adam Taurus',
        author: '武士刀/槍',
        desc: '',
        date: '白牙',
        tool: '快速/劈砍突刺',
        size: '閃避/格黨/招架',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/Adam Taurus.webp',
        category: '白牙'
    },
    {
        title: 'Cinder Fall',
        author: '雙彎刀/弓箭/魔法',
        desc: '',
        date: '其他',
        tool: '快速/劈砍突刺',
        size: '閃避/格黨',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/Cinder Fall.webp',
        category: '其他'
    },
    {
        title: 'Roman Torchwick',
        author: '拐杖/榴彈槍',
        desc: '',
        date: '其他',
        tool: '快速/劈砍',
        size: '閃避/格黨',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/Roman Torchwick.webp',
        category: '其他'
    },
    {
        title: 'Neopolitan',
        author: '傘/魔法',
        desc: '',
        date: '其他',
        tool: '快速/劈砍突刺',
        size: '閃避/格黨/招架',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/Neopolitan.webp',
        category: '其他'
    },
    {
        title: 'White Fang Lieutenant',
        author: '電鋸',
        desc: '',
        date: '白牙',
        tool: '普通/重擊',
        size: '招架',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/White Fang Lieutenant.webp',
        category: '白牙'
    },
    {
        title: 'Emerald Sustrai',
        author: '雙鐮刀/鎖鏈/雙槍',
        desc: '',
        date: '其他',
        tool: '快速/劈砍',
        size: '閃避/格黨',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/Emerald Sustrai.webp',
        category: '其他'
    },

    {
        title: 'Mercury Black',
        author: '腳套/榴彈砲',
        desc: '',
        date: '其他',
        tool: '快速/重擊',
        size: '閃避/格黨/招架',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/Mercury Black.webp',
        category: '其他'
    },
    {
        title: 'Zwei',
        author: '汪！',
        desc: '',
        date: '彩蛋',
        tool: '快速/重擊',
        size: '無敵',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/Zwei.webp',
        category: '彩蛋'
    },
    {
        title: 'Beowolf',
        author: '利爪/撕咬',
        desc: '',
        date: '戮獸',
        tool: '普通/劈砍撲咬',
        size: '逃跑/招架',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/Beowolf.webp',
        category: '戮獸'
    },
    {
        title: 'Boarbatusk',
        author: '獠牙/背甲',
        desc: '',
        date: '戮獸',
        tool: '普通/衝撞翻滾',
        size: '逃跑/招架',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/Boarbatusk.webp',
        category: '戮獸'
    },
    {
        title: 'Death Stalker',
        author: '獠牙/尾刺/夾手手',
        desc: '',
        date: '戮獸',
        tool: '普通/衝撞橫掃突刺',
        size: '格黨/招架',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/Death Stalker.webp',
        category: '戮獸'
    },
    {
        title: 'Goliath',
        author: '獠牙/背刺',
        desc: '',
        date: '戮獸',
        tool: '普通/衝撞橫掃踩踏',
        size: '格黨/招架',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/Goliath.webp',
        category: '戮獸'
    },
    {
        title: 'King Taijitu',
        author: '獠牙',
        desc: '',
        date: '戮獸',
        tool: '普通/衝撞橫掃絞殺',
        size: '格黨/招架',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/King Taijitu.webp',
        category: '戮獸'
    },
    {
        title: 'Nevermore',
        author: '鳥喙/利爪/羽毛',
        desc: '',
        date: '戮獸',
        tool: '普通/衝撞橫掃突刺',
        size: '閃避/格黨/招架',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/Nevermore.webp',
        category: '戮獸'
    },
    {
        title: 'Ursai',
        author: '利爪/背刺/利齒',
        desc: '',
        date: '戮獸',
        tool: '普通/衝撞橫掃撕咬',
        size: '格黨/招架',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/Ursai.webp',
        category: '戮獸'
    },
    {
        title: 'Monty Oum',
        author: '3D動畫師',
        desc: '2015年1月21日，蒙提在一次例行檢查中出現了嚴重的藥物過敏反應而令他昏迷。2015年2月1日，蒙提因過敏引起的併發症而死，年僅33歲。',
        date: '作者',
        tool: '恐龍彩蛋',
        size: '女裝大佬',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/Monty Oum.jpg',
        category: '作者'
    },
    {
        title: '瓦爾地圖-烽火學院(BEACON)',
        author: '',
        desc: '繪製的瓦爾地圖，烽火學院被圈起來並標註。',
        date: '地圖',
        tool: '',
        size: '',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/瓦爾地圖-烽火學院(BEACON).webp',
        category: '地圖'
    },
    {
        title: '烽火學院-懸崖邊',
        author: '',
        desc: '烽火學院於懸崖邊，俯瞰海峽對岸的城市。 懸崖頂端設有數個大型圓形平台，飛艇和飛船停靠。 懸崖底部設有水面艦艇停泊平台，一條小徑延伸至懸崖頂端。',
        date: '地圖',
        tool: '',
        size: '',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/烽火學院-懸崖邊.webp',
        category: '地圖'
    },
    {
        title: '烽火學院',
        author: '',
        desc: '烽火學院是瓦爾王國的獵人學院。',
        date: '地圖',
        tool: '',
        size: '',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/烽火學院.webp',
        category: '地圖'
    },
    {
        title: '烽火學院-主幹道',
        author: '',
        desc: '大門通往一個大型圓形劇場。',
        date: '地圖',
        tool: '',
        size: '',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/烽火學院-主幹道.webp',
        category: '地圖'
    },
    {
        title: '烽火學院-雕像',
        author: '',
        desc: '烽火學院的校園內有一座大型雕像。',
        date: '地圖',
        tool: '',
        size: '',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/烽火學院-雕像.webp',
        category: '地圖'
    },
    {
        title: '烽火學院-通訊塔-底部',
        author: '',
        desc: '塔頂聳立著許多綠色球體或燈柱。',
        date: '地圖',
        tool: '',
        size: '',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/烽火學院-通訊塔-底部.webp',
        category: '地圖'
    },
    {
        title: '烽火學院-通訊塔-頂部',
        author: '',
        desc: '塔頂聳立著許多綠色球體或燈柱。',
        date: '地圖',
        tool: '',
        size: '',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/烽火學院-通訊塔-頂部.webp',
        category: '地圖'
    },
    {
        title: '烽火學院-Ozpin辦公室',
        author: '',
        desc: '它位於通訊塔-塔頂。',
        date: '地圖',
        tool: '',
        size: '',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/烽火學院-Ozpin辦公室.webp',
        category: '地圖'
    },
    {
        title: '烽火學院-演講廳',
        author: '',
        desc: '烽火學院至少有一間類似大學階梯教室的演講廳。',
        date: '地圖',
        tool: '',
        size: '',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/烽火學院-演講廳.webp',
        category: '地圖'
    },
    {
        title: '烽火學院-食堂',
        author: '',
        desc: '烽火學院內設有一間寬敞的正式餐廳，沿著一條類似修道院的長廊延伸。',
        date: '地圖',
        tool: '',
        size: '',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/烽火學院-食堂.webp',
        category: '地圖'
    },
    {
        title: '烽火學院-圖書館',
        author: '',
        desc: '烽火學院，它原本是學生安靜閱讀和學習的地方，但學生們經常把它當作聚會場所，玩棋盤遊戲、社交聊天。',
        date: '地圖',
        tool: '',
        size: '',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/烽火學院-圖書館.webp',
        category: '地圖'
    },
    {
        title: '瓦爾-瓦爾市-廣場',
        author: '',
        desc: '瓦爾市分為多個區域，包括上層階級區、商業區、工業區、農業區和住宅區。',
        date: '地圖',
        tool: '',
        size: '',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/瓦爾-瓦爾市-廣場.webp',
        category: '地圖'
    },
    {
        title: '瓦爾-瓦爾市-商業區',
        author: '',
        desc: '瓦爾市分為多個區域，包括上層階級區、商業區、工業區、農業區和住宅區。',
        date: '地圖',
        tool: '',
        size: '',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/瓦爾-瓦爾市-商業區.webp',
        category: '地圖'
    },
    {
        title: '瓦爾-瓦爾市-商業區-港口',
        author: '',
        desc: '由於水域對面可以看到陸地，因此港口很可能位於主要河流的入海口邊緣，而不是海洋邊緣。',
        date: '地圖',
        tool: '',
        size: '',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/瓦爾-瓦爾市-商業區-港口.webp',
        category: '地圖'
    },
    {
        title: '瓦爾-瓦爾市-工業區-倉庫',
        author: '',
        desc: '瓦爾市分為多個區域，包括上層階級區、商業區、工業區、農業區和住宅區。',
        date: '地圖',
        tool: '',
        size: '',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/瓦爾-瓦爾市-工業區-倉庫.webp',
        category: '地圖'
    },
    {
        title: '瓦爾-瓦爾市-山地峽谷',
        author: '',
        desc: '山地峽谷是瓦爾城向東南方向擴張的嘗試。',
        date: '地圖',
        tool: '',
        size: '',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/瓦爾-瓦爾市-山地峽谷.webp',
        category: '地圖'
    },
    {
        title: '瓦爾-瓦爾市-山地峽谷-地下城',
        author: '',
        desc: '山地峽谷是瓦爾城向東南方向擴張的嘗試。',
        date: '地圖',
        tool: '',
        size: '',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/瓦爾-瓦爾市-山地峽谷-地下城.webp',
        category: '地圖'
    },
    {
        title: '維塔爾節-競技場',
        author: '',
        desc: 'RWBY 團隊參加了在瓦爾舉行的第 40 屆維特爾節。',
        date: '地圖',
        tool: '',
        size: '',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/維塔爾節-競技場.webp',
        category: '地圖'
    },
    {
        title: '維塔爾節-烽火校區的展覽場地',
        author: '',
        desc: 'RWBY 團隊參加了在瓦爾舉行的第 40 屆維特爾節。',
        date: '地圖',
        tool: '',
        size: '',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/維塔爾節-烽火校區的展覽場地.webp',
        category: '地圖'
    },
    {
        title: '恐龍',
        author: '吼～',
        desc: 'Monty Oum喜歡在畫面中偷偷塞入的小彩蛋。',
        date: '彩蛋',
        tool: '神出鬼沒',
        size: '無敵',
        imgUrl: 'https://raw.githubusercontent.com/swallow-234/collection/refs/heads/main/RWBY/恐龍.webp',
        category: '彩蛋'
    },

];