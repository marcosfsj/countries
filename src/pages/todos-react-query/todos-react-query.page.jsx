import React, { useContext, useEffect } from "react";
import { useQuery } from "react-query";
import { CACHE_NAME, getAllTodos } from "../../api/todos/todos.api";
import PageTitle from "../../components/page-title.component";
import { SpinnerContext } from "../../providers/spinner.provider";
import styled from "styled-components";
import TodosReactQueryItem from "./todos-react-query.item";

const MainPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

const Table = styled.div``;

const AddNewTodoArea = styled.div`
  display: flex;
  height: 60px;
  justify-content: center;
  align-items: center;
  width: 80vw;
`;

const Input = styled.input`
  width: 100%;
`;

const Button = styled.button``;

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
      <Table>
        {todos.map(({ _id, description, completed }) => (
          <TodosReactQueryItem
            key="_id"
            description={description}
            completed={completed}
          />
        ))}
      </Table>
      <AddNewTodoArea>
        <Input />
        <Button>Add</Button>
      </AddNewTodoArea>
    </MainPanel>
  );
};

export default TodosReactQuery;
