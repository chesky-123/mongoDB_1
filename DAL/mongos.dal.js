import { count } from "node:console";
import { collection } from "../DB/mongoDb.js";


export async function createScore(data) {
    const plyer = await collection.insertOne(data);
    plyer._id = await plyer.insertedId;
    return plyer;
};

export async function leaderboardGame(game) {
    console.log(game);

    const result = await collection.aggregate([
        { $match: { game: game } },
        { $sort: { points: -1 } },
        { $limit: 10 },
        {$project:{_id:0}}
    ]).toArray();
    console.log(result);

    return result;
};

export async function leaderboardGlobal() {

    const result = await collection.find().sort({ points: -1 }).limit(10).toArray();

    return result;
};

export async function getPlayerStatsFromDb(name) {

    const playerProfile = await collection.aggregate([
        { $match: { playerName: name } },
        {
            $facet: {
                allScores: [
                    { $sort: { timestamps: -1 } }
                ],
                bestPerGame: [{
                    $group: {
                        _id: "$game",
                        best: { $max: "$points" }
                    }
                },
                {
                    $project: {
                        _id: 0,
                        game: "$_id",
                        best: 1
                    }
                }]
            }
        }

    ]).toArray()
    return playerProfile[0];
};

export async function getStatsFromDb() {
    const stats = await collection.aggregate([
        {
            $facet: {
                topScore: [{ $sort: { points: -1 } },
                { $limit: 1 }],
                allScores: [{ $count: "count" }],
                popularGame: [{
                    $group: {
                        _id: "$game",
                        count: { $sum: 1 }
                    }
                }, {
                    $sort: { count: -1 }
                }, {
                    $limit: 1
                }, {
                    $project: {
                        _id: 0,
                        game: "$_id",
                        count: 1
                    }
                }
                ],
                averageScore: [{
                    $group: {
                        _id: null,
                        avgPoints: { $avg: "$points" }
                    }
                },
                { $project: { _id: 0 } }]
            }
        }
    ]).toArray()
    return stats[0]
};

export async function getGamesFromDb() {
    const games = await collection.distinct("game");
    console.log(games);

    return games
};









