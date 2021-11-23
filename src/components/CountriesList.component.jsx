import React, {useContext} from "react";
import {CountriesContext} from '../providers/Countries.provider';

const CountriesList = () => {

    const {countries} = useContext(CountriesContext); 

    return (
        <div>
            <ul>
                {countries.map(country => 
                    <li>
                        <h3>{country.id} - {country.population}</h3>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default CountriesList;