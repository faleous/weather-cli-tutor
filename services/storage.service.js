import { homedir } from 'os';
import { join } from 'path';
import fs from 'fs';

const filePath = join(homedir(), 'weather-data.json');

const saveKeyValue = async (key, value) => {
    let data = {};
    if(await isExist(filePath)) {
        data = savePrevValues();
    }

    data[key] = value;
    await fs.promises.writeFile(filePath, JSON.stringify(data));
};

const getKeyValue = async (key) => {
    if (await isExist(filePath)) {
        const data = savePrevValues();
        return data[key];
    }
    return undefined;
};

const savePrevValues = async () => {
    const file = await fs.promises.readFile(filePath);
    const data = JSON.parse(file);
    return data;
};

const isExist = async (path) => {
    try{
        await fs.promises.stat(path);
        return true;
    } catch(e) {
        return false;
    }
}

export { saveKeyValue, getKeyValue };