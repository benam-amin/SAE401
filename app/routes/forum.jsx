import FullButton from "../components/Elements/FullButton";

// Assets
import AddImage2 from "../img/Forum-1.jpg";
import Programme21 from "../img/Programme21.jpg";
import Programme20 from "../img/Programme20.jpg";
import HeaderImage from "../img/Header-Forum.jpg";
import HeaderPage from "../components/Elements/HeaderPage";
import '../style/css/main.css';
import '../style/css/forum.css';

export function HeaderForum() {
    return( 
        <HeaderPage
            h1="des associations franco-italiennes"
            h1Green="Forum"
            description="Bienvenue sur notre page forum des associations. Découvrez le prochain forum des associations franco-italiennes et son programme."
            headerImage={HeaderImage}
        />
    );
}

export default function Forum() {
  return (
    <>
      <HeaderForum />
      <section className="forum-wrapper">
          <div className="container">
            <div className="advertising flexSpaceCenter">
              <div className="add-left">
                <div className="add-left-inner">
                  <div className="img-wrapper flexCenter">
                    <img className="radius8" src={AddImage2} alt="" />
                  </div>
                </div>
              </div>
              <div className="add-right">
                <h4 className="font15 semiBold">Forum des associations italiennes virtuel</h4><br />
                <h2 className="font40 extraBold darkColor">APIRP 2020</h2>
                <p className="font12"><br />
                Le forum des associations franco-italiennes initialement prévu place Baudoyer à Paris, se déroulera cette année de façon virtuelle le 20 et 21 juin 2020. L' APIRP participera avec une intervention de Olivier Morin et Ilaria Madonna, président et vice-présidente de l'association, le samedi 20 juin de 16h30 à 16h50. Pour l'occasion Ilaria Madonna a créé un padlet pour illustrer les projets menés par l'APIRP, intitulé APIRP 2020.</p><br />
                <p className="font12"> Vous y trouverez des renseignements sur la diffusion de l'enseignement de l'italien dans les trois académies franciliennes, des documents pour la promotion de notre belle langue, une vidéo pour présenter le bilan des activités de l'APIRP de cette année, le dossier ESABAC, le programme du concours de recrutement ainsi que des projets menés par nos adhérents.</p> 
                <p className="font12">Plus d'infos sur les<a href="https://padlet.com/apirpassociation/apirp2020" > renseignements.</a></p><br />
                <p className="font12">L'intégralité du forum sera retransmise sur la page Facebook du Forum des Associations italiennes. </p>  
                <div className="buttons-row flexNullCenter" style={{ margin: "30px 0" }}>
                  <div style={{ width: "190px" }}>
                    <FullButton title="Programme 20 juin" action={() => window.open(Programme20, '_blank')} />
                  </div>
                  <div style={{ width: "190px", marginLeft: "15px" }}>
                    <FullButton title="Programme 21 juin" action={() => window.open(Programme21, '_blank')}  />
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
    </>
  );
}
