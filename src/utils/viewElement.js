import { ValueState } from './const';

export class ViewElement {
    constructor(val) {
        this.value = val;
        this.state = ValueState.Normal;
    }

    reset() {
        this.state = ValueState.Normal;
    }

    set(state) {
        this.state = state;
    }

    valueOf = function () {
        return this.value;
    };
}

export class ViewElements {
    constructor(array) {
        this.elements = array.map((v) => new ViewElement(v));
        this.length = array.length;
    }

    reset() {
        this.elements.map((e) => e.reset());
    }

    swap(pos1, pos2) {
        this.elements.swap(pos1, pos2);
    }
}

// eslint-disable-next-line no-extend-native
Array.prototype.swap = function (pos1, pos2) {
    [this[pos1], this[pos2]] = [this[pos2], this[pos1]];
}