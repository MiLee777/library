import { dataBooks } from "../../Data/dataBooks"
import { Quantity } from "./Quantity";
import { MdOutlineDelete } from "react-icons/md";

export const CartItem = ({ item }) => {
  const books = dataBooks.find((book) => book.id === item.bookId);
  return (
    <div className="basket__info-content">
      <div className="basket__info-title">
        <img src={books.img} alt="Book" />
        <div className="info-title">
          <p className="book__name">{books.title}</p>
          <p className="book__author">{books.author}</p>
        </div>
      </div>
      <Quantity />
      <p className="book__price">${books.price}</p>
      <div><MdOutlineDelete size="25px"/></div>
    </div>
  )
}