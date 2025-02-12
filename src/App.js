import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Main } from './Components/Main/Main';
import { HeaderMenu } from './Components/HeaderMenu/HeaderMenu';
import { Registration } from './Components/Registration/Registration';
import { BurgerMenu } from './Components/HeaderMenu/BurgerMenu';
import { Basket } from './Components/Cart/Basket';
import { BasketIcon } from './Components/Cart/BasketIcon';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="header">
          <div className="header__container container">
            <Link to="/library" className="header__logo">Brooklyn Public Library</Link>
            <nav className="header__nav">
              <HeaderMenu />
              <Link to="/basket" className="basket">
                <BasketIcon />
              </Link>
              <Registration />
              <BurgerMenu />
            </nav>
          </div>
        </header>
        <Routes>
          <Route path="/library" element={<Main />} />
          <Route path="/basket" element={ <Basket />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;