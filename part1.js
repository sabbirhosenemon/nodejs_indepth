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
Timer (setTimeout, SetTimeinterval) > I/O Callbacks > setImmediate > Close Callbacks. 

After finishing one loop it runs again and checks the queues serially.

Resources:
1. https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/
*/