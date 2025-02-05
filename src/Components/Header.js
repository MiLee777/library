import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Basket } from "./Basket";
import { BurgerMenu } from "./HeaderMenu/BurgerMenu";
import { HeaderMenu } from "./HeaderMenu/HeaderMenu";
import { Registration } from "./Registration/Registration";
import { BsBasket3Fill } from "react-icons/bs";
import { Main } from "./Main/Main";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__container container">
        <Router>
          <Link to="/home" className="header__logo">Brooklyn Public Library</Link>
          <nav className="header__nav">
            <HeaderMenu />
            <Link to="/basket">
              <BsBasket3Fill size="25px" color="#fff" />
              <span>5</span>
            </Link>
            <Registration />
            <BurgerMenu />
          </nav>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/basket" element={<Basket />} />
          </Routes>
        </Router>
      </div>
    </header>
  )
}