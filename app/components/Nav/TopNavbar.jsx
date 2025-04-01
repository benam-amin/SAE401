import { useEffect, useState } from "react";
import { styled } from "styled-components";

// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
import LogoIcon from "../../assets/svg/Logo";
import BurgerIcon from "../../assets/svg/BurgerIcon";

// Menus en tableau pour la lisibilité
const menuItems = [
  { label: "Accueil", path: "/" },
  { label: "Forum", path: "/forum" },
  { label: "Activités", path: "/activites" },
  { label: "Nous connaître", path: "/contact" },
  { label: "Adhérer", path: "/adherer" },
  { label: "Promouvoir", path: "/promouvoir" },
  { label: "Apprendre", path: "/apprendre" },
  { label: "Enseigner", path: "/enseigner" },
  { label: "Divers", path: "/divers" },
];

export default function TopNavbar() {
  const [y, setY] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Sidebar $sidebaropen={sidebarOpen} toggleSidebar={setSidebarOpen} />
      {sidebarOpen && <Backdrop toggleSidebar={setSidebarOpen} />}
      <WrapperNav style={{ height: y > 100 ? "60px" : "80px" }}>
        <NavInner>
          <a href="/" className="pointer flexNullCenter">
            <LogoIcon />
          </a>
          <BurgerWrapper onClick={() => setSidebarOpen(true)}>
            <BurgerIcon />
          </BurgerWrapper>
          <UlWrapper>
            {menuItems.map(({ label, path }) => (
              <li key={path}>
                <a href={path}>{label}</a>
              </li>
            ))}
          </UlWrapper>
        </NavInner>
      </WrapperNav>
    </>
  );
}

const WrapperNav = styled.nav`
  width: 100%;
  top: 0;
  left: 0;
  background: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 999;
  transition: height 0.3s ease;
`;

const NavInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 20px;
`;

const BurgerWrapper = styled.button`
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
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
