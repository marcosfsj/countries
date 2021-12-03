import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { CACHE_NAME, getAllTodos } from "../../api/todos/todos.api";
import { SpinnerContext } from "../../providers/spinner.provider";
import TodosReactQueryAdd from "./todos-react-query-add.component";

const TodosReactQueryList = () => {
  const { isLoading, error, data } = useQuery(CACHE_NAME, getAllTodos);
  const { setIsLoading } = useContext(SpinnerContext);
  const [openAdd, toggleOpenAdd] = useState(false);

  const onToggleOpenAdd = () => {
    toggleOpenAdd(!openAdd);
  };

  useEffect(() => {
    setIsLoading(isLoading);
  }, [setIsLoading, isLoading]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const { count, data: todos } = data;

  return (
    <div>
      <div>Number of Todos: {count}</div>
      <ul>
        {todos.map(({ _id, description, completed }) => (
          <li key={_id}>
            <h3>
              {_id} - {description} - {completed ? "Done" : "To be done"}
            </h3>
          </li>
        ))}
      </ul>
      <button onClick={onToggleOpenAdd}>Add</button>
      <TodosReactQueryAdd open={openAdd} toggleOpen={onToggleOpenAdd} />
    </div>
  );
};

export default TodosReactQueryList;
