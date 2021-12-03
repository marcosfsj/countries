import React from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";

const MainPanel = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  height: 100vh;
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.5);
`;

const Spinner = ({ isLoading }) => {
  if (!isLoading) {
    return null;
  }

  return (
    <MainPanel>
      <Loader type="Puff" color="#D35400" height={100} width={100} />
    </MainPanel>
  );
};

export default Spinner;
