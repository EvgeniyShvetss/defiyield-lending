import React from 'react';
import Slider from 'react-slick';
import './carousel.scss';

const Carousel = ({ children }) => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    rows: 2,
    slidesPerRow: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 100,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1190,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 2,
          rows: 1,
          centerMode: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          rows: 1,
          centerMode: true,
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
          centerMode: true,
        }
      },
    ]
  };
  return (
    <Slider {...settings}>
      {children}
    </Slider>
  );
};

export default Carousel;
