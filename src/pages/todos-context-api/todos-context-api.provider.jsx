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
        {"completed": false, "id": "7", "description": "reading book g", "createdAt": "2021-11-24T14:39:15.966Z", "updatedAt": "2021-11-24T14:39:15.966Z"},
        {"completed": false, "id": "8", "description": "reading book h", "createdAt": "2021-11-24T14:39:15.966Z", "updatedAt": "2021-11-24T14:39:15.966Z"},
        {"completed": false, "id": "9", "description": "reading book i", "createdAt": "2021-11-24T14:39:15.966Z", "updatedAt": "2021-11-24T14:39:15.966Z"},
        {"completed": false, "id": "10", "description": "reading book j", "createdAt": "2021-11-24T14:39:15.966Z", "updatedAt": "2021-11-24T14:39:15.966Z"},
        {"completed": false, "id": "11", "description": "reading book l", "createdAt": "2021-11-24T14:39:15.966Z", "updatedAt": "2021-11-24T14:39:15.966Z"},
        {"completed": false, "id": "12", "description": "reading book m", "createdAt": "2021-11-24T14:39:15.966Z", "updatedAt": "2021-11-24T14:39:15.966Z"},
        {"completed": false, "id": "13", "description": "reading book n", "createdAt": "2021-11-24T14:39:15.966Z", "updatedAt": "2021-11-24T14:39:15.966Z"},
        {"completed": false, "id": "14", "description": "reading book o", "createdAt": "2021-11-24T14:39:15.966Z", "updatedAt": "2021-11-24T14:39:15.966Z"},
        {"completed": false, "id": "15", "description": "reading book p", "createdAt": "2021-11-24T14:39:15.966Z", "updatedAt": "2021-11-24T14:39:15.966Z"},
        {"completed": false, "id": "16", "description": "reading book q", "createdAt": "2021-11-24T14:39:15.966Z", "updatedAt": "2021-11-24T14:39:15.966Z"},
        {"completed": false, "id": "17", "description": "reading book r", "createdAt": "2021-11-24T14:39:15.966Z", "updatedAt": "2021-11-24T14:39:15.966Z"},
        {"completed": false, "id": "18", "description": "reading book s", "createdAt": "2021-11-24T14:39:15.966Z", "updatedAt": "2021-11-24T14:39:15.966Z"},
        {"completed": false, "id": "19", "description": "reading book t", "createdAt": "2021-11-24T14:39:15.966Z", "updatedAt": "2021-11-24T14:39:15.966Z"},
        {"completed": false, "id": "20", "description": "reading book u", "createdAt": "2021-11-24T14:39:15.966Z", "updatedAt": "2021-11-24T14:39:15.966Z"},
    ];

    const [todos, setTodos] = useState(todosData);

    return (
        <TodosContextApiContext.Provider value={{todos, setTodos}}>
            {children}
        </TodosContextApiContext.Provider>
    );
}

export default TodosContextApiProvider;