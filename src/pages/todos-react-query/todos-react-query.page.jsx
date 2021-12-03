import React from 'react';
import PageTitle from '../../components/page-title.component';
import TodosReactQueryList from './todos-react-query-list.component';

const TodosReactQuery = () => {
    return (
        <div>
            <PageTitle title="Todos" />
            <TodosReactQueryList />
        </div>
    );
}

export default TodosReactQuery;