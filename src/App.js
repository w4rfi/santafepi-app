import "./index.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from "./components/Home"
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartContextProvider } from "./components/context/CartContext";




function App() {
  return (
    <Router>
      <CartContextProvider>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home greeting='SantaDepi' />} />
        <Route exact path='/category/:sexo' element={<ItemListContainer />} />
        <Route exact path='/item/:id' element={<ItemDetailContainer />} />
      </Routes>
      </CartContextProvider>
    </Router>

  );
}

export default App;
