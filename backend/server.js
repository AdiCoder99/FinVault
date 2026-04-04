import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './configs/db.js';
import userRouter from './routes/userRoutes.js';
import transactionRouter from './routes/transactionRoutes.js';
import authRouter from './routes/authRoutes.js';
import summaryRouter from './routes/summaryRoutes.js';

const app = express();

dotenv.config({ path: './.env' });

await connectDB();

app.use(express.json())
app.use(cors())




app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)
app.use('/api/transaction', transactionRouter)
app.use('/api/summary', summaryRouter)



const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(`Backend server is running on the link: http://localhost:${port}`);
})

