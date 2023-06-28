import { Link } from "react-router-dom";

const Display = () => {
    return (
      <>
        <h1>Display</h1>
        <div>
          ログインは<Link to={`/login/`}>こちら</Link>
        </div>
        <div>
          <Link to={`/`}>ホームに戻る</Link>
        </div>
      </>
    );
  };
  
  export default Display;