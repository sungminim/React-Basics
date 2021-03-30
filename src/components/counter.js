import React, { useState } from 'react';

function Counter() {
    const btnStyle = {
        border: 'none',
        display: 'inline-block',
        width: '100px',
        height: '100px',
        background: '#ddd',
        fontSize: '18px'
    }

    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        setNumber( number + 1 )
    }

    const onDecrease = () => {
        setNumber( number - 1 )
    }

    return (
        <div>
            <h1>{number}</h1>
            <button style={btnStyle} onClick={onIncrease}>+1</button>
            <button style={btnStyle} onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter