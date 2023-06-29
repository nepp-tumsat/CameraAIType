import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Enter from "./Enter";
import Display from "./Display";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/Enter/`} element={<Enter />} />
        <Route path={`/Display/`} element={<Display />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

