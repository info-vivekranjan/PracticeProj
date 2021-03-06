import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    let id = setInterval(() => {
      if (sliderIndex === data.length) {
        setSliderIndex(1);
      } else {
        setSliderIndex(sliderIndex + 1);
      }
    }, 2000);

    return () => {
      clearInterval(id);
    };
  }, [sliderIndex]);

  // console.log(sliderIndex);

  return (
    <section className="sliderCont">
      {data.map((item, index) => {
        return (
          <div
            key={item.id}
            className={
              sliderIndex === index + 1 ? "slideImg animatedSlide" : "slideImg"
            }
          >
            <img src={item.img} alt={item.title} />;
          </div>
        );
      })}

      <div className="sliderBtnCont">
        <i onClick={prevBtn} className="ri-arrow-left-s-line"></i>

        <i onClick={nextBtn} className="ri-arrow-right-s-line"></i>
      </div>

      <section className="dotCont">
        {Array.from({ length: 5 }).map((item, index) => {
          return (
            <div
              className={sliderIndex == index + 1 ? "dots activedots" : "dots"}
              onClick={() => moveToDot(index + 1)}
            ></div>
          );
        })}
      </section>
    </section>
  );
}

export { Slider };
