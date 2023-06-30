import { Link } from "react-router-dom";
import rogofin from './rogofin.png';
import './Enter.css';
import { addDoc,collection,serverTimestamp } from "firebase/firestore";
import React from "react";
import{ useState, useEffect } from "react";
import db from "./firebase"

const Enter = () => {

    const [textWord, setTextWord] = useState("");
    const [selectedCollection,setSelectedCollection] =useState("word1");
    const [imageUrl,setImageUrl]=useState("")

    const sendData =async(e)=>{
           e.preventDefault();
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
                image :imageUrl
              })
              setTextWord("");
        }catch(error){
            console.log(error)
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
    <div class="btn">
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
            <div class="btn-area">
                <button onClick={sendData} type="submit">送信する</button>
            </div>
        </form>
    </div>
      </>
    );
 };
  
  export default Enter;