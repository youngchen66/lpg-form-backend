const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const formRoutes = require('./routes/form');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/form', formRoutes);

app.get('/', (req, res) => {
  res.send('✅ LPG 表單 API 啟動成功');
});

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
