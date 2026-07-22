import { createScore } from "../DAL/mongos.dal.js";


export async function connectCreateScore(req, res, next) {

    try {
        const body = req.body;
        const bodyWithDate = body["timestamps"] = new Date();

        const result = await createScore(body);

        return res.status(201).json(result)
    } catch (e) {
        console.error(e.message);
        res.status(500).json({ Error: "somthing wrong" });
    };
};