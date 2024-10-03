import { useState } from "react";
import { useEffect } from "react";

export const Slider = ({ images }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [sliderItems, setSliderItems] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth < 940) {
      setSliderItems(1);
    } 
    if (windowWidth >= 940 && windowWidth <= 1439) {
      setSliderItems(2);
    } 
    if (windowWidth >=  1440){
      setSliderItems(3);
    }
  }, [windowWidth]);

  const rows = [];
  for (let i = 0; i < images.length; i += sliderItems) {
    rows.push(images.slice(i, i + sliderItems));
  }

  return (
    <div className="slider__container">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="slider__row">
          {row.map((item, index) => (
            <div key={index} className="slider__img">
              <img
                src={require(`../../../assets/images/${item}.png`)}
                alt={item}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}