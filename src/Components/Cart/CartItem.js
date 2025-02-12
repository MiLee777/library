import { useDispatch } from 'react-redux';
import { removeItemToCart, updateItemQuantity } from '../../Redux/cartSlice';
import { dataBooks } from "../../Data/dataBooks";
import { Quantity } from "./Quantity";
import { MdOutlineDelete } from "react-icons/md";
import { useState } from "react";

export const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const books = dataBooks.find((book) => book.id === item.bookId);
  const [count, setCount] = useState(item.quantity);

  const handleUpdateQuantity = (newQuantity) => {
    setCount(newQuantity);
    dispatch(updateItemQuantity({ bookId: item.bookId, quantity: newQuantity, price: books.price }));
  };

  return (
    <div className="basket__info-content">
      <div className="basket__info-title">
        <img src={books.img} alt="Book" />
        <div className="info-title">
          <p className="book__name">{books.title}</p>
          <p className="book__author">{books.author}</p>
        </div>
      </div>
      <div className="info__price">
        <Quantity count={count} setCount={handleUpdateQuantity} />
        <p className="book__price">${(books.price * count).toFixed(2)}</p>
        <div className="basket__info-remove-btn" 
        onClick={() => {dispatch(removeItemToCart({itemId: item.id}))}}>
          <MdOutlineDelete size="25px" />
          </div>
      </div>
    </div>
  )
}