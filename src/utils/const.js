export const defaultSleepMs = 500;
export const minValue = 2;
export const maxValue = 18;
export const xfactor = 10;
export const stairsCount = 3;

export const ValueState = {
    Normal: 'Normal',
    Active: 'Active',
    Fixed: 'Fixed'
};

export const Speed = {
    Slow: 2,
    Normal: 1,
    Fast: 0.5
};

export const speedMenu = {
    name: 'Speed:',
    items: [
        { value: Speed.Slow, active: false },
        { value: Speed.Normal, active: true },
        { value: Speed.Fast, active: false }
    ],
};

export const Size = {
    Small: 6,
    Normal: 10,
    Big: 14
};

export const sizeMenu = {
    name: 'Size:',
    items: [
        { value: Size.Small, active: false },
        { value: Size.Normal, active: true },
        { value: Size.Big, active: false }
    ],
};

export const Type = {
    Random: 'random',
    Reverse: 'reverse',
    Stairs: 'stairs'
};

export const typeMenu = {
    name: 'Type:',
    items: [
        { value: Type.Random, active: true },
        { value: Type.Stairs, active: false },
        { value: Type.Reverse, active: false }
    ],
};
