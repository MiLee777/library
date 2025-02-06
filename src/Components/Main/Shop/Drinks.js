export const Drinks = ({ drink }) => {
  return (
    <div className="coffee-shop__category">
      <p className="par coffee-shop__par">{drink.title}</p>
      <div className="coffee-shop__price">
        <span className="coffee-shop__line"></span>
        <p className="par coffee-shop__par">${drink.price}</p>
      </div>
    </div>
  )
}