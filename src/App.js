import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Products from './components/products/Products';
import Categories from './components/categories/Categories';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/products">
                Products
              </Link>
            </li>
            <li>
              <Link to="/categories">
                Categories
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/products">
            <Products />
          </Route>

          <Route path="/categories">
            <Categories />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
