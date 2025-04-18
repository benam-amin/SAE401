import '../../style/css/formulaire.css'; 
import '../../style/css/fullButton.css'; 
import { ChampTexte, ChampRadio, ChampCheckbox }  from "./Formulaire_champ";

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
                    <div className="input_autre">
                        <ChampRadio id="type_etablissement" label="Privé" />
                        <ChampRadio id="type_etablissement" label="Public" />
                    </div>
                    </div>

                    <div className="input-group">
                    <p className="faux_label">Type de contrat :</p>
                    <div className="input_autre">
                        <ChampRadio id="contrat" label="Souhaite renouveler son adhésion à l'APIRP pour l'année scolaire" />
                        <ChampRadio id="contrat" label="Souhaite adhérer pour la première fois à l'APIRP pour l'année scolaire" />
                        <ChampRadio id="contrat" label="Vous prie de noter le changement de coordonnées" />
                        <ChampRadio id="contrat" label="Ne fera plus partie de l'APIRP" />
                    </div>
                    <div className="input_autre">
                        <ChampRadio id="contrat" label="Souhaite renouveler son adhésion à l'APIRP pour l'année scolaire" />
                        <ChampRadio id="contrat" label="Souhaite adhérer pour la première fois à l'APIRP pour l'année scolaire" />
                        <ChampRadio id="contrat" label="Vous prie de noter le changement de coordonnées" />
                        <ChampRadio id="contrat" label="Ne fera plus partie de l'APIRP" />
                    </div>
                    <div className="input_autre">
                        <ChampCheckbox id="verifier" label="Je confirme que les informations ci-dessus sont exactes." />
                        <ChampCheckbox id="accepter" label="J'autorise l'APIRP à transmettre mes coordonnées aux instances institutionnelles (Ambassade Italienne, Consulat Italien, Institut culturel Italien" />
                    </div>
                    </div>

                    <input type="submit" value="Payer avec PayPal" className="full-button" />
                </form>
            </div>
    );
}