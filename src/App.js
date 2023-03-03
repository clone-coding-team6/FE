import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import store from "./redux/config/configStore";
import { Provider } from "react-redux";
import Main from "./pages/Main.js";
import MyProfile from "pages/MyProfile";
import Login from "pages/Login";
import SignUp from "pages/SignUp";

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={new QueryClient()}>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path={"/MyProfile"} element={ <MyProfile />} />
              <Route path="/SignUp" element={<SignUp />} />
              <Route path="/Login" element={<Login />} />
            </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
