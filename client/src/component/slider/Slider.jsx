import "./slider.scss";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { useState } from "react";
import { sliderItems } from "../../dummyData";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
      console.log("left clicked");
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div className="sliderContainer">
      <div className="sliderArrow left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlinedIcon sx={{ fontSize: 30 }} />
      </div>
      <div
        className="sliderWrapper"
        style={{ transform: `translateX( ${slideIndex * -100}vw)` }}
      >
        {sliderItems.map((sliderItem) => (
          <div
            key={sliderItem.id}
            style={{ backgroundColor: `#${sliderItem.bg}` }}
            className={`slide`}
          >
            <div className="imgContainer">
              <img
                className="sliderImage"
                style={{ height: "100%" }}
                src={sliderItem.img}
                alt=""
              />
            </div>
            <div className="infoContainer">
              <h1 className="infoTitle">{sliderItem.title}</h1>
              <p className="infoDesc">{sliderItem.desc}</p>
              <button className="infoButton">SHOW NOW</button>
            </div>
          </div>
        ))}
      </div>
      <div className="sliderArrow right" onClick={() => handleClick("right")}>
        <ArrowRightOutlinedIcon sx={{ fontSize: 30 }} />
      </div>
    </div>
  );
};
export default Slider;
