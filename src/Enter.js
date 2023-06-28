import { Link } from "react-router-dom";
import rogofin from './rogofin.png';

const Enter = () => {
    return (
      <>
        <h1>Enter</h1>
        <header>
        <h1 class="headline">
            <a href="hackathon2.html">
                {/* <img src="/image/rogofin.png" width="192" alt="Camera AI Type"> */}
                <img src = {rogofin} width="192" alt="Camera AI Type"/>
            </a>
        </h1>
    </header>
    <div class="btn">
        {/* <div class="batsu"><a href="hackathon2.html" class="batsu1">×</a></div> */}
        <div className="batsu"><Link to="/" className="batsu1">×</Link></div>
    </div>
    <div class="form">
        <p>1.英単語を入力してください</p>
        <p>2.単語帳を選択してください</p>
        <div class="center">
            <select name="sources" id="sources" class="custom-select sources" placeholder="Source Type">
                <option value="1">単語帳1</option>
                <option value="2">単語帳2</option>
                <option value="3">単語帳3</option>
                <option value="4">単語帳4</option>
                <option value="5">単語帳5</option>
                <option value="6">単語帳6</option>
            </select>
        </div>
    </div>
      </>
    );
 };
  
  export default Enter;