class o{workerPool=[];constructor(o){for(var e=0;e<o;e++)this.workerPool.push(this.createWorker)}map(o,e,r){}createWorker(o){const e=`( () => {\n                ${`\n            self.onmessage = function (message) {\n                var job = ${o.toString()};\n\n                var output = job();\n\n                self.postMessage(message.data);\n            }\n        `.toString()}\n        })();`;console.log(e);const r={worker:worker,next:r};return r}}(new o).createWorker((function(){console.log("hi")}));const e={MiddleManager:o};export{e as MIDDLE_MANAGER};
