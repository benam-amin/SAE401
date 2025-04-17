import React from 'react';
import '../style/css/Contact.css';
import ProjectBox from "../components/Elements/ProjectBox";
import ProjectImg1 from "../img/bulletin1.png";
import ProjectImg2 from "../img/bulletin2.png";
import ProjectImg3 from "../img/bulletin3.png";
import ProjectImg4 from "../img/bulletin4.png";
import ProjectImg5 from "../img/bulletin5.png";
import ProjectImg6 from "../img/bulletin6.png";
import HeaderPage from "../components/Elements/HeaderPage";
import HeaderImage from "../img/Header-Contact.jpg";

function HeaderContact() {
  return (
    <HeaderPage
      h1="contacter"
      h1Green="Nous"
      description={
        <>
          Pour nous signaler tout changement de coordonnées personnelles (adresse de domicile, téléphone, courriel) ou professionnelles (changement d’établissement de rattachement, de statut, etc.), merci d’envoyer un courriel à :{' '}
          <span className="semiBold">apirp.association@gmail.com</span>.
          <br />
          Pour le renouvellement d’adhésion et pour les commandes de plaquettes pour la promotion de l’italien, nos adhérents peuvent aussi se servir des formulaires publiés dans les deux dernières pages de notre bulletin annuel.
        </>
      }
      headerImage={HeaderImage}
    />
  );
}

export function ContactContenu() {
  return (
    <>
      <HeaderContact />
    </>
  );
}

export function Assoc() {
  return (
    <section className="wrapper" id="projects">
      <div className="whiteBg">
        <div className="container">
          <div className="header-info">
            <h1 className="font40 extraBold darkColor">L'association et ses statuts</h1><br />
            <h1 className="font30 semiBold">Présentation de l'APIRP: Association des Professeurs d'Italien de la Région Parisienne</h1><br />
            <p className="font15">Le 9 mai 1977 était déclarée à la Préfecture de Police de Paris la création de « L'Amicale des professeurs d'italien de la région parisienne »...</p>
            <p className="font15 semiBold">Pour nous contacter : apirp.association@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Elu() {
  return (
    <section className="wrapper" id="projects">
      <div className="whiteBg">
        <div className="container">
          <div className="header-info">
            <h1 className="font40 extraBold darkColor">Les élus au C.A.</h1><br />
            <h1 className="font30 semiBold">Membres du C.A. et du Bureau élus le 16 mars 2019</h1><br />
            <p className="font15">Président : Olivier Morin</p>
            <p className="font15">Vice-Présidente : Ilaria Madonna</p>
            <p className="font15">Secrétaire : Estelle Paint</p>
            <p className="font15">Trésorière : Valérie Guillouet</p>
            {/* Additional content */}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Bulletin() {
  return (
    <section className="wrapper" id="projects">
      <div className="whiteBg">
        <div className="container">
          <div className="header-info">
            <h1 className="font40 extraBold darkColor">Les bulletins de l'association</h1><br />
            <h1 className="font30 semiBold">Le dernier bulletin 2018 - 2019 a été consacré à la cuisine italienne</h1><br />
            <p className="font15">Si vous souhaitez commander l'un de ces bulletin vous pouvez envoyer un chèque de 4 € à l'ordre de l'APIRP à l'adresse suivante...</p>
          </div>

          <div className="row text-center">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg1}
                title="La carte"
                action={() => window.open('https://drive.google.com/file/d/1Iqk0kTEXSH5eEQyVRmXXjufPeTUmlwHX/view', '_blank')}
              />
            </div>
            {/* Repeat for other project boxes */}
          </div>

          <div className="header-info">
            <h1 className="font30 semiBold">Ci-dessous les sommaires des derniers bulletins</h1><br />
          </div>
          
          <div className="row text-center">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg4}
                title="Copertia bulletin"
                action={() => window.open('https://drive.google.com/file/d/18nlDFxe32kEFDDg4a_mYTsgHAW3uwTfR/view', '_blank')}
              />
            </div>
            {/* Repeat for other project boxes */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <>
      <ContactContenu />
      <Assoc />
      <Elu />
      <Bulletin />
    </>
  );
}
