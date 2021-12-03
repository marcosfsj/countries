import React, { createContext, useState } from "react";

export const TodosContextApiContext = createContext();

const TodosContextApiProvider = ({children}) => {

    const todosData = [
        {"completed": false, "id": "1", "description": "reading book a", "createdAt": "2021-11-24T14:39:15.966Z", "updatedAt": "2021-11-24T14:39:15.966Z"},
        {"completed": false, "id": "2", "description": "reading book b", "createdAt": "2021-11-24T14:39:15.966Z", "updatedAt": "2021-11-24T14:39:15.966Z"},
        {"completed": false, "id": "3", "description": "reading book c", "createdAt": "2021-11-24T14:39:15.966Z", "updatedAt": "2021-11-24T14:39:15.966Z"},
        {"completed": false, "id": "4", "description": "reading book d", "createdAt": "2021-11-24T14:39:15.966Z", "updatedAt": "2021-11-24T14:39:15.966Z"},
        {"completed": false, "id": "5", "description": "reading book e", "createdAt": "2021-11-24T14:39:15.966Z", "updatedAt": "2021-11-24T14:39:15.966Z"},
        {"completed": false, "id": "6", "description": "reading book f", "createdAt": "2021-11-24T14:39:15.966Z", "updatedAt": "2021-11-24T14:39:15.966Z"},
    ];

    const [todos, setTodos] = useState(todosData);

    return (
        <TodosContextApiContext.Provider value={{todos, setTodos}}>
            {children}
        </TodosContextApiContext.Provider>
    );
}

export default TodosContextApiProvider;