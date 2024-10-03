import { dataSlider } from "../../../Data/dataSlider"
import { Slider } from "./Slider"

export const About = () => {
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
          <Slider images={ dataSlider }  />
          

        </div>
      </div>
    </section>
  )
}