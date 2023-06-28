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


// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./Home";
// import Enter from "./Enter";
// import Display from "./Display";
// import './App.css';
// // import './Home.css';
// // import logo from './logo.svg';
// // import rogofin from './rogofin.png';
// // import { Link } from "react-router-dom";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path={`/`} element={<Home />} />
//         {/* <Route path={`/register/`} element={<Register />} /> */}
//         {/* <Route path={`/login/`} element={<Login />} /> */}
//       </Routes>
//     </BrowserRouter>
//   );
// };

// // function App() {
// //   return (
// //     <div className="App">
// //     <header>
// //       <h1 class="headline">
// //         <a href="">
// //           <img src = {rogofin} width="192" alt="Camera AI Type"/>
// //         </a>
// //       </h1>
// //     </header>
// //     <div class="plus"><a href="#" class="btn1">+</a></div>
// //     {/* <div className="plus">
// //         <Link to="#" className="btn1">+</Link>
// //       </div> */}
// //     <div class="test"><a href="#" class="btn">単語帳1</a></div>
// //     <div class="test"><a href="#" class="btn">単語帳2</a></div>
// //     <div class="test"><a href="#" class="btn">単語帳3</a></div>
// //     <div class="test"><a href="#" class="btn">単語帳4</a></div>
// //     <div class="test"><a href="#" class="btn">単語帳5</a></div>
// //     <div class="test"><a href="#" class="btn">単語帳6</a></div>
// //     </div>
// //   );
// // }

// export default App;
