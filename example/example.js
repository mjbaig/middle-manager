class MiddleManager {

    /**
     * @type {Array<Worker>}
     */
    workerPool = [];

    constructor(workerPoolSize) {

        for(var i = 0; i < workerPoolSize; i++) {

            this.workerPool.push(this.createWorker);

        }

    }

    /**
     * 
     * @param {Array<Any>} list 
     * @param {() => * | (*) => *} mapFunction 
     * @param {*} extraData 
     */
    map(list, mapFunction, extraData) {



    }

    createWorker(job) {
        const process = `
            self.onmessage = function (message) {
                var job = ${job.toString()};

                var output = job();

                self.postMessage(message.data);
            }
        `;
    
        const func = `( () => {
                ${process.toString()}
        })();`;
    
        console.log(func);

        const workerNode = {
            worker: worker,
            next: workerNode
        };

        return workerNode;
    
        // const blob = new Blob([func], { type: 'application/javascript' });
    
        // const worker = new Worker(window.URL.createObjectURL(blob));
    
        // var promiseWorker = new PromiseWorker(worker);
    
        // return promiseWorker;
    }
    
}

const test = new MiddleManager();

const y = function() {console.log("hi");};

test.createWorker(y);

const MIDDLE_MANAGER = {
    MiddleManager
};

export { MIDDLE_MANAGER };
