import React, {useContext} from 'react';
import {CountriesContext} from '../providers/Countries.provider';

const TotalBubble = () => {

    const {countries} = useContext(CountriesContext);

    return (
        <span>
            {`Total: ${countries.length}`}
        </span>
    );
}

export default TotalBubble;