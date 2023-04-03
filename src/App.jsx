import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Home2 from "./components/Home2";

import Login from "./components/Login";
import Home from "./Home";

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Home2 />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
