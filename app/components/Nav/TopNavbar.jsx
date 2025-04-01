import { useEffect, useState } from "react";
import { styled } from "styled-components";

// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
import LogoIcon from "../../assets/svg/Logo";
import BurgerIcon from "../../assets/svg/BurgerIcon";

export default function TopNavbar() {
  const [y, setY] = useState(0);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // L'accès à `window` ne sera fait que côté client
      const handleScroll = () => setY(window.scrollY);
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper className="flexCenter animate whiteBg" style={y > 100 ? { height: "60px" } : { height: "80px" }}>
        <NavInner className="container flexSpaceCenter">
          <a href="/" className="pointer flexNullCenter">
            <LogoIcon />
          </a>
          <BurderWrapper className="pointer" onClick={() => toggleSidebar(!sidebarOpen)}>
            <BurgerIcon />
          </BurderWrapper>
          <UlWrapper className="flexNullCenter">
            <li>
              <a href="/">Accueil</a>
            </li>
            <li>
              <a href="/forum">Forum</a>
            </li>
            <li>
              <a href="/activites">Activités</a>
            </li>
            <li>
              <a href="/contact">Nous connaître</a>
            </li>
            <li>
              <a href="/adherer">Adhérer</a>
            </li>
            <li>
              <a href="/promouvoir">Promouvoir</a>
            </li>
            <li>
              <a href="/apprendre">Apprendre</a>
            </li>
            <li>
              <a href="/enseigner">Enseigner</a>
            </li>
            <li>
              <a href="/divers">Divers</a>
            </li>
          </UlWrapper>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  top: 0;
  left: 0;
  z-index: 999;
`;

const NavInner = styled.div`
  position: relative;
  height: 100%;
`;

const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 800px) {
    display: block;
  }
`;

const UlWrapper = styled.ul`
  display: flex;
  gap: 1rem;
  font-weight: 600;
  @media (max-width: 800px) {
    
    display: none;
  }
`;
