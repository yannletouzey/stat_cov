import express from 'express';

import router from './app/router.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express();
app.use(express.static('./public'));

const port =  3005;
const url_server = 'localhost';

app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);

app.listen(port, () => { console.log(`Start server http://${url_server}:${port}`) });