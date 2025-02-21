import { Route, Routes } from "react-router";
import Body from "./Body";
import {BrowserRouter} from "react-router"


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body/>}>
            <Route path="/login" element={<div>Login</div>}></Route>
            <Route path="/profile" element={<div>Profile</div>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
