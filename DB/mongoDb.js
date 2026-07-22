import { MongoClient } from "mongodb";
import dotenv from "dotenv/config"




const MONGO_URL = process.env.MONGO_URL;

const client = new MongoClient(MONGO_URL);


try {
    await client.connect();
} catch (e) {
    console.log("Failed connect to DB", e);
    process.exit(1);
};

const db = client.db("mongodb_1");

export const collection = await db.createCollection("games")








