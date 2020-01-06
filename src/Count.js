import React from 'react';

function Counter() {
    const onIncrease = () => {
        console.log('+1');
    }
    const onDecrease = () => {
        console.log('-1');
    }

    return (
        <div>
            <h1>0</h1>
            <button>+1</button>
            <button>-1</button>
        </div>
    );
}

export default Counter;
