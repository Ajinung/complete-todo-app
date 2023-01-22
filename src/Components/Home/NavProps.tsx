import React from "react";
import styled from "styled-components";

interface data {
  icon: any;
  text: string;
}

const NavProps: React.FC<data> = ({ icon, text }) => {
  return (
    <div>
      <Container>
        <Icon>{icon}</Icon>
        <Text>{text}</Text>
      </Container>
    </div>
  );
};

export default NavProps;

const Text = styled.div`
  margin-bottom: 5px;
`;
const Icon = styled.div`
  margin-right: 10px;
  margin-left: 35px;
`;
const Container = styled.div`
  width: 100%;
  height: 6.5vh;
  display: flex;
  align-items: center;
  transition: all 350ms;
  text-decoration: none;
  color: #fff;

  &:hover {
    background-color: #0a0a10;
    cursor: pointer;
  }
`;
