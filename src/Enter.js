import { Link } from "react-router-dom";
import rogofin from './rogofin.png';
import './Enter.css';

const Enter = () => {
    return (
      <>
        <header>
        <h1 class="headline">
            <Link to="/">
                <img src = {rogofin} width="192" alt="Camera AI Type"/>
            </Link>
        </h1>
    </header>
    <div class="no">
        <div className="batsu"><Link to="/" className="batsu1">×</Link></div>
    </div>
    <div class="form">
        <form action="confirm.php" method="post">
            <p>1.英単語を入力してください</p>
            <input type="text" name="vocabulary" placeholder="単語を入力してください"></input>
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
            <div class="btn-area">
                <button type="submit">送信する</button>
            </div>
        </form>
    </div>
      </>
    );
 };
  
  export default Enter;