import { Link } from "react-router-dom";
import rogofin from './rogofin.png';
import apple from './apple.jpg';
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
      <div class="left">
        <div className="hidari"><Link to="/" className="hidari1">←</Link></div>
      </div>
      <div class="tango">
         <img src= {apple} width="500"/>
        <h1>apple</h1>
      </div>
      {/* <div class="nandb">
         <a href="#" class="triangle-left"></a>
         <a href="#" class="triangle-right"></a>
      </div>  */}
    </>
  );
};
  
  export default Display;