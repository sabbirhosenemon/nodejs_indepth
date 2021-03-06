/*
NOTE: Processes and Threads
Every process can have multiple threads. If we have multiple core CPU then we can run multiple threads paralelly on different core. 
Otherwise we have to run multiple threads concurrently on a single core CPU. 

Concurrency: we run multiple things at a time but switching back and forth. This operations seem happening paralelly but this is 
concurrently and happening so fast at CPU's clock speed like 2.4 GHz or 3 GHz. one thing for some time and other thing for sometime.
*/

// process.argv > when we run code in REPL we can pass value to our script dynamically using the REPL command.
// REPL: Read, Eval, Print, Loop > on our console or terminal

/*
NOTE: Phases of Event Loop
4 major phases of Node's event loop: Every phase loops through a single element of call back queues and the priority is 
Timer (setTimeout, SetTimeInterval) > I/O Callbacks > setImmediate > Close Callbacks. 

After finishing one loop it runs again and checks the queues serially. 
This event loop along with V8 and libuv makes the Node that we can use for the server.

Resources:
1. https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/
*/

/*
NOTE: PHP, Python vs Node
PHP and Python are blocking IO and use Apache/Nginx server to serve the request which uses threads for every request. 

Other hand,  in node IO is handled by the JS V8 engine which is single threaded. As soon it takes any request it passes the request 
to the libuv or directly to the OS using event loop. So JS is non blocking and don't uses many thread for many request.

Though we can use Apache/Nginx in front of node sometimes for better performance if we have more complex applications with 
thousands of concurrent users.
*/

/*
NOTE: Use cases of Node
Best use cases of node: Node is best for IO heavy applications. Where we don't use CPU much but use database, 
drive or network call through the OS.

Worst use cases of Node: We shouldn't use node for calculating tasks like machine learning, video processing. 
These are CPU or GPU heavy tasks and these will block the event loop. We can do these tasks using Node but node 
won't help us with these tasks over other languages.
*/

// Observer design pattern: The subject is being observed. Observers subscribe to the subject and get notified when an event occurs by the subject which is being observed.

// // Node event emitter ===========
// // we can use any module (our or 3rd party) using require('module name') and assign it to any variable to use the functionality of that module.
// const EventEmitter = require('events'); // using commonJS module system
// // import EventEmitter from 'events'; // using ES6 module system
// const celebrity = new EventEmitter();

// // subscribe to the celebrity for the race event true for win
// celebrity.on('race', (data) => {
//     if(data === 'win'){
//         console.log('Party time! we winnn');
//     }
// });

// // subscribe to the celebrity for the race event true for lost
// celebrity.on('race', (data) => {
//     if(data === 'lost'){
//         console.log('Sadddd! we are lost :(');
//     }
// });

// // subscribe to the celebrity for the party event true for fun
// celebrity.on('party', (data) => {
//     if(data === 'fun'){
//         console.log('Its party time. lets fun...');
//     }
// });

// // exit event after running the program with code
// process.on('exit', (code) => console.log('Exit with code: ', code))

// // when the event is emitted, the dedicated event listener will be called.
// celebrity.emit('race', 'win');
// celebrity.emit('race', 'win');
// celebrity.emit('race', 'lost');
// celebrity.emit('party', 'fun');

// // node http module
// const https =  require('https')
// const { request, get } = require('https') // we can use this way also

// const req = https.request('https://www.google.com', response => {
//     response.on('data', data => console.log(data))
//     response.on('end', () => console.log('No more data'))
// })

// req.end()

// get('https://www.google.com', response => {
//     response.on('data', data => console.log(data))
//     response.on('end', () => console.log('No more data'))
// })

// // we can export a module in these ways
// module.exports = {
//     data1: data1,
//     data2: data2
// }
// //  or
// exports.name = function(){}
// // we can also use ES6 modules also which is just import and export

// to use ES6 modules without using package.json we have to use .mjs file extension and import the file path with .mjs extension.
// node modules only load at once. it cashes the module at the time of first loading. the cache is global and it lives in require.cache object
// index.js in modules: https://nodejs.org/api/modules.html#modules_all_together

// // HTTP request using axios
// const axios = require("axios");

// // method 1 - promise chain
// // axios.get("https://jsonplaceholder.typicode.com/users")
// //     .then((response) => {
// //         console.log(response);
// //     })
// //     .catch((error) => {
// //         console.log(error);
// //     })
// //     .then(() => console.log('DONEEEEEEEEEEEEEEEE'));

// // method 2 - async await
// async function getUsers() {
//     try {
//         const response = await axios.get("https://jsonplaceholder.typicode.com/users");
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getUsers();

/*
SEMANTIC??VERSIONING: https://semver.org/
Given a version number MAJOR.MINOR.PATCH, increment the:
MAJOR version when you make incompatible API changes,
MINOR version when you add functionality in a backwards compatible manner, and
PATCH version when you make backwards compatible bug fixes.

https://semver.npmjs.com/
> for 0.4.6 here minor version will count as major version as the major is 0

### version searching way:
1.x
^1.4.8
~1.1.4
*/

/*
PACKAGE VERSIONING:
package-lock.json: we should share the package-lock.json file with our source code. 
otherwise, there may occur conflict for packages' exact version. this can lead us bugs on other machines.

VULNERABLE DEPENDENCIES:
Npm audit: if there is a vulnerability in any of our packages we can find them by running npm audit command. 
vulnerable will only show if the issues were reported.

npm audit fix command will update our vulnerable package to the latest patch update. 
it will only update if there is any update available on npm registry.
*/

/*
LOCAL OR GLOBAL PACKAGE INSTALLATION:
we can install any dependencies globally using npm install -g <dependency name> . It will then not install on our local project folder. 
We can uninstall it also using npm uninstall -g <dependency name> command.
But this way the global dependency will not be added to the package.json file. So this is not a suggested method. 
we should make package.json self-contained about all the dependencies our project is being used.
*/