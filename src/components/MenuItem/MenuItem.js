import React from 'react';
import AlgoContext from '../../contexts/context';
import './MenuItem.css';

function MenuItem({ data }) {

    const settings = React.useContext(AlgoContext);
    const handleOnChange = (e) => {
        settings[data.name] = e.currentTarget.value;
    };

    return (
        <div className='menu-items-container' >
            <h3 className='menu-items-title'>{data.name}:</h3>
            <div className='menu-items'>
                {data && data.items.map((it, k) => {
                    return (
                        <label className='menu-item' key={k} >
                            <input type='radio' className='menu-item-radio' value={it} onClick={handleOnChange} />
                            {it}
                        </label>
                    )
                })}
            </div>
        </div>
    );
}

export default MenuItem;