import { Router } from "express";
import { getStats } from "../ctrls/getCtrl.js";


const router = Router();

router.get("/stats",getStats)

export default router;
