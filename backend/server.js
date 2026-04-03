import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './configs/db.js';

dotenv.config();

const app = express();

app.use(express.json())
app.use(cors())

connectDB();


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api/users', )



const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

