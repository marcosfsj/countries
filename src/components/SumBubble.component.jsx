import React from 'react';

const SumBubble = ({list}) => {

    const sumValue = () => {
        const reducer = (previousValue, currentValue) => {return previousValue + currentValue.population};
        return list.reduce(reducer, 0);
    }

    return (
        <span>
            {`Sum: ${sumValue()}`}
        </span>
    );
}

export default SumBubble;