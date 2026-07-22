import express from "express"
import { getBestPlayers, getTenBestPlayersByGame } from "../ctrls/getCtrl.js";
import { isGame } from "../middlweres/getMiddlwere.js";




const router = express.Router();

router.get("/leaderboard/global",getBestPlayers)

router.get("/leaderboard/:game", isGame, getTenBestPlayersByGame);


export default router;






