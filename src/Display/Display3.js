import { Link } from "react-router-dom";
import rogofin from '../rogofin.png';
import "./Display3.css"
import { useState,useEffect ,useRef} from "react";
import { query, orderBy, onSnapshot ,collection} from 'firebase/firestore';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import db from "../firebase";
const Display = () => {

  const [register,setRegister]=useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const sliderRef = useRef();

  const handleTextClick = () => {
    setIsClicked(!isClicked);
  };

  const handleBeforeChange = (oldIndex, newIndex) => {
    console.log(`Slider will change from slide ${oldIndex} to slide ${newIndex}`);
    setIsClicked(false);  // Reset the isClicked state to false
  };

  useEffect(() => {
    const fetchData = async () => {
      const wordData = collection(db, 'word3');
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

  const next =()=>{
    sliderRef.current.slickNext();
  }
  const previous =()=>{
    sliderRef.current.slickPrev();
  }

  return (
    <>
      <header>
      <h1 class="headline3">
          <Link to="/">
              <img src = {rogofin} width="192" alt="Camera AI Type"/>
          </Link>
      </h1>
  </header>
  <div class="btn3">
      <div className="batsu3"><Link to="/" className="batsu1">×</Link></div>
  </div>
 
  <Slider 
      ref={sliderRef}{...settings}
      beforeChange={handleBeforeChange}
    >
      {register.map((word) => (
        <div key={word.text} className="slider-content3">
          <img src={word.image} alt="画像が読み込めません"/>
          <p onClick={handleTextClick}></p>
          <div class="box-0203" onClick={handleTextClick}>
            {isClicked ? word.japanese : word.text}
          </div>
        </div>
      ))}
    </Slider>
    <div style={{ textAlign: "center" }}>
        <br></br>
        <br></br>
          <button className="hidarisankaku3" onClick={previous}></button>
          <button className="migisankaku3" onClick={next}></button>
    </div>
    </>
  );
};
  
  export default Display;