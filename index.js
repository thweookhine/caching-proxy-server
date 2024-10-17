const express = require('express');
const { checkArgs } = require('./utils/checkArgs.js');
const { cachingMiddleware } = require('./middlewares/cachingMiddleware.js');
const { getDataFromCache } = require('./middlewares/getDataFromCache.js');
const { redisClient, connectRedis, clearCache } = require('./config/redis.js');
require('dotenv').config();
const app = express();

// Remove node and index.js from argument
const args = process.argv.slice(2);

// Check args length
checkArgs(args);
let origin = args[3]
app.use(getDataFromCache(origin))
app.use(cachingMiddleware(origin))


const startServer = () => {
    app.listen(args[1],() =>{
        console.log(`App is listening on port: ${args[1]}`)
    })
}

startServer()