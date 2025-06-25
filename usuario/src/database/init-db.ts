import { Client } from 'pg';

const dbName = 'encurtador-url-usuario';

const config = {
  user: 'postgres',
  host: 'localhost',
  password: '1234',
  port: 5432,
  database: 'postgres',
};

async function createDatabaseIfNotExists() {
  const client = new Client(config);

  try {
    await client.connect();

    const res = await client.query(`SELECT 1 FROM pg_database WHERE datname='${dbName}'`);

    if (res.rowCount === 0) {
      await client.query(`CREATE DATABASE "${dbName}"`);
      console.log(`Banco de dados '${dbName}' criado com sucesso.`);
    } else {
      console.log(`Banco de dados '${dbName}' já existe.`);
    }
  } catch (error) {
    console.error('Erro ao criar banco de dados:', error);
    process.exit(1);
  } finally {
    await client.end();
  }
}

createDatabaseIfNotExists();
