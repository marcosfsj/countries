import React, { useContext } from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";
import { SpinnerContext } from "../providers/spinner.provider";

const MainPanel = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  height: 100vh;
  width: 100vw;
  background-color: rgba(40, 55, 71, 0.7);
`;

const Spinner = () => {
  const { isLoading } = useContext(SpinnerContext);

  if (!isLoading) {
    return null;
  }

  return (
    <MainPanel>
      <Loader type="Puff" color="#D35400" height={100} width={100} />
    </MainPanel>
  );
};

export default React.memo(Spinner);
