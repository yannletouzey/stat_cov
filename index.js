import express from 'express';
import pg from 'pg';

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const client = new pg.Client({
    host: 'localhost',
    user: 'yzey',
    password: 'PanaME',
    database: 'stat_cov',
    port: 5432
});
client.connect();

const app = express();
app.use(express.static('./public'));

const port =  3005;
const url_server = 'localhost';

app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// doc api
app.get('/doc', (req, res) => { 
  const filePath = path.join(__dirname, './public/doc/doc.html');
  res.status(200).sendFile(filePath);
});
app.get('/doc/style.css', (req, res) => { 
  const filePath = path.join(__dirname, './public/doc/style.css');
  res.status(200).sendFile(filePath);
});

app.get('/departments', async (req, res) => {
  const result = await client.query('SELECT * FROM "departments"');
  res.json(result.rows);
})
app.get('/global_data_by_department', async (req, res) => {
  const result = await client.query('SELECT * FROM "global_data_by_department"');
  res.json(result.rows);
})
app.get('/global_data_national', async (req, res) => {
  const result = await client.query('SELECT * FROM "global_data_national"');
  res.json(result.rows);
})
app.get('/national_vaccination_by_age', async (req, res) => {
  const result = await client.query('SELECT * FROM "national_vaccination_by_age" ORDER BY id Limit 1000');
  res.json(result.rows);
})
app.get('/national_vaccination_by_vaccine', async (req, res) => {
  const result = await client.query('SELECT * FROM "national_vaccination_by_vaccine" ORDER BY id Limit 1000');
  res.json(result.rows);
})
app.get('/national_vaccination', async (req, res) => {
  const result = await client.query('SELECT * FROM "national_vaccination"');
  res.json(result.rows);
})
app.get('/vaccination_by_department_by_vaccine', async (req, res) => {
  const result = await client.query('SELECT * FROM "vaccination_by_department_by_vaccine" ORDER BY id Limit 1000');
  res.json(result.rows);
})

app.listen(port, () => { console.log(`Start server http://${url_server}:${port}`) });