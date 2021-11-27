import React from 'react';
import PageTitle from '../../components/page-title.component';
import CountriesList from './countries-list.component';
import AddButton from '../../components/add-button.component';
import TotalBubble from '../../components/total-bubble.component';
import SumBubble from '../../components/sum-bubble.component';
import CountriesProvider from './countries.provider';

// TODO: study meno function from react

const Countries = () => {
    return (
        <CountriesProvider>
            <div>
                <PageTitle title="Countries" />
                <TotalBubble />
                <SumBubble />
                <CountriesList />
                <AddButton />
            </div>
        </CountriesProvider>
    );
}

export default Countries;