const { createClient } = require("redis");

let redisClient;

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

const clearCache = async () => {
    await connectRedis()
    await redisClient.flushAll();
    await redisClient.disconnect();
}

module.exports = {redisClient, connectRedis, clearCache}