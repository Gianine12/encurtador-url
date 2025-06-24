import { Client } from 'pg';

const dbName = 'encurtador-url-url'

const config = {
  user: 'postgres',
  host: 'localhost',
  password: '1234',
  port: 5432,
  database: 'postgres',
};



async function dataBaseExists(){
  const client = new Client(config)

  try {
    await client.connect();
    const res = await client.query(`SELECT 1 FROM pg_database WHERE datname='${dbName}'`);
    
    if (res.rowCount === 0) {
      await client.query(`CREATE DATABASE "${dbName}"`);
    } else {
      console.log(`Banco de dados ${dbName} já existe.`);
    }
    } catch (err) {
    console.error('Erro ao verificar/criar banco:', err);
    process.exit(1);
  } finally {
    await client.end();
  }
}

dataBaseExists();