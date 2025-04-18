import { useState } from 'react';
import '../style/css/Divers.css';
import '../style/css/main.css';
import '../style/css/formulaire.css';
import image from '../img/paysage_italie.jpg';
import Formulaire from "../components/Elements/formulaireAdhesion";


const DiversPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Gérer la soumission du formulaire ici
  };

  return (
    <>
    
    <div className="divers-container">
      <form className="form" onSubmit={handleSubmit}>
        <h2 className='h2-titre'>Connexion</h2>
        <div className="form-group">
          <label htmlFor="username">Nom d'utilisateur</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className='button' type="submit">Se connecter</button>
      </form>
      {/* Image ajoutée pour l'esthétique */}
      <img
        src={image}
        alt="Image d'illustration"
        className="login-image img"
      />
    </div>
    <Formulaire />
    </>
  );
};

export default DiversPage;