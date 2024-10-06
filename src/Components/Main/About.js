import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dataSlider } from "../../Data/dataSlider";

export const About = () => {
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // const [sliderItems, setSliderItems] = useState(1);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (windowWidth < 940) {
  //     setSliderItems(1);
  //   }
  //   if (windowWidth >= 940 && windowWidth <= 1439) {
  //     setSliderItems(2);
  //   }
  //   if (windowWidth >= 1440) {
  //     setSliderItems(3);
  //   }
  // }, [windowWidth]);
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };


  return (
    <section className="section">
      <div className="about__container container">
        <div className="title__container">
          <h2 className="title">About</h2>
          <hr className="title__line"></hr>
        </div>
        <div className="about__slider">
          <p className="about__par">The Brooklyn Library is a free workspace,
            a large number of books and a cozy coffee shop inside
          </p>
          <div className="slider__container">
            <Slider {...settings}>
              {dataSlider.map((item, index) => {
                return (
                  <div key={index} className="slider__img">
                    <img
                      src={require(`../../assets/images/${item}.png`)}
                      alt={item}
                    />
                  </div>
                )
              })} 
            </Slider>
          </div>
        </div>
      </div>
    </section>
  )
}