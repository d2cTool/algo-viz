import React from 'react';
import './Card.css';
import { ValueState } from '../../utils/const';
import { ViewElements } from '../../utils/viewElement';
import AlgoContext from '../../contexts/context';
import { generateData } from '../../utils/common'

function Card({ data }) {

    const settings = React.useContext(AlgoContext);
    const [array, setArray] = React.useState(new ViewElements(settings.Items));

    const handleSort = async () => {
        //setArray(new ViewElements(generateData(settings.Size, settings.Type)))
        await data.sortAlgo(array, setArray, settings.Speed);
    }

    return (
        <div className='card'>
            <section className='card-header'>
                <h2 className='card-title'>Bubble Sort</h2>
                <button className='card-menu-button' onClick={handleSort}></button>
            </section>
            <section className='card-bars-container'>
                {array.elements.map((e, k) => {
                    return (
                        <div
                            className={`card-bar  ${e.state === ValueState.Active && 'card-bar-active'} `}
                            key={k}
                            style={{ height: e.value }}>
                            {e.value}
                        </div>
                    )
                })}
            </section>
        </div>
    );
}

export default Card;