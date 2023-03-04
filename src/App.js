import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main.js";
import MyProfile from "./pages/MyProfile";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/Main" element={<Main />} />
              <Route path="/MyProfile" element={ <MyProfile />} />
              <Route path="/SignUp" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    </QueryClientProvider>
     
    
  );
};

export default App;
