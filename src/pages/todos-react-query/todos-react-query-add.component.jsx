import React, { useState } from "react";
import styled from "styled-components";
import PageTitle from "../../components/page-title.component";

const AddModal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 9999;
  opacity: 1;
  -webkit-transition: opacity 400ms ease-in;
  -moz-transition: opacity 400ms ease-in;
  transition: opacity 400ms ease-in;
  pointer-events: auto;
  &:target {
    opacity: 1;
    pointer-events: auto;
  }
`;

const MainPanel = styled.div`
  width: 80vw;
  height: 40vh;
  position: relative;
  margin: 10% auto;
  padding: 5px 20px 13px 20px;
  border-radius: 10px;
  background: #fff;
  background: -moz-linear-gradient(#fff, #999);
  background: -webkit-linear-gradient(#fff, #999);
  background: -o-linear-gradient(#fff, #999);
`;

const TodosReactQueryAdd = ({ open, toggleOpen }) => {
  const [description, setDescription] = useState("");

  if (!open) return null;
  return (
    <AddModal>
      <MainPanel>
        <PageTitle title="Add" />
        Description:{" "}
        <input
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <div>
          <button>Add</button>
          <button onClick={toggleOpen}>Close</button>
        </div>
      </MainPanel>
    </AddModal>
  );
};

export default TodosReactQueryAdd;
