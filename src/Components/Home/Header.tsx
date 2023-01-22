import React, { useState } from "react";
import styled from "styled-components";
import { IoIosMenu } from "react-icons/io";
import { FiSun } from "react-icons/fi";
import NavProps from "./NavProps";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [show, setShow] = useState<boolean>(true);
  const [nav, setNav] = useState<boolean>(true);

  const toggle = () => {
    setShow(!show);
  };
  return (
    <div>
      <Container>
        <Head>
          <Logo>
            <h2>eTorDo</h2>
          </Logo>
          <Input placeholder="search" />
          <User></User>
        </Head>
        {show ? (
          <Sidebar>
            <NavBar>
              <BurgerMenu left="" top="">
                <p>
                  <IoIosMenu onClick={toggle} />
                </p>
              </BurgerMenu>
              <Navs>
                <Link to="/tasks">
                  <NavProps icon=<FiSun /> text="My Day" />
                </Link>

                <Link to="/tasks/important">
                  <NavProps icon=<FiSun /> text="Important" />
                </Link>

                <Link to="/tasks/planned">
                  <NavProps icon=<FiSun /> text="Planned" />
                </Link>

                <Link to="/tasks/assigned_to_me">
                  <NavProps icon=<FiSun /> text="Assigned to me" />
                </Link>

                <Link to="/tasks/inbox">
                  <NavProps icon=<FiSun /> text="Tasks" />
                </Link>
              </Navs>
              <hr />
            </NavBar>
            <BtmNav></BtmNav>
          </Sidebar>
        ) : (
          <BurgerMenu left="30px" top="30px">
            <p>
              <IoIosMenu onClick={toggle} />
            </p>
          </BurgerMenu>
        )}
      </Container>
    </div>
  );
};

export default Header;

// const Container = styled.div`
// `
// const Container = styled.div`
// `
const User = styled.div`
  width: 200px;
  height: 60%;
  background-color: #171a27;
  margin-right: 30px;
`;
const Input = styled.input`
  width: 300px;
  height: 60%;
  background-color: #171a27;
  outline: 0;
  border: 1px solid #2563eb;
  border-radius: 5px;
  color: #ffffffd5;
  padding: 0 15px;
  transition: all ease-in 0.1s;
  font-size: 16px;

  :focus {
    border: 2px solid #2563eb;
  }
`;
const Logo = styled.div`
  margin-left: 30px;
  h2 {
    margin: 0;
  }
`;
const Navs = styled.div`
  width: 100%;
`;

const BurgerMenu = styled.div<{ left: string; top: string }>`
  width: 90%;
  height: 5vh;
  display: flex;
  align-items: center;
  font-size: 2rem;
  margin-left: ${({ left }) => left};
  margin-top: ${({ top }) => top};

  p {
    transition: all 0.2s ease-in;
    :hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
`;
const BtmNav = styled.div`
  width: 100%;
  height: 6vh;
  background-color: pink;
`;
const NavBar = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  hr {
    width: 90%;
    height: 0.5px;
    background-color: #1e2232;
    border: 0.5px solid #1e2232;
  }
`;
const Sidebar = styled.div`
  width: 300px;
  height: calc(100vh - 8vh);
  background-color: #10121b;
  /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
  border-right: 2px solid #1e2232;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Head = styled.div`
  width: 100%;
  height: 8vh;
  background-color: #0a0a10;
  /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
  border-bottom: 2px solid #1e2232;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  background-color: #0a0a10;
`;
