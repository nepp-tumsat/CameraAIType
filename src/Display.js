import { Link } from "react-router-dom";
import rogofin from './rogofin.png';
import './Display.css';

const Display = () => {
  return (
    <>
      <header>
      <h1 class="headline">
          <Link to="/">
              <img src = {rogofin} width="192" alt="Camera AI Type"/>
          </Link>
      </h1>
  </header>
  <div class="btn">
      <div className="batsu"><Link to="/" className="batsu1">×</Link></div>
  </div>
  <div class="nandb">
        <a href="#" class="triangle-left"></a>
        <a href="#" class="triangle-right"></a>
  </div> 
    </>
  );
};
  
  export default Display;