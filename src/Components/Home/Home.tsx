import React from "react";
import styled from "styled-components";
import Header from "./Header";

const Home = () => {
  document.title = "My Day - eTorDO";
  return (
    <Container>
      <Header />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  /* background-color: #f8f9f8; */
  /* background-color: #ecf3f9; */
  background-color: #0a0a10;
  color: #fff;
`;
