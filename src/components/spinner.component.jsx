import React from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";

const MainPanel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  zindex: 9999;
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(
    to right,
    rgba(171, 178, 185, 0),
    rgba(171, 178, 185, 1)
  );
`;

const Spinner = ({ isLoading }) => {
  if (!isLoading) {
    return null;
  }

  return (
    <MainPanel>
      <Loader
        type="Puff"
        color="#D35400"
        height={100}
        width={100}
        timeout={3000}
      />
    </MainPanel>
  );
};

export default Spinner;
