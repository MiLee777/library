import { BsBasket3Fill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { getTotalQuantity } from "../../Redux/cartSlice";

export const BasketIcon = () => {
  const totalQuantity = useSelector(getTotalQuantity);
  return (
    <>
      <BsBasket3Fill size="28px" color="#fff" />
      <span>{totalQuantity}</span>
    </>
  )
}