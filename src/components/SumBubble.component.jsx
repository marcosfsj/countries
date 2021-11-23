import React, {useContext} from 'react';
import {CountriesContext} from '../providers/Countries.provider';

const SumBubble = () => {

    const {countries} = useContext(CountriesContext);

    const sumValue = () => {
        const reducer = (previousValue, currentValue) => {return previousValue + currentValue.population};
        return countries.reduce(reducer, 0);
    }

    return (
        <span>
            {`Sum: ${sumValue()}`}
        </span>
    );
}

export default SumBubble;