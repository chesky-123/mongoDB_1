

export async function isValidData(req,res,next) {
    try{
        const body = req.body;
        if (body.length === 0 || !body.playerName || !body.game || !body.points){
            return res.status(401).json({Error:"invalid body"})
        };
        if ( !isNaN(body.playerName)) return res.status(400).json({Error:"invalid name"});
        if ( !isNaN(body.game)) return res.status(400).json({Error:"invalid game"});
        if ( isNaN(body.points)) return res.status(400).json({Error:"invalid points"});
        if ( Number(body.points) < 0) return res.status(400).json({Error:"Bad Request"});
        next()
    }catch(e){
        console.error(e.message);
        res.statua(500).json({Error:"server failed"})
    }
}