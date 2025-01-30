import { Category } from "./Category"

export const Favorites = () => {
  return (
    <section className="section favorites__section">
      <div className="favorites__container container">
        <div className="title__container">
          <h2 className="title">Favorites</h2>
          <hr className="title__line"></hr>
        </div>
        <p className="favorites__text_bold">Pick favorites of season</p>
        <div className="favorites__category">
          {
            ["winter", "spring", "summer", "autumn"].map((category) => <Category category={category} />)
          }
        </div>

      </div>
    </section>
  )
}