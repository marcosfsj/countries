import React from "react";
import styled from "styled-components";

const Title = styled.div`
  padding: 20px;
`;

const PageTitle = ({ title }) => {
  return <Title>{title}</Title>;
};

export default PageTitle;
