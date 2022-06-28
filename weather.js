#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { getWeather } from './services/api.service.js';
import { printError, printHelp, printSuccess } from './services/log.service.js';
import { saveKeyValue } from './services/storage.service.js';
import { TOKEN_DICTIONARY } from './services/storage.service.js';

const saveToken = async (tokenValue) => {
    if (!tokenValue.length) {
        printError("no token given");
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, tokenValue);
        printSuccess('token saved');
    } catch(e) {
        printError(e.message);
    }
}

const initCLI = () => {
    const args = getArgs(process.argv);
    //console.log(args);
    if (args.h) {
        printHelp();
    }
    if (args.s) {
        
    }
    if (args.t) {
        return saveToken(args.t);
    }

    getWeather('moscow');
    
};

initCLI();