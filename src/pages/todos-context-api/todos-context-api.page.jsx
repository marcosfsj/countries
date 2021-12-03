import React from 'react';
import PageTitle from '../../components/page-title.component';
import TodosContextApiList from './todos-context-api-list.component';
import TodosContextApiProvider from './todos-context-api.provider';

const TodosContextApi = () => {
    return (
        <TodosContextApiProvider>
            <div>
                <PageTitle title="Todos" />
                <TodosContextApiList />
            </div>
        </TodosContextApiProvider>
    );
}

export default TodosContextApi;