import { dataShop } from "../../../Data/dataShop";
import { Desserts } from "./Desserts";
import { Drinks } from "./Drinks";

export const CoffeeShop = () => {
  return (
    <section className="section">
      <div className="container favorites__container">
        <div className="title__container">
          <h2 className="title title__section">Coffee Shop</h2>
          <hr className="title__line"></hr>
        </div>
        <p className="par coffee-shop__par">
          In our library, we have of cozy coffee shop, welcoming in customers with frothy cappuccinos and friendly conversation.
          You can get a favorite book and read in coffee shop. Our barista to cook you best coffee, and also you can try desserts from bakery.
        </p>
        <div className="coffee-shop">
          <div className="coffee-shop__menu">
            <p className="title coffee-shop__title">Coffee & Tea</p>
            {
              dataShop.filter((drink) => drink.category === "drink")
              .map((drink) => <Drinks drink={drink} key={drink.id} />)
            }
          </div>
          <div className="coffee-shop__menu">
            <p className="title coffee-shop__title">Desserts & Cakes </p>
            {
              dataShop.filter((dessert) => dessert.category === "dessert")
              .map((dessert) => <Desserts dessert={dessert} key={dessert.id} />)
            }
          </div>
        </div>
      </div>
    </section>
  )
}