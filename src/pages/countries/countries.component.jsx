import React, {useState} from 'react';
import PageTitle from '../../components/PageTitle.component';
import CountriesList from './countries-list.component';
import AddButton from '../../components/AddButton.component';
import TotalBubble from '../../components/TotalBubble.component';
import SumBubble from '../../components/SumBubble.component';

const Countries = () => {

    const [countries, setCountries] = useState([{id: 1, population: 10}, {id: 2, population: 20}]);

    const handleOnClick = () => {
        setCountries([...countries, {id: 3, population: 50}]);
    };

    return (
        <div>
            <PageTitle title="Countries" />
            <TotalBubble list={countries} />
            <SumBubble list={countries} />
            <CountriesList list={countries} />
            <AddButton lable={'Country'} onClick={handleOnClick} />
        </div>
    );
}

export default Countries;