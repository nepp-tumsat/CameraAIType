import { Link } from "react-router-dom";
import rogofin from './rogofin.png';
import apple from './apple.jpg';
import './Enter.css';
import { addDoc,collection,serverTimestamp } from "firebase/firestore";
import React from "react";
import{ useState, useEffect } from "react";
import db from "./firebase"
import ReactLoading from 'react-loading';

const Enter = () => {

    const [isLoading,setIsLoading]=useState(false)
    const [textWord, setTextWord] = useState("");
    const [japaneseWord, setJapaneseWord] = useState("");
    const [selectedCollection,setSelectedCollection] =useState("word1");
    const [imageUrl,setImageUrl]=useState("")
    const [isDisabled,setIsDisabled]=useState(false)
    const sendData =async(e)=>{
           e.preventDefault();
           setIsDisabled(true)
           setIsLoading(true)
           
            if (!textWord) {
                console.log("からです")
                alert("英単語を入力してください");
                return;
            }

            if (!japaneseWord) {
                alert("日本語訳を入力してください");
                return;
            }

           try{
           const response = await fetch("https://api.openai.com/v1/images/generations", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: process.env.REACT_APP_OPENAI, // 実際の API キーに置き換えてください
            },
            body: JSON.stringify({
              prompt: textWord,
              size: "256x256",
            }),
          });
    
          const data = await response.json();
          const image = data.data[0].url;
          setImageUrl(image);
          console.log(image)
        } catch(error){
            console.log(error)
            alert("通信エラーです")
        }
    }

    useEffect(() => {
        if (imageUrl) {
            saveDataToFirebase();
        }
    }, [imageUrl]);
    
    const saveDataToFirebase = async ()=>{
        try{
            await addDoc(collection(db, selectedCollection), {
                verified: true,
                text: textWord,
                timestamp: serverTimestamp(),
                image :imageUrl,
                japanese: japaneseWord
              })
              setTextWord("");
              setJapaneseWord("");
              setIsLoading(false)
              setIsDisabled(false)
        }catch(error){
            console.log(error)
            setIsLoading(false)
            setIsDisabled(false)
        }
      }
    
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
        <form  method="post">
        <div class="center">
                
        </div>
            <p>1.英単語を入力してください</p>
            <input 
            value={textWord}
            onChange={(e)=>setTextWord(e.target.value)}
            
            type="text" name="vocabulary" placeholder="単語を入力してください"></input>
            
             
            
            <p>2.日本語訳を入力してください</p>
           
            
            
            <input 
            value={japaneseWord}
            onChange={(e)=>setJapaneseWord(e.target.value)}
            
            type="text" name="vocabulary" placeholder="日本語訳を入力してください"></input>

            <p>3.単語帳を選択してください</p>
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
        </form>
        
        <label className={`open ${isDisabled ? 'disabled' : ''}`} 
        onClick={(e) => {
            if (!isDisabled) {
                sendData(e);
            }
        }}
       
        ><span>送信する</span></label>
        
        {/* 一旦ポップアップは非表示 */}
        {/* <input type="checkbox" id="popup"></input>
        <div class="overlay">
            <div class="window">
                <label class="close" for="popup">×</label>
                <img src= {apple} alt="apple"/>
                <p class="text">"Apple"<br/>を追加しました!</p>
            </div>
        </div> */}
        {isLoading && (
    <div className="modal">
        <div className="modal-content">
            <ReactLoading type={"spin"} color={"#0099FF"} height={70} width={100} />
        </div>
    </div>
)}
    </div>
      </>
    );
 };

  export default Enter;