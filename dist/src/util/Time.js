export default class Time {
    constructor() {
        this.currentTime = 0;
        this.delta = 0;
        this.elapsed = 0;
        const timestamp = Time.now();
        if (Time.lastTime === null) {
            Time.lastTime = timestamp;
        }
        this.currentTime = timestamp;
        this.elapsed = this.currentTime - Time.lastTime;
        this.delta = this.elapsed / 1000;
        Time.lastTime = timestamp;
    }
    static now() {
        return performance.now();
    }
}
Time.lastTime = null;
//# sourceMappingURL=Time.js.map