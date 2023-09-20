const concurrently = require('concurrently');

concurrently([
    { 
        command: 'node_modules/.bin/browser-sync --reload-delay 2000 --reload-debounce 2000 . -w --ui-port 3201 --port 3202 --no-online',
        name: 'DESIGNER',
        prefixColor: 'bgCyan.bold',
    }
], {
    prefix: 'name',
    killOthers: ['failure', 'success'],
}).then(success, failure);

function success() {
    console.log('Success');    
}

function failure() {
    console.log('Failure');
}
