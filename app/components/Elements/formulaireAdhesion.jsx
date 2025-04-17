import '../../style/css/formulaire.css'; 
import '../../style/css/fullButton.css'; 
import { ChampTexte, ChampRadio }  from "./Formulaire_champ";

export default function Form() {
    return (
        <div className="form-wrapper">
                <form action="#" className="form" method="GET">
                    <ChampTexte id="nom" label="Nom" type="text" />
                    <ChampTexte id="prenom" label="Prénom" type="text" />
                    <ChampTexte id="adresse" label="Adresse" type="text" />
                    <ChampTexte id="telephone" label="Numéro de téléphone" type="tel" />
                    <ChampTexte id="mail" label="Adresse email" type="email" />
                    <ChampTexte id="etablissement" label="Etablissement" type="text" />

                    <div className="input-group">
                    <p className="faux_label">Type d'établissement :</p>
                    <div className="input_radio">
                        <ChampRadio id="type_etablissement" label="Privé" />
                        <ChampRadio id="type_etablissement" label="Public" />
                    </div>
                    </div>

                    <div className="input-group">
                    <p className="faux_label">Type de contrat :</p>
                    <div className="input_radio">
                        <ChampRadio id="contrat" label="Adhésion" />
                        <ChampRadio id="contrat" label="Renouvellement" />
                    </div>
                    </div>

                    <input type="submit" value="Envoyer" className="full-button" />
                </form>
            </div>
    );
}