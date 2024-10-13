const { default: axios } = require("axios");
const { redisClient } = require("../config/redis");

const cachingMiddleware = (origin) => {
    return async(req,res,next) => {
        const request_url = `${origin}/${req.url}`
        const response = await axios.get(request_url);
        const result = response.data
        if(result){
            await redisClient.set(request_url,JSON.stringify(result),{
                EX: 300,
                NX: true,
            });
            res.status(200).send(result);
        }
    }
}

module.exports = {cachingMiddleware}