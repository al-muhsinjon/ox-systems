import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

import Login from "./components/Login";
import Home from "./Home";

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
