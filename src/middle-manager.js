export default class MiddleManager {

    createWorker(job) {
        this.process = `
            self.onmessage = function (message) {
                var job = ${job.toString()};

                var output = job();

                self.postMessage(message.data);
            }
        `
    
        const func = `( () => {
                ${this.process.toString()}
        })();`
    
    
        const blob = new Blob([func], { type: 'application/javascript' });
    
        const worker = new Worker(window.URL.createObjectURL(blob));
    
        worker.onmessage = function(event) {
            if(!!event) {
                const message = event.data
                const subscribers = this.channels.get(message.channelName).subscribers
                if(subscribers) {
                    subscribers.map(function(subscriber) {
                        subscriber.update(message);
                    });
                }
            }
        }.bind(this);
    
        return worker;
    }
    
}