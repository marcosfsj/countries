import React from 'react';
import PageTitle from '../../components/page-title.component';
import TodosContextApiList from './todos-context-api-list.component';
import AddButton from '../../components/add-button.component';
import TotalBubble from '../../components/total-bubble.component';
import SumBubble from '../../components/sum-bubble.component';
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