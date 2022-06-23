import React from 'react';
import './CardsContainer.css';
import Card from '../Card/Card';
import { bubbleSort } from '../../utils/sortingAlgorithms';
import AlgoContext from '../../contexts/context';
import { generateData } from '../../utils/common'

function CardsContainer() {

    const settings = React.useContext(AlgoContext);

    React.useEffect(() => {
        settings.Items = generateData(settings.Size, settings.Type)
    }, [settings, settings.Size, settings.Type]);

    return (
        <div className="cardsContainer">
            <Card data={{ sortAlgo: bubbleSort }} />
        </div>
    );
}

export default CardsContainer;