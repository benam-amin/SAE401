import FullButton from "../components/Elements/FullButton";
import HeaderPage from "../components/Elements/HeaderPage";

// Assets
import AddImage2 from "../img/Promouvoir-1.jpg";
import AddImage3 from "../img/Promouvoir-2.jpg";
import heroImage from '../img/Header-Promouvoir.jpg';

import '../style/css/Enseigner.css';
import '../style/css/main.css';
import '../style/css/Promouvoir.css';

export function HeaderPromouvoir() {
  return (
    <HeaderPage
      h1="l'italien"
      h1Green="Promouvoir"
      description="Bienvenue sur notre page promouvoir l'italien. Dans le paysage culturel et linguistique mondial, la langue italienne brille de sa propre lumière..."
      headerImage={heroImage}
      scrollTo="#promouvoir"
    />
  );
}

export default function Promouvoir() {
  return (
    <>
      <HeaderPromouvoir />
      <section className="wrapper" id="promouvoir">
        <div className="whiteBg">
          <div className="container">
            <div className="header-info">
              <h1 className="font40 extraBold">La plaquette éditée par l'APIRP</h1>
              <p className="font15">
                <br />
                L'APIRP a édité un dépliant pour la promotion de l'apprentissage de la langue italienne dans les établissements scolaires de l'Île-de-France.
              </p>
            </div>
          </div>
        </div>

        <div className="lightBg">
          <div className="container">
            <div className="advertising flexSpaceCenter">
              <div className="add-left">
                <div className="img-wrapper flexCenter">
                  <img className="radius8" src={AddImage2} alt="add" />
                </div>
              </div>
              <div className="add-right">
                <div className="img-wrapper flexCenter">
                  <img className="radius8" src={AddImage3} alt="add" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lightBg">
          <div className="container">
            <div className="advertising flexSpaceCenter">
              <div className="add-left">
                <h4 className="font15">
                  <br />
                  Télécharger le bon de commande pour pouvoir commander les dépliants :
                </h4>
              </div>
              <div className="add-right">
                <div className="buttons-row flexNullCenter" style={{ margin: "30px 0" }}>
                  <div style={{ width: "190px" }}>
                    <FullButton
                      title="Adhérent"
                      action={() =>
                        window.open(
                          'https://drive.google.com/file/d/0B34j4qalEtJsMGlEcmFFWlJmY1E/view?resourcekey=0-19mliwKeZAoPK9XBmNVPwg',
                          '_blank'
                        )
                      }
                    />
                  </div>
                  <div style={{ width: "190px", marginLeft: "15px" }}>
                    <FullButton
                      title="Non adhérent"
                      action={() =>
                        window.open(
                          'https://drive.google.com/file/d/0B34j4qalEtJsd2xZM3dxclI2UTg/view?resourcekey=0-AK-KZe_UzMKDFomtWhSyGA',
                          '_blank'
                        )
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="whiteBg">
          <div className="container">
            <div className="header-info">
              <h4 className="font15">Réponses au Quizz de la plaquette</h4>
              <div className="buttons-row flexNullCenter" style={{ margin: "30px 0" }}>
                <div style={{ width: "190px", marginLeft: "15px" }}>
                  <button
                    className="button1"
                    onClick={() =>
                      window.open(
                        'https://drive.google.com/file/d/0B34j4qalEtJsd2psVS1tN3plaFU/view?resourcekey=0-nlUxtG1Hf7kOX6BhtZuY2w',
                        '_blank'
                      )
                    }
                  >
                    Les réponses
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
