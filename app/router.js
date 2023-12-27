import express from 'express';
import client from './database.js';
const router = express.Router();


// doc api
router.get('/doc', (req, res) => { 
    const filePath = path.join(__dirname, './public/doc/doc.html');
res.status(200).sendFile(filePath);
});
router.get('/doc/style.css', (req, res) => { 
    const filePath = path.join(__dirname, './public/doc/style.css');
res.status(200).sendFile(filePath);
});

router.get('/departments', async (req, res) => {
    const result = await client.query('SELECT * FROM "departments"');
    res.json(result.rows);
})
router.get('/global_data_by_department', async (req, res) => {
    const result = await client.query('SELECT * FROM "global_data_by_department"');
    res.json(result.rows);
})
router.get('/global_data_national', async (req, res) => {
    const result = await client.query('SELECT * FROM "global_data_national"');
    res.json(result.rows);
})
router.get('/national_vaccination_by_age', async (req, res) => {
    const result = await client.query('SELECT * FROM "national_vaccination_by_age" ORDER BY id Limit 1000');
    res.json(result.rows);
})
router.get('/national_vaccination_by_vaccine', async (req, res) => {
    const result = await client.query('SELECT * FROM "national_vaccination_by_vaccine" ORDER BY id Limit 1000');
    res.json(result.rows);
})
router.get('/national_vaccination', async (req, res) => {
    const result = await client.query('SELECT * FROM "national_vaccination"');
    res.json(result.rows);
})
router.get('/vaccination_by_department_by_vaccine', async (req, res) => {
    const result = await client.query('SELECT * FROM "vaccination_by_department_by_vaccine" ORDER BY id Limit 1000');
    res.json(result.rows);
})
export default router;
