import express from 'express';
import { getOverviewStats, getCategoryWiseTotals, getRecentTransactions, getSummaryByMonth } from '../controllers/summaryController.js';
import { authorize } from '../middlewares/auth.js';
import { protect } from '../middlewares/protect.js';

const summaryRouter = express.Router();

summaryRouter.get('/overview', protect, authorize(['viewer', 'analyst', 'admin']), getOverviewStats);
summaryRouter.get('/category-wise', protect, authorize(['viewer', 'analyst', 'admin']), getCategoryWiseTotals);
summaryRouter.get('/recent-transactions', protect, authorize(['viewer', 'analyst', 'admin']), getRecentTransactions);
summaryRouter.get('/monthly-summary', protect, authorize(['viewer', 'analyst', 'admin']), getSummaryByMonth);

export default summaryRouter;