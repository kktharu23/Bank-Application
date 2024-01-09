import Navbars from "./navbar.js";
import Create from "./create.js";
import userContext from "./context.js";
import { HashRouter, Routes, Route } from "react-router-dom";
import Deposit from "./deposit.js";
import Withdraw from "./withdrawal";
import Alldata from "./alldata.js";
import Home from "./Home.js";
import "./style.css"

export default function App() {
  return (
    <>
      <HashRouter>
        <userContext.Provider
          value={{
            users: [
              {
                name: "Tharani",
                email: "tharani0661@gmail.com",
                password: "12345",
                balance: 0
              }
            ]
          }}
           >
            
          <Navbars />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/alldata" element={<Alldata />} />
          </Routes>
        </userContext.Provider>
       
      </HashRouter>
    </>
  );
}



