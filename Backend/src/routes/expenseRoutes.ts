import { Router } from "express";

import { getExpenseByCategory } from "../controllers/expenseController";

const router = Router();

router.get("/", getExpenseByCategory);

export default router;
