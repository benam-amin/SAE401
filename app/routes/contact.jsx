import React from 'react';
import '../style/css/Contact.css';
import '../style/css/flexboxgrid.min.css';
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
      scrollTo="#contact"
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
            <p className="font15">Le 9 mai 1977 était déclarée à la Préfecture de Police de Paris la création de « L'Amicale des professeurs d'italien de la région parisienne ». Rebaptisée « Association des professeurs d'italien de la région parisienne » (APIRP) en 1984, elle eut pour président(e)s successifs(ives) des professeurs de Collège et de Lycée de l’Éducation Nationale, Jean Constantin, Pierre Méthivier, Anne Mazire, Gabrielle Kerleroux, Ketty Zanforlini et depuis janvier 2017, Romina De Lucia.<br/><br/>
Quarante ans après sa création, sa vocation originelle (« établir et développer des liens de solidarité et d'amitié entre les italianistes de la région parisienne ») reste toujours d'actualité. Mais l'APIRP a évolué avec le temps. De nouvelles actions sont en effet apparues nécessaires : tout d'abord, la collecte d'informations fiables au sujet des implantations de postes dans les trois académies; ensuite, la mise en commun d'informations culturelles, de ressources pédagogiques, d'idées pour les cours; et enfin, l'entre-aide en cas de mutation, de fragilisation de poste, etc. Pour ce faire, l'APIRP entretient un dialogue régulier et constructif avec l'Inspection d'italien, en toute indépendance.<br/><br/>
L'APIRP a élaboré une plaquette de promotion de la langue italienne à destination des parents et des élèves en situation de choix, publie un bulletin par an, réunit ses adhérents en assemblée générale au début et à la fin de chaque année scolaire et a également créé un site Internet et une page Facebook.<br/><br/>
Elle est présente lors de manifestations culturelles italo-françaises (Forum des association italiennes du XIIIè arrondissement, Festa del libro des Blancs Manteaux, réceptions au Centre culturel et à l'Ambassade d'Italie, entre autres). Elle représente aussi tous les professeurs d'italien de l'Ile de France au Congrès annuel de la FNAI (Fédération Nationale des Associations d'Italianistes).<br/><br/>

</p>
            <p className="font15 semiBold">Pour nous contacter : apirp.association@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
const Elus = [
  { label: 'Président : Olivier Morin' },
  { label: 'Vice-Présidente : Ilaria Madonna' },
  { label: 'Secrétaire : Estelle Paint' },
  { label: 'Trésorière : Valérie Guillouet' },
  { label: 'Correspondante APIRP pour l\'académie de Paris : Alexandra Martinez' },
  { label: 'Correspondant APIRP pour l\'académie de Créteil : Graziano Tassi' },
  { label: 'Correspondante APIRP pour l\'académie de Versailles : Charlotte Ostrovsky-Richard' },
  { label: 'Secrétaire adjointe + correspondante “CPGE”: Gabrielle Kerleroux' },
  { label: 'Trésorière adjointe : Patrizia Bisson' },
  { label: 'Webmestre : Maria Letizia Gabanini' },
  { label: 'Contacts avec les associations italiennes de l\'Île-de-France : Patrizia Bisson et Alexandra Martinez' },
  { label: 'Contact avec les Universités: Graziano Tassi' },
  { label: 'Contact avec l\'IIC et le Consulat : Olivier Morin - Ilaria Madonna' },
  { label: 'Rédactrice en chef du Bulletin : Charlotte Ostrovsky-Richard' },
  { label: 'Directeur artistique du Bulletin: Francesco Forlani' },
  { label: 'Présidents Honoraires : Madame Anne Mazire' },
  { label: 'Membre honoraire: Ketty Zanforlini' }
];
export function Elu() {

  return (
    <section className="wrapper" id="projects">
      <div className="whiteBg">
        <div className="container">
          <div className="header-info">
            <h1 className="font40 extraBold darkColor">Les élus au C.A.</h1><br />
            <h1 className="font30 semiBold">Membres du C.A. et du Bureau élus le 16 mars 2019</h1><br />
            {Elus.map(({ label }, index) => (
              <>
              <p className="font15" key={index}>{label}</p><br />
              </>
            ))}
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
            <p className="font15">
              Si vous souhaitez commander l'un de ces bulletins vous pouvez envoyer un chèque de 4 € à l'ordre de l'APIRP à l'adresse suivante :<br />
              Mme Valérie GUILLOUET - 10, rue Blondel - 92400 COURBEVOIE
            </p>
          </div>

          <div className="row text-center">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg1}
                title="La carte"
                action={() => window.open('https://drive.google.com/file/d/1Iqk0kTEXSH5eEQyVRmXXjufPeTUmlwHX/view', '_blank')}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg2}
                title="Le menu"
                action={() => window.open('https://drive.google.com/file/d/1AhBJZCmjYmjvKCe58RbusWGJzaMnC7i6/view', '_blank')}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg3}
                title="Lettre aux adhérents"
                action={() => window.open('https://drive.google.com/file/d/1jCvJfoMlt2iwGd-ebsV9iu0X-jpdbr1n/view', '_blank')}
              />
            </div>
          </div>

          <div className="header-info">
            <h1 className="font30 semiBold">Ci-dessous les sommaires des derniers bulletins</h1><br />
          </div>

          <div className="row text-center">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg4}
                title="Copertina bulletin"
                action={() => window.open('https://drive.google.com/file/d/18nlDFxe32kEFDDg4a_mYTsgHAW3uwTfR/view', '_blank')}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg5}
                title="Sommaire"
                action={() => window.open('https://drive.google.com/file/d/1J_ffMlPtrx7OyrkYuz1gO14r5PcK-ms6/view', '_blank')}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg6}
                title="Sommaire"
                action={() => window.open('https://drive.google.com/file/d/0B34j4qalEtJseHdNS1FRX0xKVGM/view?resourcekey=0-L2vbnBD7zasV7NsrSUX0GQ', '_blank')}
              />
            </div>
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
