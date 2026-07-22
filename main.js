import express from "express";
import scoresRouter from "./rouets/scores.js";
import dotenv from "dotenv/config"
// import { connectCreateScore } from "./ctrls/postCtrl.js";
import leaderboardRouter from "./rouets/leaderboard.js"

const PORT = process.env.PORT;

const app = express();


app.use(express.json());

app.use("/", scoresRouter);

app.use("/",leaderboardRouter);

// app.post("/", connectCreateScore);



app.listen(PORT || 3000, (e) => {
    if (e) return console.error(e.message);
    console.log(`server running in port ${PORT}...`);
}
);











