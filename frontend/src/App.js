import './App.css';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import ConnexionForm from './components/ConnexionForm';
import Users from './components/Users'
import InscriptionForm from './components/InscriptionForm';
import Market from './components/Market';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InfoPage from './components/InfoPage';
import ConversationPage from './components/ConversationPage';
import Forum from './components/Forum';
import Conversation from './components/ConversationPage';
import MarketPlace from './components/MarketPlace'
import Chat from './components/Chat';


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/infopage' element={<InfoPage />} />
          <Route path='/users/:id' element={<Users />} />
          <Route path='/users' element={<Users />} />
          <Route path='/connexion' element={<ConnexionForm />} />
          <Route path='/marketplace' element={<MarketPlace />} />
          <Route path='/inscription' element={<InscriptionForm />} />
          <Route path='/forum' element={<Forum />} />
          <Route path='/chat' element={<Chat />} />
          <Route path="/conversations/:id" element={<ConversationPage />} />
          <Route path="/market" element={<Market />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;