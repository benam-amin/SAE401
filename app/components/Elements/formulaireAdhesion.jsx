import { useState } from "react";
import '../../style/css/formulaire.css'; 
import '../../style/css/fullButton.css'; 
import { ChampTexte, ChampRadio, ChampCheckbox } from "./Formulaire_champ";

export default function Form() {
    // État pour gérer le type de contrat sélectionné
    const [contrat, setContrat] = useState("");

    return (
        <div className="form-wrapper">
            <form action="#" className="form" method="GET">
                
                {/* SECTION 1 : Informations personnelles de l'utilisateur */}
                <fieldset>
                    <legend>Informations personnelles</legend>
                    <div className="input-group">
                        <ChampTexte id="nom" label="Nom" type="text" />
                        <ChampTexte id="prenom" label="Prénom" type="text" />

                        {/* Sous-section pour l'adresse complète */}
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

                {/* SECTION 2 : Type d'établissement fréquenté */}
                <fieldset>
                    <legend>Type d'établissement</legend>
                    <div className="input-group">
                        <ChampTexte id="etablissement" label="Etablissement" type="text" />
                        <p className="faux_label">Type d'établissement :</p>
                        
                        {/* Choix entre établissement privé ou public */}
                        <div className="input_autre">
                            <ChampRadio id="type_prive" name="type_etablissement" label="Privé" />
                            <ChampRadio id="type_public" name="type_etablissement" label="Public" />
                        </div>
                    </div>
                </fieldset>

                {/* SECTION 3 : Motif de la demande */}
                <fieldset>
                    <legend>Motif de la demande</legend>
                    <div className="input-group">
                        <p className="faux_label">Motif de la demande :</p>
                        
                        {/* Choix du contrat avec gestion du champ conditionnel */}
                        <div className="input_autre">
                            <ChampRadio
                                id="contrat_renouveler"
                                name="type_contrat"
                                label="Souhaite renouveler son adhésion à l'APIRP pour l'année scolaire"
                                onChange={() => setContrat("renouveler")}
                            />
                            <ChampRadio
                                id="contrat_adherer"
                                name="type_contrat"
                                label="Souhaite adhérer pour la première fois à l'APIRP pour l'année scolaire"
                                onChange={() => setContrat("adherer")}
                            />
                            <ChampRadio
                                id="contrat_changement"
                                name="type_contrat"
                                label="Vous prie de noter le changement de coordonnées"
                                onChange={() => setContrat("changement")}
                            />
                            <ChampRadio
                                id="contrat_quitter"
                                name="type_contrat"
                                label="Ne fera plus partie de l'APIRP"
                                onChange={() => setContrat("quitter")}
                            />
                        </div>

                        {/* Champ date affiché uniquement si l'utilisateur quitte l'association */}
                        {contrat === "quitter" && (
                            <div className="mt">
                                <ChampTexte
                                    id="date_rupture"
                                    label="Date de rupture de contrat"
                                    type="date"
                                />
                            </div>
                        )}
                    </div>
                </fieldset>

                {/* SECTION 4 : Paiement */}
                <fieldset>
                    <legend>Paiement</legend>
                    <div className="input-group">
                        <p className="faux_label">Montant de la cotisation :</p>
                        
                        {/* Choix entre deux montants : cotisation normale ou de soutien */}
                        <div className="input_autre">
                            <ChampRadio id="cotisation_normale" name="paiement" label="23 € - Cotisation normale" />
                            <ChampRadio id="cotisation_soutien" name="paiement" label="30 € - Cotisation de soutien" />
                        </div>
                    </div>
                </fieldset>

                {/* SECTION 5 : Soumission et validations */}
                <input type="submit" value="Payer avec PayPal" className="full-button" />

                {/* Cases à cocher pour validation des données */}
                <ChampCheckbox id="verifier" label="Je confirme que les informations ci-dessus sont exactes." />
                <ChampCheckbox
                    id="accepter"
                    label="J'autorise l'APIRP à transmettre mes coordonnées aux instances institutionnelles (Ambassade Italienne, Consulat Italien, Institut culturel Italien)"
                />
            </form>
        </div>
    );
}
