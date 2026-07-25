import { getGamesFromDb, getPlayerStatsFromDb, getStatsFromDb, leaderboardGame, leaderboardGlobal } from "../DAL/mongos.dal.js";



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
        const { name } = req.params;
        console.log(name);

        const result = await getPlayerStatsFromDb(name);
        return res.status(200).json(result);
    } catch (e) {
        console.error(e.message);
        res.status(500).json({ Error: "server error" })
    };
};


export async function getStats(req, res, next) {
    try {
        const stats = await getStatsFromDb();
        res.status(200).json(stats)
    } catch (e) {
        console.error(e.message);
        res.status(500).json({ Error: "server error" })
    }
};


export async function getGames(req, res) {
    try {
        const games = await getGamesFromDb();
        return res.status(200).json(games);
    } catch (e) {
        console.error(e.message);
        res.status(500).json({ Error: "server error" })
    }
}


