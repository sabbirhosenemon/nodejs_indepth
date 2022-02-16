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

// Node event emitter
const EventEmitter = require('events'); // using commonJS module system
// import EventEmitter from 'events'; // using ES6 module system
const celebrity = new EventEmitter();

// subscribe to the celebrity for the race event true for win
celebrity.on('race', (data) => {
    if(data === 'win'){
        console.log('Party time! we winnn');
    }
});

// subscribe to the celebrity for the race event true for lost
celebrity.on('race', (data) => {
    if(data === 'lost'){
        console.log('Sadddd! we are lost :(');
    }
});

// subscribe to the celebrity for the party event true for fun
celebrity.on('party', (data) => {
    if(data === 'fun'){
        console.log('Its party time. lets fun...');
    }
});

// exit event after running the program with code
process.on('exit', (code) => console.log('Exit with code: ', code))

// when the event is emitted, the dedicated event listener will be called.
celebrity.emit('race', 'win');
celebrity.emit('race', 'win');
celebrity.emit('race', 'lost');
celebrity.emit('party', 'fun');
