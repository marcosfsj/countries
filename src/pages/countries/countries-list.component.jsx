import React from "react";

const CountriesList = ({list}) => {
    return (
        <div>
            <ul>
                {list.map(country => 
                    <li>
                        <h3>{country.id} - {country.population}</h3>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default CountriesList;