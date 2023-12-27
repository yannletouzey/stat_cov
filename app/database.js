import pg from 'pg';
import * as dotenv from 'dotenv'; 

dotenv.config(); 

const client = new pg.Client({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    port: process.env.PGPORT
});
client.connect();
export default client;