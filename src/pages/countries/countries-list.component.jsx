import React, {useContext, useEffect} from "react";
import {CountriesContext} from './countries.provider';

const CountriesList = () => {

    const {countries, setCountries} = useContext(CountriesContext); 

    useEffect(() => {
        setCountries([{id: 1, population: 10}, {id: 2, population: 20}]);
    }, [setCountries]);
    
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