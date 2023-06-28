import { Link } from "react-router-dom";

const Enter = () => {
    return (
      <>
        <h1>Enter</h1>
        <div>
          ログインは<Link to={`/login/`}>こちら</Link>
        </div>
        <div>
          <Link to={`/`}>ホームに戻る</Link>
        </div>
      </>
    );
  };
  
  export default Enter;