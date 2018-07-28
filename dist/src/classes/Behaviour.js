import uniqueID from '../util/uniqueID';
export default class Behaviour {
    constructor() {
        this.id = uniqueID();
    }
    update(time) {
        console.log(time);
    }
}
//# sourceMappingURL=Behaviour.js.map