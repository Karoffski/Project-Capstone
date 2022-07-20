import './App.css';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import ConnexionForm from './components/ConnexionForm';
import InscriptionForm from './components/InscriptionForm';
import MarketPlace from './components/MarketPlace';
import ShoppingCart from './components/ShoppingCart';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
      <Routes>
        <Route path='/aboutus' element={<AboutUs/>} />
        <Route path='/connexion' element={<ConnexionForm/>} />
        <Route path='/inscription' element={<InscriptionForm/>} />
        <Route path='/toys' element={<MarketPlace/>} />
        <Route path='/shoppingcart' element={<ShoppingCart/>} />
      </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;