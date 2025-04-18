import '../../style/css/formulaire.css'; 
import '../../style/css/fullButton.css'; 
import { ChampTexte, ChampRadio, ChampCheckbox } from "./Formulaire_champ";

export default function Form() {
    return (
        <div className="form-wrapper">
            <form action="#" className="form" method="GET">
                {/* Champ Informations de base */}
                <fieldset>
                    <legend>Informations personnelles</legend>
                    <div className="input-group">
                        <ChampTexte id="nom" label="Nom" type="text" />
                        <ChampTexte id="prenom" label="Prénom" type="text" />
                        <fieldset>
                            <legend>Adresse</legend>
                            <ChampTexte id="nomAdresse" label="N° et nom de la rue" type="text" />
                            <ChampTexte id="codePostal" label="Code Postal" type="number" />
                            <ChampTexte id="ville" label="Ville" type="text" />
                        </fieldset>
                        <ChampTexte id="telephone" label="Numéro de téléphone" type="tel" />
                        <ChampTexte id="mail" label="Adresse email" type="email" />
                    </div>
                </fieldset>

                {/* Champ Type d'établissement */}
                <fieldset>
                    <legend>Type d'établissement</legend>
                    <div className="input-group">
                        <ChampTexte id="etablissement" label="Etablissement" type="text" />
                        <p className="faux_label">Type d'établissement :</p>
                        <div className="input_autre">
                            <ChampRadio id="type_prive" name="type_etablissement" label="Privé" />
                            <ChampRadio id="type_public" name="type_etablissement" label="Public" />
                        </div>
                    </div>
                </fieldset>

                {/* Champ Type de contrat */}
                <fieldset>
                    <legend>Motif de la demande</legend>
                    <div className="input-group">
                        <p className="faux_label">Motif de la demande :</p>
                        <div className="input_autre">
                            <ChampRadio id="contrat_renouveler" name="type_contrat" label="Souhaite renouveler son adhésion à l'APIRP pour l'année scolaire" />
                            <ChampRadio id="contrat_adherer" name="type_contrat" label="Souhaite adhérer pour la première fois à l'APIRP pour l'année scolaire" />
                            <ChampRadio id="contrat_changement" name="type_contrat" label="Vous prie de noter le changement de coordonnées" />
                            <ChampRadio id="contrat_quitter" name="type_contrat" label="Ne fera plus partie de l'APIRP" />
                        </div>
                    </div>
                </fieldset>

                {/* Champ Paiement */}
                <fieldset>
                    <legend>Paiement</legend>
                    <div className="input-group">
                        <p className="faux_label">Montant de la cotisation :</p>
                        <div className="input_autre">
                            <ChampRadio id="cotisation_normale" name="paiement" label="23 € - Cotisation normale" />
                            <ChampRadio id="cotisation_soutien" name="paiement" label="30 € - Cotisation de soutien" />
                        </div>
                    </div>
                </fieldset>

                {/* Bouton submit et validation */}
                <input type="submit" value="Payer avec PayPal" className="full-button" />
                <ChampCheckbox id="verifier" label="Je confirme que les informations ci-dessus sont exactes." />
                <ChampCheckbox id="accepter" label="J'autorise l'APIRP à transmettre mes coordonnées aux instances institutionnelles (Ambassade Italienne, Consulat Italien, Institut culturel Italien)" />
            </form>
        </div>
    );
}
