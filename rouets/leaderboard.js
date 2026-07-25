import express from "express"
import { getBestPlayers, getPlayerStats, getTenBestPlayersByGame } from "../ctrls/getCtrl.js";




const router = express.Router();

router.get("/leaderboard/global", getBestPlayers);

router.get("/leaderboard/:game", getTenBestPlayersByGame);

router.get("/player/:name", getPlayerStats);

export default router;






