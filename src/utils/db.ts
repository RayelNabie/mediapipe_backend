import pool from '@/config/db';

export const connectToDatabase = async () => {
  try {
    const client = await pool.connect();
    await client.query('SELECT 1');
    client.release();
  } catch (err) {
    Error(`Failed database connection: ${(err as Error).message}`);
    process.exit(1);
  }
};

