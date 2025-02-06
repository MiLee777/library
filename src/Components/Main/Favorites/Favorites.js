import { useSelector } from "react-redux";
import { dataBooks } from "../../../Data/dataBooks";
import { Books } from "./Books";
import { Categories } from "./Categories";
import { getSelectedCategory } from "../../../Redux/booksSlice";

export const Favorites = () => {
  const selectedCategory = useSelector(getSelectedCategory);
  return (
    <section className="favorites__section section">
      <div className="favorites__container container">
        <div className="title__container">
          <h2 className="title title__section">Favorites</h2>
          <hr className="title__line"></hr>
        </div>
        <p className="favorites__text_bold">Pick favorites of season</p>
        <div className="favorites__category">
          {
            ["winter", "spring", "summer", "autumn"].map((category) => <Categories category={category} key={category} />)
          }
        </div>
        <div className="favorites__books">
          {dataBooks
          .filter((book) => selectedCategory === book.category)
          .map((book) => <Books book={ book } key={ book.id } />)}
        </div>
      </div>
    </section>
  )
}