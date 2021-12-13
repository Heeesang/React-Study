import React, {useState} from 'react';

const Counter = () => {
    const [number, setNumber] = useState(0);
    const onClickin = () => setNumber(number + 1);
    const onClickde = () => setNumber(number - 1);
    return (
        <>
            <b>{number}</b>
            <button onClick ={onClickin}>+1</button>
            <button onClick={onClickde}>-1</button>
        </>
    );
}

export default Counter;