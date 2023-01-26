import { Pool } from 'pg';


const pool = new Pool({
	user: 'postgres',
	host: 'imibonano-1.cvusofg0vjpu.us-east-1.rds.amazonaws.com',
	database: 'imibonano_db',
	password: 'Present100%',
	port: 5432
});

export default pool;