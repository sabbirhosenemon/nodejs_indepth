const {isMainThread, workerData, Worker} = require('worker_threads');

if (isMainThread) {
  console.log(`Main thread is running on process id: ${process.pid}`);
    new Worker(__filename, {
        workerData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    });
    new Worker(__filename, {
        workerData: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    });
} else {
    console.log(`Worker thread is running on process id: ${process.pid}`);
    console.log(`${workerData} sorted is ${workerData.sort()}`)
}

/*
Multi-threading is more efficient than Multi-processing.

In multi-threading all the threads run under the same process (pid). But all the threads run on different cpu core paralelly.
*/