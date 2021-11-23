import React from 'react';
import PageTitle from '../../components/PageTitle.component';
import CountriesList from '../../components/CountriesList.component';
import AddButton from '../../components/AddButton.component';
import TotalBubble from '../../components/TotalBubble.component';
import SumBubble from '../../components/SumBubble.component';
import CountriesProvider from '../../providers/Countries.provider';

const Countries = () => {
    return (
        <CountriesProvider>
            <div>
                <PageTitle title="Countries" />
                <TotalBubble />
                <SumBubble />
                <CountriesList />
                <AddButton lable={'Country'} />
            </div>
        </CountriesProvider>
    );
}

export default Countries;