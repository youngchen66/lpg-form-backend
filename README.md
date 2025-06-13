# 液化石油氣安全檢查填報系統

這是一個前後端整合的表單系統，適用於液化石油氣（LPG）安檢人員現場填報作業。

整合內容：
- ✅ 前端網頁填報表單（HTML + CSS + JS）
- ✅ Express + MySQL 後端 API
- ✅ 支援手機響應介面
- ✅ 成功/失敗回饋訊息

---

## 🚀 專案結構

```
📁 lpg-form-project
├── backend/              # Node.js + Express + MySQL API
│   ├── index.js
│   ├── .env
│   └── package.json
├── public/               # 前端表單頁面
│   └── index.html
├── README.md
└── ...
```

---

## 🔧 前置作業

### ✅ 一、建立資料庫與資料表
```sql
CREATE DATABASE lpg_form_db DEFAULT CHARACTER SET utf8mb4;

USE lpg_form_db;

CREATE TABLE lpg_records (
  id INT AUTO_INCREMENT PRIMARY KEY,
  inspection_date DATE,
  judgment VARCHAR(10),
  customer_name VARCHAR(100),
  address TEXT,
  phone VARCHAR(20),
  container_info TEXT,
  pressure_monitoring VARCHAR(10),
  equipment_model VARCHAR(100),
  equipment_status VARCHAR(10),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### ✅ 二、安裝 Node.js 環境
```bash
npm install
```

新增 `.env` 檔案，填入 MySQL 資訊：
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=lpg_form_db
PORT=3000
```

---

## 🖥️ 三、啟動後端伺服器
```bash
cd backend
node index.js
```

若順利啟動，會看到：
```
✅ LPG 表單 API 已啟動：http://localhost:3000
```

---

## 🌐 四、前端填報表單設定

### 1. 編輯 `public/index.html`
將以下 API 位址改為你實際部署的 Render / 自架主機網址：
```js
fetch("https://your-api-url.onrender.com/api/form", {...})
```

### 2. 本機開啟
```bash
cd public
open index.html  # 或直接用瀏覽器開啟此檔案
```

---

## ☁️ 五、Render 雲端部署（推薦）

### 步驟：
1. 登入 [https://render.com](https://render.com)
2. 點選 `+ New Web Service`
3. 連接你的 GitHub repo
4. 部署 `backend/` 目錄下的 Node.js 專案
5. 建立環境變數（與 `.env` 相同）
6. 確保你的資料庫允許 Render IP 存取

---

## 🔗 API 測試

### ✅ POST /api/form
送出安檢資料至後端儲存：
```json
{
  "inspection_date": "2024-06-12",
  "judgment": "好",
  "customer_name": "小林瓦斯行",
  "address": "高雄市鳳山區...",
  "phone": "0912345678",
  "container_info": "20公斤 × 1",
  "pressure_monitoring": "有",
  "equipment_model": "ABC-123",
  "equipment_status": "好"
}
```

---

## 🙌 聯絡作者

本專案由 [@youngchen66](https://github.com/youngchen66) 發起。
如需協助或功能擴充，歡迎提出 Issue 或 Pull Request。

---

> 若您需整合 LINE 通知、拍照上傳、後台查詢、PDF 匯出報表等功能，請與我聯絡，我可進一步支援！
