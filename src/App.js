import "./index.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/presentation/NavBar';
import Home from "./components/containers/Home"
import ItemListContainer from './components/containers/ItemListContainer'
import ItemDetailContainer from './components/containers/ItemDetailContainer';
import { CartContextProvider } from "./components/context/CartContext";
import Cart from "./components/containers/Cart";
import Footer from "./components/presentation/Footer";





function App() {
  return (
    <Router>
      <CartContextProvider>
      <NavBar />
      <Routes>
        <Route exact path='/santafepi-app' element={<Home greeting='SantaDepi' />} />
        <Route exact path='/category/:sexo' element={<ItemListContainer />} />
        <Route exact path='/item/:id' element={<ItemDetailContainer /> } />
        <Route exact path='/cart' element={ <Cart /> } />
      </Routes>
      </CartContextProvider>
      <Footer />
    </Router>

  );
}

export default App;

