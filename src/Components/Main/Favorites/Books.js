import { useState } from "react"
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../../Redux/cartSlice";

export const Books = ({ book }) => {

  const [buyBook, setBuyBook] = useState(null);
  const dispatch = useDispatch();

  return (
    <div className="book__container">
      <div className="book__staff-picks">
        <p className="staff-picks">Staff Picks</p>
        <hr className="staff-picks__line"></hr>
      </div>
      <div className="book__title">
        <p className="book__name">{book.title}</p>
        <p className="book__author">By {book.author}</p>
      </div>
      <p className="book__description">{book.description}</p>
      <div className="book__btn">
        <button onClick={() => {dispatch(addItemToCart({book}))}}>{!buyBook ? 'Buy' : 'Own'}</button>
        <p className="book__price">${book.price}</p>
      </div>
      <div className="book__img">
        <img src={book.img} alt="book" />
      </div>
    </div>
  )
}