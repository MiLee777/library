import { useState } from "react";

export const Quantity = () => {
  const [count, setCount] = useState(1);

  const handleClickCountAdd = () => {
    const newQuantity = count + 1;
    setCount(newQuantity);
  }

  const handleClickCountRemove = () => {
    if(count <= 1) return;
    const newQuantity = count - 1;
    setCount(newQuantity);
  }

  return (
    <div className="quantity__container">
      <button className="quantity__btn quantity__span" onClick={handleClickCountRemove}>-</button>
      <span className="quantity__span">{count}</span>
      <button className="quantity__btn quantity__span" onClick={handleClickCountAdd}>+</button>
    </div>
  )
}