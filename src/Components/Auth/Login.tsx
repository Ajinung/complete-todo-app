import React from "react";
import styled from "styled-components";
import bg from "../Assets/background.svg";
import { NavLink } from "react-router-dom";

const Login = () => {
  document.title = "Sign in to your account";

  return (
    <Container>
      <Wrapper>
        <Logo>eTorDo</Logo>

        <AuthArea>
          <h2>Sign in</h2>
          <input type="text" placeholder="Email" />
          <span>
            No account? <Account to="/signup">Create one!</Account>
          </span>
        </AuthArea>
        <Buttons>
          <Button color="#fff" background="#03001c" to="/home">
            Sign in
          </Button>
        </Buttons>
      </Wrapper>
      <Footer>Developed by Isaac Etor. © 2022.</Footer>
    </Container>
  );
};

export default Login;

// const Container = styled.div``
// const Container = styled.div``
const Footer = styled.button`
  width: 100%;
  border: 0;
  background-color: transparent;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled(NavLink)<{ color: string; background: string }>`
  background-color: ${(props) => props.background};
  width: 120px;
  height: 40px;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: 0;
  color: ${(props) => props.color};
  transition: all 350ms;

  :hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;

const Account = styled(NavLink)`
  margin-left: 5px;
  text-decoration: none;
  color: #0c64c2;
`;

const Buttons = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const AuthArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  input {
    height: 40px;
    border: 0;
    outline: 0;
    border-bottom: 1px solid black;
    background-color: transparent;
    font-size: 16px;
    color: #000000b5;
    margin-bottom: 20px;
  }

  span {
    display: flex;
    font-size: 14px;
  }

  h2 {
    margin: 15px 0px;
    font-weight: 500;
    color: #000000f3;
  }
`;

const Logo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 600;
`;

const Wrapper = styled.div`
  max-width: 370px;
  width: calc(100% - 40px);
  padding: 44px;
  min-width: 320px;
  /* min-height: 330px; */
  background-color: #f8f9f8;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #03001c;
  color: #000000ca;

  /* background-color: #241d33; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;
