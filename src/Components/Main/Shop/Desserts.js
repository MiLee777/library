export const Desserts = ({ dessert }) => {
  return (
    <div className="coffee-shop__category">
      <p className="par coffee-shop__par">{dessert.title}</p>
      <div className="coffee-shop__price">
        <span className="coffee-shop__line"></span>
        <p className="par coffee-shop__par">${dessert.price}</p>
      </div>
    </div>
  )
}