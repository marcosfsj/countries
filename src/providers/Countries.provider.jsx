import React, { createContext, useState } from "react";

export const CountriesContext = createContext();

const CountriesProvider = ({children}) => {
    const [countries, setCountries] = useState([{id: 1, population: 10}, {id: 2, population: 20}]);

    return (
        <CountriesContext.Provider value={{countries, setCountries}}>
            {children}
        </CountriesContext.Provider>
    );
}

export default CountriesProvider;