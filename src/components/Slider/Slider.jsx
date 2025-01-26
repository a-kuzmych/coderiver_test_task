import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "./Slider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = () => {
  const sliderRef = useRef(null);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (current) => {
      const totalSlides = sliderRef.current.props.children.length - settings.slidesToShow;
      setIsPrevDisabled(current === 0);
      setIsNextDisabled(current >= totalSlides);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handlePrev = () => {
    if (!isPrevDisabled) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (!isNextDisabled) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <section className="slider">
      <div className="slider__header">
        <h3 className="slider__title">POPULAR THIS WEEK</h3>
        <div className="slider__controls">
          <button
            className={`slider__button slider__button--prev ${isPrevDisabled ? "slider__button--disabled" : ""}`}
            onClick={handlePrev}
            disabled={isPrevDisabled}
          >
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="19" cy="19" r="18.2875" transform="rotate(-180 19 19)" stroke="#A7A6A6" strokeWidth="1.425" />
              <path d="M21.6916 27.075L23.5892 25.1774L17.4253 19L23.5892 12.8226L21.6916 10.925L13.6166 19L21.6916 27.075Z" fill="#A7A6A6" />
            </svg>
          </button>
          <button
            className={`slider__button slider__button--next ${isNextDisabled ? "slider__button--disabled" : ""}`}
            onClick={handleNext}
            disabled={isNextDisabled}
          >
            <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20.5" cy="20.5" r="19.7313" stroke="white" strokeWidth="1.5375" />
              <path d="M17.5959 11.7875L15.5485 13.8349L22.199 20.5L15.5485 27.1651L17.5959 29.2125L26.3084 20.5L17.5959 11.7875Z" fill="white" />
            </svg>
          </button>
        </div>
      </div>
      <Slider ref={sliderRef} {...settings}>
        <div className="slider__item">
          <img src="/src/assets/img/slider/film1.jpg" alt="Film 1" />
        </div>
        <div className="slider__item">
          <img src="/src/assets/img/slider/film2.jpg" alt="Film 2" />
        </div>
        <div className="slider__item">
          <img src="/src/assets/img/slider/film3.jpg" alt="Film 3" />
        </div>
        <div className="slider__item">
          <img src="/src/assets/img/slider/film4.jpg" alt="Film 4" />
        </div>
        <div className="slider__item">
          <img src="/src/assets/img/slider/film5.jpg" alt="Film 5" />
        </div>
        <div className="slider__item">
          <img src="/src/assets/img/slider/film6.jpg" alt="Film 6" />
        </div>
      </Slider>
    </section>
  );
};

export default SliderComponent;
