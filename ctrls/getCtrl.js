import { getPlayerStatsFromDb, leaderboardGame, leaderboardGlobal } from "../DAL/mongos.dal.js";



export async function getTenBestPlayersByGame(req, res, next) {
    try {
        const game = req.params;

        const respons = await leaderboardGame(game);

        return res.status(200).json(respons);
    } catch (e) {
        console.error(e.message);
        return res.status(500).json({ Error: "server faild" })
    }
};


export async function getBestPlayers(req, res, next) {
    try {

        const respons = await leaderboardGlobal();

        return res.status(200).json(respons);
    } catch (e) {
        console.error(e.message);
        return res.status(500).json({ Error: "server faild" })
    }
};

export async function getPlayerStats(req, res, next) {
    try {
        const {name} = req.params;
        console.log(name);
        
        const result = await getPlayerStatsFromDb(name);
        return res.status(200).json(result);
    } catch (e) {
        console.error(e.message);
        res.status(500).json({Error:"server error"})
    }
}


