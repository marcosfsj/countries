import React, {useContext} from "react";
import {TodosContextApiContext} from './todos-context-api.provider';

const TodosContextApiList = () => {

    const {todos} = useContext(TodosContextApiContext); 

    return (
        <div>
            <ul>
                {todos.map(todo => 
                    <li key={todo.id}>
                        <h3>{todo.id} - {todo.description}</h3>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default TodosContextApiList;