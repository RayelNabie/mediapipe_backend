import { Pool } from 'pg';
import { envConfig } from '@/config/env';

const pool = new Pool({
  user: envConfig.dbUser,
  host: envConfig.dbHost,
  database: envConfig.dbName,
  password: envConfig.dbPassword,
  port: envConfig.dbPort,
  max: envConfig.dbMaxPoolSize,
});

export default pool;
