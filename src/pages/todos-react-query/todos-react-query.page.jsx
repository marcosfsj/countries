import React, { useContext, useEffect } from "react";
import { useQuery } from "react-query";
import { CACHE_NAME, getAllTodos } from "../../api/todos/todos.api";
import PageTitle from "../../components/page-title.component";
import { SpinnerContext } from "../../providers/spinner.provider";
import styled from "styled-components";

const MainPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TodosReactQuery = () => {
  const { isLoading, error, data } = useQuery(CACHE_NAME, getAllTodos);
  const { setIsLoading } = useContext(SpinnerContext);

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
    <MainPanel>
      <PageTitle title={`React Query Todos - count ${count}`} />
      <div>
        <ul>
          {todos.map(({ _id, description, completed }) => (
            <li key={_id}>
              <h3>
                {_id} - {description} - {completed ? "Done" : "To be done"}
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </MainPanel>
  );
};

export default TodosReactQuery;
