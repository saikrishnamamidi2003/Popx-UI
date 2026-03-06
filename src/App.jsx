import{BrowserRouter, Routes, Route} from "react-router-dom";
import Welcome from "./pages/Welcome";
import CreateAccount from "./pages/CreateAccount";
import AccountSeting from "./pages/AccountSettings"

function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Welcome/>} />
      <Route path = "/createAccount" element = {<CreateAccount/>} />
      <Route path = "/AccountSetting" element = {<AccountSeting/>} />

    </Routes>
    </BrowserRouter>
  );
}

export default App
