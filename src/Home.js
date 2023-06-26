import logo from './logo.svg';
import './App.css';
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
    <div class="plus"><a href="#" class="btn1">+</a></div>
    <div class="test"><a href="#" class="btn">単語帳1</a></div>
    <div class="test"><a href="#" class="btn">単語帳2</a></div>
    <div class="test"><a href="#" class="btn">単語帳3</a></div>
    <div class="test"><a href="#" class="btn">単語帳4</a></div>
    <div class="test"><a href="#" class="btn">単語帳5</a></div>
    <div class="test"><a href="#" class="btn">単語帳6</a></div>
    </div>
  );
}

export default App;
