import React from 'react';
import PageTitle from '../../components/PageTitle.component';
import CountriesList from './countries-list.component';

const Countries = () => {
    return (
        <div>
            <PageTitle title="Countries" />
            <CountriesList />
        </div>
    );
}

export default Countries;