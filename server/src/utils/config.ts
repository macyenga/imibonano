// const DB_PORT: number = process.env.NODE_ENV === 'test' ? 5433 : 5432;

// const DB_NAME: string = process.env.NODE_ENV === 'test' ? 'imibonano-test' : 'imibonano';


const DB_PORT = Number(5432);

const DB_NAME = String('imibonano_db');

export { DB_NAME, DB_PORT };
