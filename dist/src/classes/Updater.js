import Time from '../util/Time';
import { contains, findIndex } from '../util/id';
export default class Updater {
    constructor() {
        this.updates = [];
        this.animationFrameId = 0;
        this.isSuspended = false;
        this.isRunning = false;
    }
    start() {
        if (!this.isRunning && !this.checkSuspend()) {
            this.isRunning = true;
            this.update();
            return true;
        }
        return false;
    }
    stop() {
        cancelAnimationFrame(this.animationFrameId);
        this.isRunning = false;
        this.isSuspended = false;
    }
    add(update) {
        if (contains(this.updates, update)) {
            this.updates.push(update);
            this.checkProceed();
            return true;
        }
        return false;
    }
    remove(update) {
        const index = findIndex(this.updates, update);
        if (index !== -1) {
            this.updates.splice(index, 1);
            this.checkSuspend();
            return true;
        }
        return false;
    }
    removeAll() {
        this.updates.length = 0;
        this.checkSuspend();
    }
    suspend() {
        this.stop();
        this.isSuspended = true;
    }
    checkSuspend() {
        if (this.updates.length === 0) {
            this.suspend();
            return true;
        }
        return false;
    }
    checkProceed() {
        if (this.isSuspended) {
            this.start();
            this.isSuspended = false;
        }
    }
    update() {
        this.animationFrameId = requestAnimationFrame(this.update.bind(this));
        const time = new Time();
        this.updates.forEach(update => update.update(time));
    }
}
//# sourceMappingURL=Updater.js.map