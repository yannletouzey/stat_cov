import pg from 'pg';

const client = new pg.Client({
    host: 'localhost',
    user: 'yzey',
    password: 'PanaME',
    database: 'stat_cov',
    port: 5432
});
client.connect();
export default client;