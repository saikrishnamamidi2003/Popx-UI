import{BrowserRouter, Routes, Route} from "react-router-dom";
import Welcome from "./pages/Welcome";
import CreateAccount from "./pages/CreateAccount";
import AccountSetings from "./pages/AccountSettings"

function App(){
  return(
    <BrowserRouter>
   < div className = "mobile-frame">
    <Routes>
      <Route path = "/" element = {<Welcome/>} />
      <Route path = "/createAccount" element = {<CreateAccount/>} />
      <Route path = "/AccountSettings" element = {<AccountSetings/>} />

    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
