import "./style.css";
import background from "../../assets/background.png";
import profiles from "../../assets/profiles.png";
import ellipse from "../../assets/ellipse.png";
import steamprofiles from "../../assets/steamprofile.png";
import lightprofiles from "../../assets/lightprofile.png";
import speakerprofiles from "../../assets/speakerprofile.png";
import wallpapers from "../../assets/wallpapers.png";
import rightArrow from "../../assets/rightarrow.png";
import leftArrow from "../../assets/leftarrow.png";
import { useState } from "react";

export const Page2 = () => {
  const [currentId, setCurrentId] = useState(1);
  const [text, setText] = useState("Profile");
  const [selectedImage, setSelectedImage] = useState(profiles);

  const arr = [
    {
      id: 1,
      image: profiles,
      name: "Profile"
    },
    {
      id: 2,
      image: wallpapers,
      name: "Wallpaper"
    },
    {
      id: 3,
      image: steamprofiles,
      name: "Steam"
    },
    {
      id: 4,
      image: speakerprofiles,
      name: "Speaker"
    },
    {
      id: 5,
      image: lightprofiles,
      name: "Light"
    }
  ];

  const handleSelect = (symbol) => {
    let elem;
    if (symbol === "+") {
      if (currentId === 5) return;
      elem = arr.find((e) => e.id === currentId + 1);
    } else {
      if (currentId === 1) return;
      elem = arr.find((e) => e.id === currentId - 1);
    }
    setText(elem.name);
    setSelectedImage(elem.image);
    setCurrentId(elem.id);
  };

  return (
    <div className="page-two-container">
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          width: "100%",
          height: "100%"
        }}
      >
        <div className="content">
          <div className="top-half"></div>
          <div className="bottom-half">
            <div className="close-popup-container">
              <div className="empty-space"></div>
              <div className="x-icon">X</div>
            </div>
            <div className="text-container">
              <h2 className="title">Digital Interface</h2>
              <p className="description">
                Description. A digital interface is the technology that allows
                interconnectivity between multiple pieces of equipment. In other
                words hardware devices can communicate with each other and
                accept audio and video material in a variety of forms.
              </p>
              <div className="slider-container">
                <div
                  className="less-than-simbol"
                  onClick={() => handleSelect("-")}
                >
                  <img src={leftArrow} alt="" width="50%" height="20px" />
                </div>
                <div className="slider">
                  {arr.map((elem, index) => {
                    return (
                      <>
                        <div className="slide" key={index}>
                          <img
                            src={
                              selectedImage == elem.image ? elem.image : ellipse
                            }
                            className={
                              selectedImage == elem.image ? "" : "ellipses"
                            }
                            alt=""
                            width={
                              selectedImage == elem.image ? "40px" : "20px"
                            }
                          />

                          {text == elem.name && (
                            <p className="section-name">{elem.name}</p>
                          )}
                        </div>
                        {index !== arr.length - 1 && (
                          <div className="connector"></div>
                        )}
                      </>
                    );
                  })}
                </div>
                <div
                  className="greater-than-simbol"
                  onClick={() => handleSelect("+")}
                >
                  <img src={rightArrow} alt="" width="50%" height="20px" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
