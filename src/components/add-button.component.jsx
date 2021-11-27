import React, {useContext} from 'react';
import {CountriesContext} from '../pages/countries/countries.provider';

const AddButton = () => {

    const {countries, setCountries} = useContext(CountriesContext)

    const handleOnClick = () => {
        setCountries([...countries, {id:3, population:20}])
    };

    return (
        <button onClick={handleOnClick}>
            {`Add Countries`}
        </button>
    );
}

export default AddButton;