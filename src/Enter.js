import { Link } from "react-router-dom";
import rogofin from './rogofin.png';
import './Enter.css';
import { addDoc,collection,serverTimestamp } from "firebase/firestore";
import React from "react";
import{ useState } from "react";
import db from "./firebase"
const Enter = () => {

    const [textWord, setTextWord] = useState("");
    const [selectedCollection,setSelectedCollection] =useState("word1");


    const sendData =(e)=>{
        e.preventDefault();
    addDoc(collection(db, selectedCollection), {
      verified: true,
      text: textWord,
      timestamp: serverTimestamp(),
    })
    setTextWord("");
}
console.log(setTextWord);
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
    <div class="form">
        <form  method="post">
        <div class="center">
        <p>2.単語帳を選択してください</p>
            
                <select 
                value={selectedCollection}
                onChange={(e)=>setSelectedCollection(e.target.value)}
                name="sources" id="sources" class="custom-select sources" placeholder="Source Type">
                    <option value="word1">単語帳1</option>
                    <option value="word2">単語帳2</option>
                    <option value="word3">単語帳3</option>
                    <option value="word4">単語帳4</option>
                    <option value="word5">単語帳5</option>
                    <option value="word6">単語帳6</option>
                </select>
        </div>
            <p>1.英単語を入力してください</p>
            <input 
            value={textWord}
            onChange={(e)=>setTextWord(e.target.value)}
            type="text" name="vocabulary" placeholder="単語を入力してください"></input>
            
            <div class="btn-area">
                <button onClick={sendData} type="submit">送信する</button>
                
            </div>
        </form>
    </div>
      </>
    );
 };
  
  export default Enter;