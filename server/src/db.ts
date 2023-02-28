import { Pool } from 'pg';
import { DB_PORT, DB_NAME } from './utils/config';

const pool = new Pool({
	user: 'postgres',
	host: 'imibonano-1.cvusofg0vjpu.us-east-1.rds.amazonaws.com',
	database: 'imibonano_db',
	password: 'Present100%',
	port: 5432,
	ssl: true
});

export default pool;
