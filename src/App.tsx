import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "./Components/Context/MainContext";
import Header from "./Components/Home/Header";
import AllRoutes from "./Components/Routes/AllRoutes";

function App() {
  const { showDetails, toggleShow } = useContext(GlobalContext);

  return (
    <div>
      <Container>
        {showDetails ? <Header /> : null}
        <AllRoutes />
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
  /* display: flex;
  justify-content: flex-end; */
`;
