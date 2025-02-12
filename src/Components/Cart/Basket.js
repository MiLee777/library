import { useDispatch, useSelector } from "react-redux";
import { getCartItems, getTotalPrice, getTotalQuantity, removeAllItemstoCart } from "../../Redux/cartSlice";
import { CartItem } from "./CartItem";
import { RiDeleteBin6Line } from "react-icons/ri";

export const Basket = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(getCartItems);
  const totalPrice = useSelector(getTotalPrice);
  const totalQuantity = useSelector(getTotalQuantity);

  return (
    <div className="section">
      <div className="container basket__container">
        <div className="basket__info">
          <div className="basket__info-clear-all"
            onClick={() => { dispatch(removeAllItemstoCart()) }}>
            <RiDeleteBin6Line size="20px" />
            <p className="category__text category__text_selected">Clear cart</p>
          </div>
          {cartItems.map((item) => <CartItem key={item.bookId} item={item} />)}
        </div>
        <div className="basket__info-general">
          <p className="basket__info-general-title">{totalQuantity} {totalQuantity > 1 ? "Items" : "Item"}</p>
          <div>
            <p className="par about__par">Item prices</p>
            <p className="par about__par">${totalPrice.toFixed(2)}</p>
          </div>
          <div>
            <p className="par about__par">Item discounts</p>
            <p className="par about__par">$0</p>
          </div>
          <div>
            <p className="category__text category__text_selected">Total price</p>
            <p className="category__text category__text_selected">${totalPrice.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}