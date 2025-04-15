
import '../style/css/Accueil.css';
import '../style/css/main.css';
import { useLoaderData } from "@remix-run/react";
import TopNavBar from "../components/Nav/TopNavbar";
import TabImg from "../components/TabImg";
import Actualite from "../components/Actualite";

// Chargement dynamique des images
const images = import.meta.glob("../img/*", { eager: true, import: "default" });

//récupère les images, plus soigné pour les imports
export const loader = async () => {
  return {
    actualites: [
      {
        image: images["../img/DivinaComedia.jpg"],
        title: "La Divina Commedia",
        description:
          "Con tutto si può giocare, anche con Dante Alighieri e con la Divina Commedia...",
        url: "https://www.lastampa.it/cultura/2021/01/21/news/la-divina-commedia-diventa-un-gioco-da-tavolo-come-quello-dell-oca-1.39802733",
      },
      {
        image: images["../img/zerocalcare.jpg"],
        title: "Zerocalcare sur Netflix",
        description:
          "L'arrivée de la série animée de Zerocalcare sur Netflix, intitulée 'Strappare lungo i bordi'...",
        url: "https://youtu.be/c0p3iwtw9tU",
      },
      {
        image: images["../img/greenPea.jpg"],
        title: "Green Pea ouvre à Turin",
        description:
          "L’attesissimo centro commerciale della famiglia Farinetti esordirà a Torino...",
        url: "https://www.gamberorosso.it/notizie/green-pea-apre-a-torino-l8-dicembre-ecco-cose-la-scommessa-ecologica-di-farinetti/",
      },
      {
        image: images["../img/sergio.jpg"],
        title: "Sergio Mattarella: «Dante, notre contemporain»",
        description:
          "La musique pour rendre hommage au Sommo poeta...",
        url: "https://www.corriere.it/cultura/20_ottobre_03/sergio-mattarella-dante-nostro-contemporaneo-cosi-sua-voce-parla-futuro-5416bf66-05a5-11eb-867c-57744a2cabe2.shtml",
      },
      {
        image: images["../img/dal.jpg"],
        title: "Dal 2021 riapre al pubblico il corridoio più famoso del mondo",
        description:
          "Nel 2021 aprirà al pubblico una gemma del patrimonio artistico italiano...",
        url: "https://it.businessinsider.com/corridoio-vasariano-firenze-palazzo-vecchio-uffici-palazzo-pitti-ponte-vecchio-2021-riapertura/",
      },
      {
        image: images["../img/raffaelloSuperstar.jpg"],
        title: "Raffaello superstar, la plus grande exposition à Rome",
        description:
          "Le Scuderie del Quirinale célébreront Raffaello Sanzio avec une exposition spectaculaire...",
        url: "https://roma.repubblica.it/cronaca/2019/12/25/news/raffaello_superstar_a_roma_la_piu_grande_mostra_con_cento_capolavori-244337923/?refresh_ce",
      },
      {
        image: images["../img/lupi.jpg"],
        title: "Les loups de Liu Ruowang envahissent Naples",
        description:
          "Cento grandi lupi di metallo assediano minacciosi la statua di un guerriero...",
        url: "http://www.rainews.it/dl/rainews/media/Cento-lupi-in-piazza-Municipio-a-Napoli-la-natura-che-si-ribella-all-uomo-7a4ad6e0-29a7-42ed-824b-d74e0b326cab.html#foto-3",
      },
      {
        image: images["../img/portata.jpg"],
        title: "Portata alla luce un’altra villa romana a Enna",
        description:
          "Con l’installazione della copertura si sono conclusi i lavori...",
        url: "http://www.custonaciweb.it/portata-alla-luce-unaltra-villa-romana-a-enna-si-trova-a-15-km-dalla-villa-del-casale-di-piazza-armerina/?fbclid=IwAR2WLelaVEdbJzGPh-KL5CQNjpqOG56KqKzdn5B5NKO5egKzecj5hkkMiBc",
      },
    ],
  };
};

const Accueil = () => {
  //permet d'utiliser le retour de la fonction loader
  const { image, actualites } = useLoaderData();

  return (
    <>
      <TopNavBar />
      <div className="accueil-container">
        <div className="hero">
          {/* <div className="hero-content">
            <h1>Apirp</h1>
            <p>Association des Professeurs d'Italien de la Région Parisienne</p>
          </div> */}
        </div>
        <div className="accueil-container1">
          <h1 className="h1">Bienvenue sur notre site</h1>
          <TabImg
            imageUrl={image}
            imageAlt="Drapeau italien"
            title="Notre association a pour vocation :"
            description={
              <ul>
                <li>- Développer la solidarité entre italianistes</li>
                <li>- Renseigner les professeurs d’italien</li>
                <li>- Promouvoir l’enseignement de l’italien</li>
              </ul>
            }
          />
        </div>
        <div className="accueil-container2">
          <h2 className="txt3 h2">Actualités</h2>
          <p className='p'>... DAL WEB</p>
          <div className="actualite-container">
            {/* permet de récupérer les éléments contenu dans l'objet actualité */}
            {actualites.map((actu, index) => (
              <div key={index} className="actualite-box">
                <Actualite image={actu.image} title={actu.title} description={actu.description} url={actu.url} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Accueil;
