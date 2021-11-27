import React, {useContext} from 'react';
import {CountriesContext} from '../pages/countries/countries.provider';

const TotalBubble = () => {

    const {countries} = useContext(CountriesContext);

    return (
        <span>
            {`Total: ${countries.length}`}
        </span>
    );
}

export default TotalBubble;