import loadingsteam from "../../assets/loadingsteam.mp4";
import "./style.css";

export const Page1 = () => {
  return (
    <div className="page-one-container">
      <video autoPlay loop muted className="page-one-video">
        <source src={loadingsteam} type="video/mp4" />
      </video>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
    </div>
  );
};
