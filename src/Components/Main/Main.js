import { About } from "./About";
import { Welcome } from "./Welcome";
import { Favorites } from "./Favorites/Favorites";
import { CoffeeShop } from "./Shop/CoffeeShop";
import { Contacts } from "./Contacts";
import { DigitalCards } from "./Cards/DigitalCards";
import { Footer } from "../Footer";

export const Main = () => {
  return (
    <main>
      <Welcome />
      <About />
      <Favorites />
      <CoffeeShop />
      <Contacts />
      <DigitalCards />
      <Footer />
    </main>
  )
}