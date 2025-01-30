import { About } from "./About";
import { Welcome } from "./Welcome";
import { Favorites } from "./Favorites/Favorites";

export const Main = () => {
  return (
    <main>
      <Welcome />
      <About />
      <Favorites />
    </main>
  )
}