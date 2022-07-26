import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import ConnexionForm from './components/ConnexionForm';
import InscriptionForm from './components/InscriptionForm';
import MarketPlace from './components/MarketPlace';
import ShoppingCart from './components/ShoppingCart';
import ConversationPage from './components/ConversationPage';
import Forum from './components/Forum';
import Toy from './components/Toy';
import Home from './components/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/infopage' element={<AboutUs/>} />
        <Route path='/connexion' element={<ConnexionForm/>} />
        <Route path='/inscription' element={<InscriptionForm/>} />
        <Route path='/marketplace' element={<MarketPlace/>} />
        <Route path='/marketplace/:id' element={<Toy/>} />
        <Route path='/shoppingcart' element={<ShoppingCart/>} />
        <Route path='/forum' element={<Forum/>}/>
        <Route path="/forum/:id" element={<ConversationPage/>} />
        <Route path="/pagenotfound" element={<PageNotFound/>} />
        <Route path="*" element={<Navigate to ="/pagenotfound" />}/>
      </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;