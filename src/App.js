import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from './frontOffice/accueil/Accueil';
import Donation from './frontOffice/donation/Donation';
import Contact from './frontOffice/contact/Contact';
import Projet from './frontOffice/projets/Projet';


// import Home from './backOffice/Home';
// import Administrateur from './backOffice/Administrateur';
// import Donateur from './backOffice/Donateur';
// import Message from './backOffice/Message';
// import Temoignage from './backOffice/Temoignage';
// import Paiement from './backOffice/Paiement';
// import Personne from './Personne';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Routes - FrontOffice */}
          <Route index element={<Accueil />} />
          <Route path="accueil" element={<Accueil />} />
          <Route path="donation" element={<Donation />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projets" element={<Projet />} />

          {/* Routes - BackOffice */}
          {/* <Route path="bord" element={<Home/>} />
          <Route path="administrateur" element={<Administrateur/>} />
          <Route path="donateur" element={<Donateur/>} />
          <Route path="message" element={<Message/>} />
          <Route path="temoignage" element={<Temoignage/>} />
          <Route path="paiement" element={<Paiement/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
