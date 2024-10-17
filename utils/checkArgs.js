const { redisClient, clearCache } = require("../config/redis");
const { showSampleCmd } = require("./showSampleCmd");


const checkArgs =async (args) => {

    if(args[0] == '--help' || args[0] == '-h' || args[0] == 'help'){
        showSampleCmd();
        process.exit(1)
    }
    
    // Checkk args length
    if(args.length != 4 && args[0] !== '--clear-cache'){
        console.error('Arguments Length must be 4!')
        showSampleCmd();
        process.exit(1)
    }

    if(args[0] == '--clear-cache'){
        await clearCache()
        console.log('Successfully cleared all caches.')
        process.exit(1)
    }else if(args[0] !== '--port' || args[2] !== '--origin'){
        console.error('Arguments does not match')
        showSampleCmd();
        process.exit(1)
    }
}

module.exports = {checkArgs}