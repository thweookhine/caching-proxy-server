const { showSampleCmd } = require("./showSampleCmd");

const checkArgs = (args) => {
    // Checkk args length
    if(args.length != 4 && args[0] !== '--clear-cache'){
        console.error('Arguments Length must be 4!')
        showSampleCmd();
        process.exit(1)
    }

    if(args[0] === '--clear-cache') {
        // TODO Clear cache
    }else{
        if(args[0] !== '--port' || args[2] !== '--origin'){
            console.error('Arguments does not match')
            showSampleCmd();
            process.exit(1)
        }
        // if(!Number.isInteger(args[1])){
        //     console.error('Port Number should be only Number')
        //     showSampleCmd();
        //     process.exit(1)
        // }
    }
}

module.exports = {checkArgs}