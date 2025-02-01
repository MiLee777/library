import { useDispatch, useSelector } from "react-redux";
import { filterCategory, getSelectedCategory } from "../../../Redux/booksSlice";

export const Categories = ({category}) => {
  const selectedCategory = useSelector(getSelectedCategory);
  const dispatch = useDispatch();
  return (
    <>
      <label className="category__label"
      onClick={() => {dispatch(filterCategory(category))}}>
        <input 
        className="category__input"
        type="radio"
        name="category"
        value={ category }
        defaultChecked={selectedCategory === category}/> 
        <span className="category__fake"></span>
        <span className={selectedCategory === category ? "category__text category__text_selected" : "category__text"}>{ category }</span>
      </label>
    </>
  )
}