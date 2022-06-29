#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { getWeather } from './services/api.service.js';
import { printError, printHelp, printSuccess, printWeather} from './services/log.service.js';
import { getKeyValue, saveKeyValue } from './services/storage.service.js';
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

const saveCity = async (city) => {
    if (!city.length) {
        printError('no city given');
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.city, city);
        printSuccess('city saved');
    } catch (e) {
        printError(e.message);
    }
}

const getForcast = async () => {
    let weather = {};
    try {
        weather = await getWeather(process.env.CITY ?? await getKeyValue(TOKEN_DICTIONARY.city));
    } catch(e) {
        if (e?.response?.status == 404) {
            printError('wrong city');
        } else if (e?.response?.status == 401) {
           printError('wrong token'); 
        } else {
            printError(e.message);
        }
    }
    printWeather(weather);
};

const initCLI = () => {
    const args = getArgs(process.argv);
    //console.log(args);
    if (args.h) {
        printHelp();
    }
    if (args.s) {
       return saveCity(args.s); 
    }
    if (args.t) {
        return saveToken(args.t);
    }

    getForcast();

};

initCLI();