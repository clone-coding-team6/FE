import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main.js";
import MyProfile from "./pages/MyProfile";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/Main" element={<Main />} />
              <Route path="/MyProfile" element={ <MyProfile />} />
              <Route path="/SignUp" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
     
    
  );
};

export default App;
