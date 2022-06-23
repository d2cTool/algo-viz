import { defaultSleepMs, minValue, maxValue, xfactor, stairsCount, Type } from './const';

const rndValue = () => {
    let randomVal = Math.floor((Math.random() * (maxValue - minValue + 1) + minValue)) * xfactor;
    return randomVal
}

const rndData = (size) => {
    let array = [];
    for (let i = 0; i < size; i++) {
        array.push(rndValue());
    }

    return array;
}

const revData = (size) => {
    let array = [];
    let step = Math.floor((maxValue - minValue) / size);
    for (let i = size; i > 0; i--) {
        array.push((i * step + minValue) * xfactor);
    }

    return array;
}

const stairsData = (size) => {
    let array = [];
    let step = Math.floor((maxValue - minValue) / stairsCount);
    let count = Math.ceil(size / stairsCount);
    let idx = stairsCount;

    for (let i = size; i > 0; i--) {
        if ((i % count) === 0 && i !== size)
            idx--;

        array.push(idx * step * xfactor);
    }

    return array;
}

export const sleep = (speed) => {
    return new Promise((resolve) => setTimeout(resolve, defaultSleepMs * speed))
}

export const generateData = (size, type) => {
    switch (type) {
        case Type.Random:
            return rndData(size);
        case Type.Reverse:
            return revData(size);
        case Type.Stairs:
            return stairsData(size);
        default:
            return rndData(size);
    }
}