import { Router } from "express";
import { getGames, getStats } from "../ctrls/getCtrl.js";


const router = Router();

router.get("/stats", getStats);

router.get("/games", getGames);

export default router;
