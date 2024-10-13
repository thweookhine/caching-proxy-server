const { redisClient } = require("../config/redis");

const getDataFromCache = (origin) => {
    return async(req, res, next) => {
        const request_url = `${origin}/${req.url}`
        try{
            const cachedResult = await redisClient.get(request_url);
            if(cachedResult){
                console.info('X-Cache: HIT')
                res.setHeader('X-Cache','HIT')
                res.status(200).send(JSON.parse(cachedResult))
            }else{
                console.info('X-Cache: MISS')
                res.setHeader('X-Cache','MISS')
                next();
            }
        }catch(err){
            next();
        }
      }
}

module.exports = {getDataFromCache}