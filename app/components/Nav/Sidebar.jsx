import { styled } from "styled-components";
import { NavLink } from "@remix-run/react";
import { useEffect } from "react";

// Icônes et assets
import CloseIcon from "../../assets/svg/CloseIcon";
import LogoIcon from "../../assets/svg/Logo";

// Liste des liens de navigation dans un tableau pour simplifier la gestion
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

// Composant principal de la sidebar
export default function Sidebar({ sidebaropen, toggleSidebar }) {
  // Log de l'état d'ouverture de la sidebar (utile en dev)
  // useEffect(() => {
  //   console.log("Sidebar ouverte ?", sidebaropen);
  // }, [sidebaropen]);

  return (
    <SidebarWrapper sidebaropen={sidebaropen}>
      {/* En-tête avec logo et bouton de fermeture */}
      <SidebarHeader>
        <LogoIcon />
        <CloseBtn
          onClick={() => toggleSidebar(false)} // Ferme la sidebar quand on clique sur le bouton
          aria-label="Fermer le menu"
        >
          <CloseIcon />
        </CloseBtn>
      </SidebarHeader>

      {/* Liste des liens */}
      <UlStyle>
        {menuItems.map(({ label, path }) => (
          <li key={path}>
            <NavLink
              to={path}
              onClick={() => toggleSidebar(false)}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              // Ici tu pourrais ajouter onClick={() => toggleSidebar(false)} pour fermer la sidebar au clic sur un lien
            >
              {label}
            </NavLink>
          </li>
        ))}
      </UlStyle>
    </SidebarWrapper>
  );
}

// ---------- Styles ----------

// Conteneur principal de la sidebar
const SidebarWrapper = styled.nav`
  width: 400px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 30px;
  background: #fff;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  /* Animation de glissement et de fondu */
  transform: ${(props) =>
    props.sidebaropen ? "translateX(0)" : "translateX(-100%)"};
  opacity: ${(props) => (props.sidebaropen ? "1" : "0")};
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

  /* En plein écran sur les très petits appareils */
  @media (max-width: 400px) {
    width: 100%;
  }
`;

// En-tête avec le logo à gauche et le bouton fermer à droite
const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

// Bouton pour fermer la sidebar
const CloseBtn = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 10px;
`;

// Liste des liens de la navigation
const UlStyle = styled.ul`
  padding: 40px;

  li {
    margin: 20px 0;

    a {
      text-decoration: none;
      color: #333;
      font-weight: 600;
      padding: 10px 15px;
      display: block;
      transition: background-color 0.2s ease;

      &:hover {
        background-color: #f1f1f1;
      }
    }
  }
`;
