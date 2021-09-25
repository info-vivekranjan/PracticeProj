import React, { useState } from "react";
import { data } from "./DataSlider";
import "./Slider.css";

function Slider() {
  const [sliderIndex, setSliderIndex] = useState(1);

  const nextBtn = () => {
    if (sliderIndex === data.length) {
      setSliderIndex(1);
    } else {
      setSliderIndex(sliderIndex + 1);
    }
  };

  const prevBtn = () => {
    if (sliderIndex === 1) {
      setSliderIndex(data.length);
    } else {
      setSliderIndex(sliderIndex - 1);
    }
  };

  const moveToDot = (index) => {
    setSliderIndex(index);
  };

  return (
    <div className="sliderCont">
      {data.map((item, index) => {
        return (
          <div
            key={item.id}
            className={
              sliderIndex === index + 1 ? "slideImg animatedSlide" : "slideImg"
            }
          >
            <img src={item.img} alt={item.title} />
          </div>
        );
      })}

      <div className="sliderBtnCont">
        <button onClick={prevBtn}>Prev</button>
        <button onClick={nextBtn}>Next</button>
      </div>

      <div className="dotCont">
        {Array.from({ length: 5 }).map((item, index) => {
          return (
            <div
              className={sliderIndex == index + 1 ? "dots activedots" : "dots"}
              onClick={() => moveToDot(index + 1)}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export { Slider };
