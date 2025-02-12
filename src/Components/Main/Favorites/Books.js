import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, getCartItems, removeItemToBooks } from "../../../Redux/cartSlice";

export const Books = ({ book }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector(getCartItems);
  const ownedItem = cartItems.some(item => item.bookId === book.id);

  const handleToggleCart = () => {
    if (ownedItem) {
      dispatch(removeItemToBooks({ bookId: book.id }));
    } else {
      dispatch(addItemToCart({ book }));
    }
  }

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
        <button 
        className={ownedItem ? "book__btn-own" : "book__btn-buy"}
        onClick={handleToggleCart}>
          {ownedItem ? "Own" : "Buy"}
          </button>
        <p className="book__price">${(book.price).toFixed(2)}</p>
      </div>
      <div className="book__img">
        <img src={book.img} alt="book" />
      </div>
    </div>
  )
}