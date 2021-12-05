import React, { useContext, useEffect } from "react";
import { useQuery } from "react-query";
import { CACHE_NAME, getAllTodos } from "../../api/todos/todos.api";
import PageTitle from "../../components/page-title.component";
import { SpinnerContext } from "../../providers/spinner.provider";
import styled from "styled-components";

const Line = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 30px 2fr 1fr);
  align-items: center;
  width: 80vw;
  height: 40px;
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

const DeleteButton = styled.button``;

const TodosReactQueryItem = ({ description, completed }) => {
  return (
    <Line>
      <CheckBoxArea>
        <input type="checkbox" value="true" checked={completed} />
      </CheckBoxArea>
      <DescriptionArea>
        <Description>{description}</Description>
      </DescriptionArea>
      <DeleteButtonArea>
        <DeleteButton>Delete</DeleteButton>
      </DeleteButtonArea>
    </Line>
  );
};

export default TodosReactQueryItem;
