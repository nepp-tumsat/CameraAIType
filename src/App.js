import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Enter from "./Enter";

import Display1 from "./Display/Display1"
import Display2 from "./Display/Display2"
import Display3 from "./Display/Display3"
import Display4 from "./Display/Display4"
import Display5 from "./Display/Display5"
import Display6 from "./Display/Display6"
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Enter/" element={<Enter />} />
        <Route path="/Display1/" element={<Display1 />} />
        <Route path="/Display2/" element={<Display2 />} />
        <Route path="/Display3/" element={<Display3 />} />
        <Route path="/Display4/" element={<Display4 />} />
        <Route path="/Display5/" element={<Display5 />} />
        <Route path="/Display6/" element={<Display6 />} />
      </Routes>
    </Router>
  );
};

export default App;

