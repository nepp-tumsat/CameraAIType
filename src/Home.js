import { Link } from "react-router-dom";
import './Home.css';
import rogofin from './rogofin.png';

function App() {
  return (
    <div className="App">
    <header>
      <h1 class="headline">
        <a href="">
          <img src = {rogofin} width="192" alt="Camera AI Type"/>
        </a>
      </h1>
    </header>
    <div className="plus"><Link to="/Enter/" className="btn1">+</Link></div>
    <div className="test"><Link to="/Display/" className="btn">単語帳1</Link></div>
    <div className="test"><Link to="/Display/" className="btn">単語帳2</Link></div>
    <div className="test"><Link to="/Display/" className="btn">単語帳3</Link></div>
    <div className="test"><Link to="/Display/" className="btn">単語帳4</Link></div>
    <div className="test"><Link to="/Display/" className="btn">単語帳5</Link></div>
    <div className="test"><Link to="/Display/" className="btn">単語帳6</Link></div>
    </div>
  );
}

export default App;
