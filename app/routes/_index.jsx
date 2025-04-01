import { useLoaderData } from "@remix-run/react";
import '../style/css/Accueil.css';
import '../style/css/index.css';
import TopNavBar from "../components/Nav/TopNavbar";
import TabImg from '../components/TabImg';
import Actualite from '../components/Actualite'; // Importer le composant Actualite
import image from '../img/drapeau_italie2.jpg'; // Chemin corrigé ✅
import italieIcon from '../img/Italie_icon.png'; // Si ce fichier existe aussi dans src/img/

//on simplifie les imports grâce à la fonction import meta glob (supportée avec vite)
const images = import.meta.glob("../img/*", { eager: true, import: "default" }); 

//permet de charger dynamiquement les images
export const loader = async () => {
  return {
    image: images["../img/drapeau_italie2.jpg"],
    italieIcon: images["../img/Italie_icon.png"],
    divinaComedia: images["../img/DivinaComedia.jpg"],
    actualites: [
      {
        image: images["../img/zerocalcare.jpg"],
        title: "Zerocalcare sur Netflix",
        description:
          "L'arrivée de la série animée de Zerocalcare sur Netflix...",
        url: "https://youtu.be/c0p3iwtw9tU",
      },
      {
        image: images["../img/greenPea.jpg"],
        title: "Green Pea ouvre à Turin",
        description:
          "L’attesissimo centro commerciale della famiglia Farinetti...",
        url: "https://www.gamberorosso.it/...",
      },
      {
        image: images["../img/sergio.jpg"],
            title:"Sergio Mattarella: «Dante, nostro contemporaneo. Così la sua voce parla al futuro»",
            description:"La musica per rendere omaggio al Sommo poeta. È accaduto sabato 3 ottobre, a Roma, nel cortile d’onore del Quirinale, in occasione delle celebrazioni per i 700 anni dalla morte di Dante, nato a Firenze nel 1265 e scomparso a Ravenna nel 1321.",
            url:"https://www.corriere.it/cultura/20_ottobre_03/sergio-mattarella-dante-nostro-contemporaneo-cosi-sua-voce-parla-futuro-5416bf66-05a5-11eb-867c-57744a2cabe2.shtml",
      }, 
      {
        image: images["../img/dal.jpg"],
            title:"Dal 2021 riapre al pubblico il corridoio più famoso del mondo",
            description:"Nel 2021 aprirà al pubblico una gemma del patrimonio artistico italiano, il corridoio più imponente e famoso al mondo : il corridoio vasariano.  ",
            url:"https://it.businessinsider.com/corridoio-vasariano-firenze-palazzo-vecchio-uffici-palazzo-pitti-ponte-vecchio-2021-riapertura/ ",
      },
      {
        image: images["../img/raffaelloSuperstar.jpg"],
            title:"Raffaello superstar, a Roma la più grande mostra con cento capolavori",
            description:"Le Scuderie del Quirinale celebreranno Raffaello Sanzio con la più spettacolare monografia a lui mai dedicata. Una maxi-mostra che dal 5 marzo 2020 esporrà duecento opere tra dipinti, disegni e opere di confronto, per la prima volta riuniti tutte insieme, con 100 capolavori del maestro provenienti dagli Uffizi e da numerosi altri musei.  ",
            url:"https://roma.repubblica.it/cronaca/2019/12/25/news/raffaello_superstar_a_roma_la_piu_grande_mostra_con_cento_capolavori-244337923/?refresh_ce ",
      },
      {
        image: images["../img/lupi.jpg"],
            title:"I lupi di Liu Ruowang invadono Napoli",
            description:"Cento grandi lupi di metallo assediano minacciosi la statua di un guerriero in piazza Municipio a Napoli.   ",
            url:"http://www.rainews.it/dl/rainews/media/Cento-lupi-in-piazza-Municipio-a-Napoli-la-natura-che-si-ribella-all-uomo-7a4ad6e0-29a7-42ed-824b-d74e0b326cab.html#foto-3 ",
      },
      {
        image: images["../img/portata.jpg"],
            title:"Portata alla luce un’altra villa romana a Enna",
            description:"Con l’installazione della copertura si sono conclusi i lavori – finanziati dalla Regione Siciliana – di sistemazione dell’area archeologica della Villa romana di contrada Gerace a Enna.   ",
            url:"http://www.custonaciweb.it/portata-alla-luce-unaltra-villa-romana-a-enna-si-trova-a-15-km-dalla-villa-del-casale-di-piazza-armerina/?fbclid=IwAR2WLelaVEdbJzGPh-KL5CQNjpqOG56KqKzdn5B5NKO5egKzecj5hkkMiBc ",
      },
    ],
  };
};

const Accueil = () => {
  return (
    <> <TopNavBar />
    <div className="accueil-container">

      <div className="hero">
          <img className="background-image" src={italieIcon} alt="Background" />

          <div className="hero-content">
              <h1>Apirp</h1>
              <p>Association des Professeurs d'Italien de la Région Parisienne</p>
              {/* Tu peux ajouter d'autres éléments ici si nécessaire */}
          </div>
      </div>

      <div className="accueil-container1">

        <h1 className="h1">Bienvenue sur le site de l'Association des Professeurs d'Italien de la Région Parisienne</h1>

        <TabImg
            imageUrl= {image} // Utilisation de la variable image pour le chemin
            imageAlt="Description de l'image"
            title="Notre association a pour vocation :"
            description=
              {<ul>
                <li> <span className='span'>- d’établir et développer</span> des liens de solidarité et d’amitié entre les italianistes de la région parisienne; </li>
                <li> <span className='span'>- de renseigner</span> les professeurs d’italien à tous niveaux sur la diffusion de l’enseignement de l’italien en région parisienne ;</li>
                <li> <span className='span'>- de promouvoir</span> l’enseignement de l’italien.</li> 
              </ul>
              }
        />

      </div>
      <img src='../img/italie_icon.png' alt="Description de l'image"/>

      <img className="img" src={import('../img/Italie_icon.png')} alt="Description de l'image" />

      <div className="accueil-container1">

        <h2 className="txt2">Exploration culturelle : Plongée au cœur de l'Italie avec l'Association des Professeurs d'Italien de la Région Parisienne</h2>

        <p className="txt">
          Nous sommes également des défenseurs de la diversité linguistique et culturelle. En promouvant 
          l'enseignement de l'italien, nous contribuons à l'enrichissement de la palette linguistique de 
          la région parisienne, offrant aux apprenants une fenêtre ouverte sur une culture riche et diversifiée. 
          Nous croyons fermement en la valeur ajoutée que représente la maîtrise de l'italien, tant sur le plan 
          personnel que professionnel, et nous nous efforçons de la transmettre avec passion et dévouement.
          Que vous soyez un enseignant passionné, un apprenant avide de découvrir la 
          langue de Dante, ou simplement un amateur de culture italienne, vous trouverez 
          dans notre association un foyer chaleureux où partager vos intérêts, vos connaissances
           et vos expériences. Rejoignez-nous dans cette aventure passionnante, où la découverte 
           de la langue et de la culture italiennes n'est qu'un début. Bienvenue à vous dans notre 
           famille italianiste !
        </p>

      </div>

      <div className="accueil-container2">

        <h2 className="txt3 h2">actualités</h2>
        <p className='p'>... DAL WEB</p>

        <div className="actualite-container">
        
      

        </div>

      </div>
    </div>
    </>
  )
}

export default Accueil;