import { useEffect, useState, useCallback } from "react";
import { styled } from "styled-components";
import { NavLink } from "@remix-run/react";

// Composants personnalisés
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";

// Icônes SVG
import LogoIcon from "../../assets/svg/Logo";
import BurgerIcon from "../../assets/svg/BurgerIcon";

// Définition des éléments de menu pour la navigation
const menuItems = [
  { label: "Accueil", path: "/" },
  { label: "Forum", path: "/forum" },
  { label: "Activités", path: "/activites" },
  { label: "Nous contacter", path: "/contact" },
  { label: "Adhérer", path: "/adherer" },
  { label: "Promouvoir", path: "/promouvoir" },
  { label: "Apprendre", path: "/apprendre" },
  { label: "Enseigner", path: "/enseigner" },
  { label: "Divers", path: "/divers" },
];

export default function TopNavbar() {
  const [y, setY] = useState(0); // Position verticale de scroll
  const [sidebarOpen, setSidebarOpen] = useState(false); // Etat d'ouverture de la sidebar
  const [hydrated, setHydrated] = useState(false); // Permet d'attendre le montage côté client

  // Hydratation (pour éviter les erreurs entre SSR et client)
  useEffect(() => {
    setHydrated(true);
    // console.log("Hydraté !");
  }, []);

  // Fonction pour récupérer la position verticale lors du scroll
  const handleScroll = useCallback(() => {
    setY(window.scrollY);
  }, []);

  // Attache/détache l'écouteur de scroll une fois hydraté
  useEffect(() => {
    if (!hydrated) return;
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hydrated, handleScroll]);

  // Détecte l'ouverture ou la fermeture de la sidebar
  // useEffect(() => {
  //   if (sidebarOpen) {
  //     console.log("La sidebar est ouverte !");
  //   } else {
  //     console.log("La sidebar est fermée !");
  //   }
  // }, [sidebarOpen]);

  // Tant que ce n'est pas hydraté, ne rien afficher (évite les bugs Remix côté serveur)
  if (!hydrated) return null;

  return (
    <>
      {/* Sidebar latérale */}
      <Sidebar sidebaropen={sidebarOpen} toggleSidebar={setSidebarOpen} />

      {/* Fond flouté noir quand sidebar ouverte */}
      {sidebarOpen && <Backdrop toggleSidebar={setSidebarOpen} />}

      {/* Barre de navigation principale */}
      <WrapperNav style={{ height: y > 100 ? "60px" : "80px" }}>
        <NavInner>
          {/* Logo cliquable qui renvoie à l'accueil */}
          <a href="/" className="pointer flexNullCenter">
            <LogoIcon />
          </a>

          {/* Bouton burger pour ouvrir la sidebar sur mobile */}
          <BurgerWrapper
            onClick={() => setSidebarOpen(true)}
            aria-label="Ouvrir le menu"
            aria-expanded={sidebarOpen ? "true" : "false"}
          >
            <BurgerIcon />
          </BurgerWrapper>

          {/* Menu horizontal classique sur desktop */}
          <UlWrapper>
            {menuItems.map(({ label, path }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </UlWrapper>
        </NavInner>
      </WrapperNav>
    </>
  );
}

// Style de la barre de navigation principale
const WrapperNav = styled.nav`
  width: 100%;
  top: 0;
  left: 0;
  background: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 999;
  transition: height 0.3s ease;
  display: flex;
  justify-content: space-around;

  @media (max-width: 800px) {
    display: block; /* Passage en mode "mobile" */
  }
`;

// Conteneur intérieur du menu
const NavInner = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 10rem;
  align-items: center;
  height: 100%;
  padding: 0 20px;
`;

// Bouton pour afficher la sidebar sur mobile
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

// Liste des liens du menu
const UlWrapper = styled.ul`
  display: flex;
  gap: 1rem;
  font-weight: 600;

  @media (max-width: 960px) {
    font-size: 0.75rem;
  }

  @media (max-width: 800px) {
    display: none; /* On cache la navigation horizontale sur mobile */
  }
`;
