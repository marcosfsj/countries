import React from "react";
import { useQueryClient, useMutation } from "react-query";
import {
  CACHE_NAME,
  deleteTodo,
  toggleTodoCompleted,
} from "../../api/todos/todos.api";
import styled from "styled-components";

const Line = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 30px 2fr 1fr);
  align-items: center;
  width: 80vw;
  height: 40px;
  border: 1px solid black;
`;

const CheckBoxArea = styled.div`
  display: grid;
  justify-items: center;
`;

const DescriptionArea = styled.div``;

const Description = styled.span``;

const DeleteButtonArea = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
`;

const DeleteButton = styled.button`
  width: 100px;
`;

const TodosReactQueryItem = ({ id, description, completed }) => {
  const queryClient = useQueryClient();

  const { mutate: remove } = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(CACHE_NAME);
    },
  });

  const { mutate: toggleCompleted } = useMutation(toggleTodoCompleted, {
    onSuccess: () => {
      queryClient.invalidateQueries(CACHE_NAME);
    },
  });

  const handleDeleteClick = () => {
    remove(id);
  };

  const handleToggleCompleted = () => {
    toggleCompleted({ id, description, completed });
  };

  return (
    <Line>
      <CheckBoxArea>
        <input
          type="checkbox"
          onClick={handleToggleCompleted}
          value="true"
          checked={completed}
        />
      </CheckBoxArea>
      <DescriptionArea>
        <Description>{description}</Description>
      </DescriptionArea>
      <DeleteButtonArea>
        <DeleteButton onClick={() => handleDeleteClick()}>Delete</DeleteButton>
      </DeleteButtonArea>
    </Line>
  );
};

export default TodosReactQueryItem;
