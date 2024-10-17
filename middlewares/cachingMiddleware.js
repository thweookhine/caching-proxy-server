const { default: axios } = require("axios");
const { redisClient } = require("../config/redis");

const cachingMiddleware = (origin) => {
    return async(req,res,next) => {
        const request_url = `${origin}/${req.url}`
        
        try{
            const response = await axios.get(request_url);
            const result = response.data
            
            if(result){
                console.info('The response is from the origin server')
                console.info('X-Cache: MISS')
                res.setHeader('X-Cache','MISS')
                await redisClient.set(request_url,JSON.stringify(result),{
                    EX: 300,
                    NX: true,
                });
                res.status(200).send(result);
            }
        }catch(err){
            if(err.response && err.response.status == 400){
                res.status(404).send({
                    "error-msg": "Request NOT Found"
                })
            }
            console.log("Request failed")
            res.status(err.response ? err.response.status : 500).send({
                "error-msg": err.message
            });
        }
    }
}

module.exports = {cachingMiddleware}