import express from 'express';
import { connectToDatabase } from '@/utils/db';
// import appRouter from "./routes/routes.js";
import cors from 'cors';

const app = express();

const startServer = async () => {
  try {
    await connectToDatabase();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors());
    // app.use("", appRouter);
  } catch (err) {
    console.error(`Kan server niet starten`);
    process.exit(1);
  }
};

startServer();
