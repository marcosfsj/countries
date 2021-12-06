import React, { useRef } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { CACHE_NAME, getAllTodos, createTodo } from "../../api/todos/todos.api";
import PageTitle from "../../components/page-title.component";
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
  display: grid;
  grid-template-columns: repeat(1, 2fr 1fr);
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 40px;
  border: 1px solid black;
`;

const InputArea = styled.div`
  justify-items: center;
  padding-left: 8px;
`;

const Input = styled.input`
  width: 100%;
`;

const ButtonArea = styled.div`
  display: grid;
  justify-items: center;
  padding-left: 7px;
`;

const Button = styled.button`
  width: 100px;
`;

const TodosReactQuery = () => {
  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery(CACHE_NAME, getAllTodos);
  const addNewTudo = useMutation(createTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(CACHE_NAME);
    },
  });

  const textInput = useRef("");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const { count, data: todos } = data;

  const handleAddClick = () => {
    addNewTudo.mutate(textInput.current.value);
    textInput.current.value = "";
  };

  return (
    <MainPanel>
      <PageTitle title={`React Query Todos - count ${count}`} />
      <Table>
        {todos.map(({ _id, description, completed }) => (
          <TodosReactQueryItem
            key={_id}
            id={_id}
            description={description}
            completed={completed}
          />
        ))}
      </Table>
      <AddNewTodoArea>
        <InputArea>
          <Input ref={textInput} />
        </InputArea>
        <ButtonArea>
          <Button disable={addNewTudo.isLoading} onClick={handleAddClick}>
            Add
          </Button>
        </ButtonArea>
      </AddNewTodoArea>
    </MainPanel>
  );
};

export default TodosReactQuery;
