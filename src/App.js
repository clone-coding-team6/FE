import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main.js";
import MyProfile from "./pages/MyProfile";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Mypage from "./pages/Mypage.jsx";
import styled from "styled-components";

const AppWrapper = styled.div`
  background-color: black;
`;

const App = () => {
  return (
    <AppWrapper>
      <BrowserRouter>
        {/* <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Main" element={<Main />} />
            <Route path="/MyProfile" element={ <MyProfile />} />
            <Route path="/SignUp" element={<SignUp />} />
          </Routes> */}

        <Mypage />
      </BrowserRouter>
    </AppWrapper>
  );
};

export default App;
