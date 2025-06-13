const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/', async (req, res) => {
  const {
    inspection_date,
    judgment,
    customer_name,
    address,
    phone,
    container_info,
    pressure_monitoring,
    equipment_model,
    equipment_status
  } = req.body;

  try {
    const sql = `
      INSERT INTO safety_inspections (
        inspection_date, judgment, customer_name, address,
        phone, container_info, pressure_monitoring,
        equipment_model, equipment_status
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    await db.execute(sql, [
      inspection_date,
      judgment,
      customer_name,
      address,
      phone,
      container_info,
      pressure_monitoring,
      equipment_model,
      equipment_status
    ]);

    res.json({ status: 'success', message: '✅ 資料已成功儲存至 MySQL' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: 'error', message: '❌ 資料儲存失敗' });
  }
});

module.exports = router;
