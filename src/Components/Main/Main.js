import { About } from "./About";
import { Welcome } from "./Welcome";
import { Favorites } from "./Favorites/Favorites";
import { CoffeeShop } from "./Shop/CoffeeShop";
import { Contacts } from "./Contacts";

export const Main = () => {
  return (
    <main>
      <Welcome />
      <About />
      <Favorites />
      <CoffeeShop />
      <Contacts />
    </main>
  )
}