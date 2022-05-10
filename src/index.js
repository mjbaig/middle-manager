import MiddleManager from "./middle-manager";

const test = new MiddleManager();

const y = function() {console.log("hi")};

test.createWorker(y);

export const MIDDLE_MANAGER = {
    MiddleManager
}