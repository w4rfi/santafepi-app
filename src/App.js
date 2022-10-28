import "./index.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from "./components/Home"
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartContextProvider } from "./components/context/CartContext";
import Cart from "./components/Cart";




function App() {
  return (
    <Router>
      <CartContextProvider>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home greeting='SantaDepi' />} />
        <Route exact path='/category/:sexo' element={<ItemListContainer />} />
        <Route exact path='/item/:id' element={<ItemDetailContainer />} />
        <Route exact path='/cart' element={ <Cart /> } />
      </Routes>
      </CartContextProvider>
    </Router>

  );
}

export default App;
