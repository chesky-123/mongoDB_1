

export async function isGame(req, res, next) {
    try {
        const {game} = req.params;
        if (game === " ") return res.status(401).json({ Error: "no game entered" });
        return next()
    } catch (e) {
        console.error(e.message);
        res.status(500).json({ Error: "server error" })
    }
};



export async function isName(req,res,next) {
    try {
        const {name} = req.params;
        if (typeof name === " ") return res.status(401).json({ Error: "no name entered" });
        return next()
    } catch (e) {
     console.error(e.message);
        res.status(500).json({ Error: "server error" })   
    }
}