import React, {useContext} from 'react';
import {CountriesContext} from '../providers/Countries.provider';

const AddButton = ({lable}) => {

    const {countries, setCountries} = useContext(CountriesContext)

    const handleOnClick = () => {
        setCountries([...countries, {id:3, population:20}])
    };

    return (
        <button onClick={handleOnClick}>
            {`Add ${lable}`}
        </button>
    );
}

export default AddButton;