import 'dotenv/config';

export const envConfig = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT || '3000', 10),
  mongoUri: process.env.MONGO_URI,
  dbHost: process.env.DB_HOST || 'localhost',
  dbUser: process.env.DB_USER || 'postgres',
  dbPassword: process.env.DB_PASSWORD || 'postgres',
  dbName: process.env.DB_NAME || 'mydatabase',
  dbPort: parseInt(process.env.DB_PORT || '5432', 10),
  dbMaxPoolSize: parseInt(process.env.DB_MAX_POOL_SIZE || '20', 10),
};
