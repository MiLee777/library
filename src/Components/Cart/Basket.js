import { useSelector } from "react-redux";
import { getCartItems } from "../../Redux/cartSlice";
import { CartItem } from "./CartItem";

export const Basket = () => {
  const cartItems = useSelector(getCartItems);
  console.log(cartItems)

  return (
    <div className="section">
      <div className="container basket__container">
        <div className="basket__info">
          {cartItems.map((item) => <CartItem key={item.bookId} item={item} />)}
        </div>
        <div className="basket__info">
          <p className="category__text category__text_selected">Item</p>
          <div>
            <p className="par about__par">Item prices</p>
            <p></p>
          </div>
          <div>
            <p className="par about__par">Item discounts</p>
            <p></p>
          </div>
          <div>
            <p className="category__text category__text_selected">Total price</p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  )
}