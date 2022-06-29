import chalk from 'chalk';


const printError = (error) => {
    console.log(chalk.bgRed('error') + ' ' + error);
};

const printSuccess = (message) => {
    console.log(chalk.bgGreen('success') + ' ' + message);
};

const printHelp = () => {
    console.log(
        chalk.bgCyan('help') + '\n' +
        'without parameters - output of weather' + '\n' +
        '-s [city] to set city' + '\n' +
        '-h for help' + '\n' +
        '-t [api_key] to save token'
    );
};

const printWeather = (weatherData) => {
    console.log(chalk.bgYellow('WEATHER'), '\n',
    'it is ', weatherData.weather[0].main, ' ', getIcon(weatherData.weather[0].icon), ' outside \n', 
    'temperature: ', weatherData.main.temp, '\n',
    'feels like: ', weatherData.main.feels_like, '\n',
    'wind speed: ', weatherData.wind.speed);
};

const getIcon = (icon) => {
    switch(icon.slice(0, -1)) {
        case '01':
            return '☼';
        case '02':
            return '⛅';
        case '03':
            return '☁';
        case '04':
            return '⛈';
        case '09':
            return '🌧';
        case '10':
            return '🌦';
        case '11':
            return '🌩';
        case '13':
            return '☃';
        case '50':
            return '🌁';
    }
};

export {printError, printHelp, printSuccess, printWeather};
