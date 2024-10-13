const { createClient } = require("redis");

let redisClient;
let redisUrl = process.env.REDIS_URL;

const connectRedis = async () => {
    if (!redisClient) {
        redisClient = createClient({
            socket: {
                host: process.env.REDIS_HOST,
                port: process.env.REDIS_PORT
            }
        });
        
        redisClient.on("error", (error) => console.error(`Error: ${error}`));
        redisClient.on('connect', () => console.info('Redis connected'));

        try {
            await redisClient.connect();
            console.log(`Connected to Redis successfully!`);
        } catch (e) {
            console.error(`Connection to Redis failed with error:`);
            console.error(e);
        }
    }
};
connectRedis()

module.exports = {redisClient, connectRedis}