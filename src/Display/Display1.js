import { Link } from "react-router-dom";
import rogofin from '../rogofin.png';
import "./Displays.css"
import { useState,useEffect } from "react";
import { query, orderBy, onSnapshot ,collection} from 'firebase/firestore';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import db from "../firebase";
const Display = () => {

  const [register,setRegister]=useState([]);
    const [isInverted, setIsInverted] = useState(false);

  const handleImageClick = () => {
    console.log("タップされました")
    setIsInverted(!isInverted);
  };

  useEffect(() => {
    const fetchData = async () => {
      const wordData = collection(db, 'word1');
      const q = query(wordData, orderBy('timestamp', 'desc'));

      onSnapshot(q, (querySnapshot) => {
        setRegister(querySnapshot.docs.map((doc) => doc.data()));
      });
    };

    fetchData();
  }, []);



  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };

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
 <div className="Slider">
  <Slider {...settings}>
  {register.map((word)=>(
    <div key={word.text}>
        <p>{word.text}</p>
        <img src={word.image} alt="画像が読み込めません"/>
    </div>
  ))}
  </Slider> 
  </div>

    </>
  );
};
  
  export default Display;