import chalk from 'chalk';


const printError = (error) => {
    console.log(chalk.bgred('error' + ' ' + error));
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

export {printError, printHelp, printSuccess};
