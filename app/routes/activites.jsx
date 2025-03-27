import {styled} from "styled-components";
// Components
import TopNavBar from "../components/Nav/TopNavbar";
import BlogBox from "../components/Elements/BlogBox";
// import FullButton from "./FullButton";
//Assets
import HeaderImage from "../img/Header-Activites.jpg";
import HeaderPage from "../components/Elements/HeaderPage";
import '../style/css/Enseigner.css';
import '../style/css/Activites.css';
import '../style/css/index.css';

export function HeaderActivités() {

  return (
    <HeaderPage
     h1 = "culturelles"
     h1Green = "Activités"
     description = "Bienvenue sur notre page activités culturelles. Explorez la richesse culturelle italienne : concerts envoûtants, expositions captivantes, et littérature inspirante !"
     headerImage = {HeaderImage}
     />
  );
}
export default function Activités() {
  return (
    <>
    <TopNavBar />
    <HeaderActivités />
      <Wrapper >
        <div className="whiteBg">
          <div className="container">
            <div className="row textCenter">
              <div className="col-custom">
                <BlogBox
                  title= "Concours Dante Dì"
                  text="Le Consulat Général d’Italie à Paris, en collaboration avec l’Institut Culturel Italien de Paris, lance le concours DANTE DÌ à l’occasion du Septième Centenaire de la mort de Dante, organisé par la Société Dante Alighieri - Comites.[...]"
                  tag="Lire plus"
                  action={() => alert("clicked")}
                />
              </div>
              <div className="col-custom">
                <BlogBox
                  title="Paolo Fresu et Daniele di Bonaventura en concert."
                  text="Mercredi  21 Oct 2020 de 19h à 20h30, l'IIC (50, rue de Varenne) nous invite au concert de Paolo Fresu et Daniele di Bonaventura. Paolo Fresu est l’un des plus grands trompettistes de jazz d’aujourd’hui.[...]"
                  tag="Lire plus"
                  action={() => alert("clicked")}
                />
              </div>
              <div className="col-custom">
                <BlogBox
                  title="Sicilia, Tunisia, ..."
                  text="Sur scène à Nanterre, «Sicilia.» Ce spectacle a été joué plus de 140 fois, traduit en italien et anglais, et joué en France et à l'étranger [...]."
                  tag="Lire plus"
                  action={() => alert("clicked")}
                />
              </div>
            </div>
            <div className="row textCenter">
              <div className="col-custom">
                <BlogBox
                  title="Italissimo 2020"
                  text="La cinquième édition d’ITALISSIMO, le festival de littérature et culture italiennes, qui devait se tenir en avril, aura lieu du 8 au 13 octobre 2020.[...]"
                  tag="Lire plus"
                  action={() => alert("clicked")}
                />
              </div>
              <div className="col-custom">
                <BlogBox
                  title="Exposition Gramsci à l'IIC"
                  text="Pour célébrer la richesse et la vivacité de la pensée d’Antonio Gramsci, la Fondation Gramsci et l’Institut culturel italien de Paris vous invitent à découvrir l’exposition « Les Cahiers de prison et la France »[...]"
                  tag="Lire plus"
                  action={() => alert("clicked")}
                />
              </div>
              <div className="col-custom">
                <BlogBox
                  title="L'essor des séries italiennes à l'IIC"
                  text="Le 22 septembre 2020 à 19h, l'Institut culturel italien vous convie à une rencontre consacrée à la Fiction à l'italienne. De Gomorra à la série de Paolo Sorrentino, The young Pope.[...]"
                  tag="Lire plus"
                  action={() => alert("clicked")}
                />
              </div>
              <div className="col-custom">
                <BlogBox
                  title="Erri De Luca, au MK2 Bibliothèque"
                  text="
                  L’écrivain italien Erri De Luca sera au mk2 Bibliothèque (Paris 13° ) du vendredi 18 au dimanche 20 septembre 2020 pour une série de trois entretiens et la projection d’un film qu’il présentera.[...]"
                  tag="Lire plus"
                  action={() => alert("clicked")}
                />
              </div>
              <div className="col-custom">
                <BlogBox
                  title="Soirée de chants traditionnels italiens et stage de chant"
                  text="Le Studio DTM - Danse Théâtre Musique accueille le 20 Mars 2020 à 20h30 un artiste italien, pour une soirée de chants et bals traditionnels des régions Marche et Abruzzo.[...]"
                  tag="Lire plus"
                  action={() => alert("clicked")}
                />
              </div>
              <div className="col-custom">
                <BlogBox
                  title="Cézanne et Rêve d’Italie au Musée Marmottan."
                  text="Au musée Marmottan Monet, Paris 16ème, vient de s’ouvrir une exposition inédite intitulée «Cézanne et les maîtres. Rêve d’Italie». Elle aura lieu jusqu’au 5 juillet 2020.[...]"
                  tag="Lire plus"
                  action={() => alert("clicked")}
                />
              </div>
            </div>
          <div className="row flexCenter">
              <div style={{ margin: "50px 0", width: "200px" }}>
                {/*<FullButton title="Load More" action={() => alert("clicked")} />*/}
              </div>
              </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}



const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;