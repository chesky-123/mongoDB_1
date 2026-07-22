

export async function isValidData(req,res,next) {
    try{
        const body = req.body;
        if (body.length === 0 || !body.playerName || !body.game || !body.points){
            return res.status(401).json({Error:"invalid body"})
        };
        next()
    }catch(e){
        console.error(e.message);
        res.statua(500).json({Error:"server failed"})
    }
}