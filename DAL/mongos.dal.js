import { collection } from "../DB/mongoDb.js";


export async function createScore(data) {
    const plyer = await collection.insertOne(data);
    plyer._id = await plyer.insertedId;
    return plyer;
};

export async function leaderboardGame(game) {

    const result = await collection.find({ game: game.game }).sort({ points: -1 }).limit(10).toArray();

    return result;
};

export async function leaderboardGlobal() {

    const result = await collection.find().sort({ points: -1 }).limit(10).toArray();
    console.log(result);

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
}









