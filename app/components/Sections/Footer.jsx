import {styled} from 'styled-components';
// Assets
import LogoImg from "../assets/svg/Logo";
import '../style/css/footer.css';
import '../style/css/main.css';

export default function Footer() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  return (
    <footer className="footer">
      <div className="darkBg">
        <div className="container">
          <d className="flexSpaceCenter innerWrapper" style={{ padding: "30px 0" }}>
            <a className="flexCenter animate pointer" to="home" smooth={true} offset={-80}>
              <LogoImg />
              <h1 className="font15 extraBold " style={{ marginLeft: "15px" }}>
              APIRP
              </h1>
            </a>
            <div className=" font13 styleP">
              © {getCurrentYear()} - <span className="darkRedColor font13">Rosalie & Ornella et d'autres gens maintenant</span> - No Right Reserved
            </div>

            <a className=" animate pointer font13" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              Back to top
            </a>
          </d>
        </div>
      </div>
    </footer>
  );
}
