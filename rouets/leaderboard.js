import express from "express"
import { getBestPlayers, getPlayerStats, getTenBestPlayersByGame } from "../ctrls/getCtrl.js";
import { isGame, isName } from "../middlweres/getMiddlwere.js";




const router = express.Router();

router.get("/leaderboard/global", getBestPlayers);

router.get("/leaderboard/:game", isGame, getTenBestPlayersByGame);

router.get("/player/:name", isName, getPlayerStats);

export default router;






