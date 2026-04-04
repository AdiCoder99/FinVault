import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './configs/db.js';
import userRouter from './routes/userRoutes.js';
import transactionRouter from './routes/transactionRoutes.js';
import authRouter from './routes/authRoutes.js';
import summaryRouter from './routes/summaryRoutes.js';
import { apiLimiter, authLimiter } from './middlewares/rateLimiter.js';

dotenv.config({ path: './.env' });




const app = express();


await connectDB();

app.use(express.json())
app.use(cors())



app.get('/', (req, res) => {
    res.send('Server is running fine!')
})

app.use('/api/auth', authLimiter, authRouter)
app.use('/api/user', apiLimiter, userRouter)
app.use('/api/transaction', apiLimiter, transactionRouter)
app.use('/api/summary', apiLimiter, summaryRouter)



const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log(`Backend server is running on the link: http://localhost:${port}`);
})

