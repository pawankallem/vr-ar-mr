import loadingsteam from "../../assets/loadingsteam.mp4";
import "./style.css";
import react, {useState, useEffect} from "react";

export const Page1 = () => {

  const [text, setText] = useState("INHALE");
  const [timer,setTimer] = useState(3);

  // const breathTimer = [
  //   // {
  //   //   title: "INHALE",
  //   //   subTitle: 3,
  //   // },
  //   {
  //     title: "HOLD",
  //     subTitle: 2,
  //   },
  //   {
  //     title: "EXHALE",
  //     subTitle: 3,
  //   },
  // ];

  useEffect(() => {
    setTimeout(() => {
      setText("HOLD");
      setTimer(2)
    },3000)
    setTimeout(() => {
      setText("EXHALE");
      setTimer(3)
      
    },5000)
    setTimeout(() => {},8000)
  },[])

  return (
    <div className="page-one-container">
      <video autoPlay loop muted className="page-one-video">
        <source src={loadingsteam} type="video/mp4" />
      </video>
      <div className="circle-container">
        <div className="circle">
          <div className="circle-text-container">
          <h2>{text}</h2>
          <h4>{timer} SECONDS</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
