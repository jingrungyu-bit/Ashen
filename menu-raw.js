// ═══════════════════════════════════════════════════════════════════════════
//  菜單原始資料 — 餐廳業者在此編輯
//
//  欄位說明:
//    category  分類代碼
//    name      品項中文名稱
//    options   價格選項陣列（不分規格填 ['90']，時價填 ['時價']）
//    tags      標記代碼陣列（R 推薦 / 1-3 辣度 / V 素食 / V5 五辛素 / H 清真）
//    image     圖片檔名（放在 images/ 資料夾），尚無填 null
//    emoji     無圖片時顯示的替代圖示
//    note      中文備註（空白填 ''）
// ═══════════════════════════════════════════════════════════════════════════

var menuRaw = [
  // ── 湯麵類 ──────────────────────────────────────────────────────────────
  { category: 'noodle_soup', name: '鮮蔬米線',       options: ['90'],  tags: [], image: null, emoji: '🍜', note: '' },
  { category: 'noodle_soup', name: '鮮蔬空心麵',     options: ['90'],  tags: [], image: null, emoji: '🍜', note: '' },
  { category: 'noodle_soup', name: '鮮蔬米苔目',     options: ['90'],  tags: [], image: null, emoji: '🍜', note: '' },
  { category: 'noodle_soup', name: '鮮蔬冬粉',       options: ['90'],  tags: [], image: null, emoji: '🍜', note: '' },
  { category: 'noodle_soup', name: '紅燒河粉',       options: ['90'],  tags: [], image: null, emoji: '🍜', note: '' },
  { category: 'noodle_soup', name: '紅燒素米線',     options: ['90'],  tags: [], image: null, emoji: '🍜', note: '' },
  { category: 'noodle_soup', name: '紅燒麵',         options: ['90'],  tags: [], image: null, emoji: '🍜', note: '' },
  { category: 'noodle_soup', name: '紅燒冬粉',       options: ['90'],  tags: [], image: null, emoji: '🍜', note: '' },
  { category: 'noodle_soup', name: '番茄米線',       options: ['90'],  tags: [], image: null, emoji: '🍜', note: '' },
  { category: 'noodle_soup', name: '筍子米線',       options: ['90'],  tags: [], image: null, emoji: '🍜', note: '季節限定' },

  // ── 炒類 ────────────────────────────────────────────────────────────────
  { category: 'stir_fry', name: '越式炒河粉',        options: ['100'], tags: [], image: null, emoji: '🥢', note: '' },
  { category: 'stir_fry', name: '越式炒麵',          options: ['100'], tags: [], image: null, emoji: '🥢', note: '' },
  { category: 'stir_fry', name: '炒冬粉',            options: ['100'], tags: [], image: null, emoji: '🥢', note: '' },
  { category: 'stir_fry', name: '越式炒空心麵',      options: ['100'], tags: [], image: null, emoji: '🥢', note: '' },
  { category: 'stir_fry', name: '越式炒飯',          options: ['90'],  tags: [], image: null, emoji: '🍳', note: '' },
  { category: 'stir_fry', name: '炒青菜',            options: ['60'],  tags: [], image: null, emoji: '🥬', note: '' },
  { category: 'stir_fry', name: '咖喱炒飯',          options: ['90'],  tags: [], image: null, emoji: '🍛', note: '' },
  { category: 'stir_fry', name: '咖喱炒河粉',        options: ['100'], tags: [], image: null, emoji: '🍛', note: '' },
  { category: 'stir_fry', name: '咖喱炒麵（辣）',   options: ['100'], tags: [], image: null, emoji: '🍛', note: '' },
  { category: 'stir_fry', name: '咖喱炒冬粉',        options: ['100'], tags: [], image: null, emoji: '🍛', note: '' },
  { category: 'stir_fry', name: '咖喱炒空心麵',      options: ['100'], tags: [], image: null, emoji: '🍛', note: '' },

  // ── 乾類 ────────────────────────────────────────────────────────────────
  { category: 'dry', name: '火腿皮絲飯',             options: ['80'],  tags: [], image: null, emoji: '🍱', note: '' },
  { category: 'dry', name: '乾皮絲米線',             options: ['80'],  tags: [], image: null, emoji: '🍱', note: '' },
  { category: 'dry', name: '招牌麵包',               options: ['80'],  tags: [], image: null, emoji: '🥖', note: '' },
  { category: 'dry', name: '法國麵包卷（皮絲）',    options: ['80'],  tags: [], image: null, emoji: '🥖', note: '' },
  { category: 'dry', name: '法國麵包（火腿）',      options: ['80'],  tags: [], image: null, emoji: '🥖', note: '' },
  { category: 'dry', name: '越式煎薄餅',             options: ['100'], tags: [], image: null, emoji: '🥞', note: '' },
  { category: 'dry', name: '香春辣拉餅',             options: ['40'],  tags: [], image: null, emoji: '🥙', note: '' },
  { category: 'dry', name: '原味素馨香',             options: ['70'],  tags: [], image: null, emoji: '🌿', note: '' },
  { category: 'dry', name: '披薩',                   options: ['110'], tags: [], image: null, emoji: '🍕', note: '' },
  { category: 'dry', name: '鮮味春捲',               options: ['70'],  tags: [], image: null, emoji: '🫔', note: '' },
  { category: 'dry', name: '木瓜絲',                 options: ['70'],  tags: [], image: null, emoji: '🥗', note: '' },
  { category: 'dry', name: '白玉豆腐',               options: ['40'],  tags: [], image: null, emoji: '🫘', note: '' },
  { category: 'dry', name: '小菜',                   options: ['60'],  tags: [], image: null, emoji: '🥗', note: '' },
  { category: 'dry', name: '燙青菜',                 options: ['50'],  tags: [], image: null, emoji: '🥬', note: '' },

  // ── 湯 ──────────────────────────────────────────────────────────────────
  { category: 'soup', name: '紫菜湯',                options: ['40'],  tags: [], image: null, emoji: '🥣', note: '' },
  { category: 'soup', name: '豆腐湯',                options: ['40'],  tags: [], image: null, emoji: '🥣', note: '' },
  { category: 'soup', name: '綜合湯',                options: ['40'],  tags: [], image: null, emoji: '🥣', note: '' },
  { category: 'soup', name: '紅燒湯',                options: ['40'],  tags: [], image: null, emoji: '🥣', note: '' },

  // ── 飲料 ────────────────────────────────────────────────────────────────
  { category: 'drink', name: '黑咖啡',               options: ['60'],  tags: [], image: null, emoji: '☕', note: '' },
  { category: 'drink', name: '煉乳咖啡',             options: ['60'],  tags: [], image: null, emoji: '☕', note: '' },
  { category: 'drink', name: '冰檸檬汁',             options: ['50'],  tags: [], image: null, emoji: '🍋', note: '' },
  { category: 'drink', name: '冰蘿蔔子汁',           options: ['50'],  tags: [], image: null, emoji: '🧃', note: '' },
  { category: 'drink', name: '椰子水',               options: ['35'],  tags: [], image: null, emoji: '🥥', note: '' },
  { category: 'drink', name: '豆奶',                 options: ['35'],  tags: [], image: null, emoji: '🥛', note: '' },
  { category: 'drink', name: '寧檸綠茶',             options: ['35'],  tags: [], image: null, emoji: '🍵', note: '' },

  // ── 甜點 ────────────────────────────────────────────────────────────────
  { category: 'dessert', name: '越南涼糕',           options: ['50'],  tags: [], image: null, emoji: '🍮', note: '' },
  { category: 'dessert', name: '果凍',               options: ['50'],  tags: [], image: null, emoji: '🟢', note: '' },
  { category: 'dessert', name: '摩摩喳喳',           options: ['50'],  tags: [], image: null, emoji: '🍡', note: '' },
];
