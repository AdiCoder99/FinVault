import express from 'express'
import { createTransaction, getAllTransactions, updateTransaction, deleteTransaction } from '../controllers/transactionController.js'
import { authorize } from '../middlewares/auth.js'
import { protect } from '../middlewares/protect.js'
const transactionRouter = express.Router()

transactionRouter.post('/add', protect, authorize(['admin']), createTransaction)
transactionRouter.get('/all', protect, authorize(['admin', 'analyst']), getAllTransactions)
transactionRouter.put('/update/:id', protect, authorize(['admin']), updateTransaction)
transactionRouter.delete('/delete/:id', protect, authorize(['admin']), deleteTransaction)

export default transactionRouter;