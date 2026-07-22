

export async function isGame(req, res, next) {
    try {
        const game = req.params;
        if (game.game === " ") return res.status(401).json({ Error: "no game entered" });
        next()
    } catch (e) {
        console.error(e.message);
        res.status(500).json({ Error: "server error" })
    }
}