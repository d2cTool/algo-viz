import { ValueState, Speed } from './const';
import { sleep } from './common';

export const bubbleSort = async (array, setFunc, speed = Speed.Normal) => {
    let swapped = false;
    for (let i = 0; i < array.length; i++) {
        swapped = false;
        for (let j = 0; j < array.length - i - 1; j++) {
            array.reset();
            array.elements[j].set(ValueState.Active);
            array.elements[(j + 1)].set(ValueState.Active);

            if (array.elements[j + 1] < array.elements[j]) {
                array.swap(j, j + 1);
                swapped = true;
            }

            setFunc(JSON.parse(JSON.stringify(array)));
            await sleep(speed);
        }

        if (!swapped)
            break;
    }

    array.reset();
    setFunc(JSON.parse(JSON.stringify(array)));
}
