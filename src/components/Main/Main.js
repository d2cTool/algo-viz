import React from 'react';
import './Main.css';
import { Speed, Size, Type } from '../../utils/const';
import { generateData } from '../../utils/common'
import CardsContainer from '../CardsContainer/CardsContainer'
import AlgoContext from '../../contexts/context';
import MenuItem from '../MenuItem/MenuItem';

function Main() {

    const [settings, setSettings] = React.useState({
        Speed: Speed.Normal,
        Size: Size.Normal,
        Type: Type.Random,
        Items: generateData(Size.Normal, Type.Random),
    });

    return (
        <AlgoContext.Provider value={settings}>
            <div>
                {/* <div>
                    <MenuItem data={{ name: 'Size', items: [Size.Small, Size.Normal, Size.Big] }} />
                    <MenuItem data={{ name: 'Speed', items: [Speed.Slow, Speed.Normal, Speed.Fast] }} />
                    <MenuItem data={{ name: 'Type', items: [Type.Stairs, Type.Random, Type.Reverse] }} />
                </div> */}
                <CardsContainer />
            </div>
        </AlgoContext.Provider>
    );
}

export default Main;