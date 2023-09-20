const concurrently = require('concurrently');

concurrently([
    { command: 'node scripts/sb-watch.js', name: 'CL_1', prefixColor: 'bgBlue.bold' },
    { command: 'node scripts/sb-watch.js', name: 'CL_2', prefixColor: 'bgBlue.bold' },


    { 
        command: 'node_modules/.bin/browser-sync --reload-delay 2000 --reload-debounce 2000 cl_1 -w --ui-port 3001 --port 3002 --no-online',
        name: 'CL_1', 
        prefixColor: 'bgBlue.bold',
    },

    { 
        command: 'node_modules/.bin/browser-sync --reload-delay 2000 --reload-debounce 2000 cl_2 -w --ui-port 3003 --port 3004 --no-online',
        name: 'CL_2',
        prefixColor: 'bgRed.bold',
    },
    { 
        command: 'node_modules/.bin/browser-sync --reload-delay 2000 --reload-debounce 2000 cl_3 -w --ui-port 3005 --port 3006 --no-online',
        name: 'CL',
        prefixColor: 'bgGreen.bold',
    },
    { 
        command: 'node_modules/.bin/browser-sync --reload-delay 2000 --reload-debounce 2000 cl_4 -w --ui-port 3007 --port 3008 --no-online',
        name: 'CL',
        prefixColor: 'bgCyan.bold',
    },
    { 
        command: 'node_modules/.bin/browser-sync --reload-delay 2000 --reload-debounce 2000 aelectrico --ui-port 3009 -w --port 3010 --no-online',
        name: 'CL',
        prefixColor: 'bgCyan.bold',
    },
    {
        command: 'node_modules/.bin/browser-sync --reload-delay 2000 --reload-debounce 2000 aelectrico --ui-port 3011 -w --port 3010 --no-online',
        name: 'CL',
        prefixColor: 'bgCyan.bold',
    },
    {
        command: 'node_modules/.bin/browser-sync --reload-delay 2000 --reload-debounce 2000 camaron -w --ui-port 3013 --port 3014 --no-online',
        name: 'CL',
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
