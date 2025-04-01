import { styled } from "styled-components";

// Assets
import CloseIcon from "../../assets/svg/CloseIcon";
import LogoIcon from "../../assets/svg/Logo";

//on met les menus dans des tableau pour améliorer la lisibilité 
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

export default function Sidebar({ sidebaropen, toggleSidebar }) {
  return (
    <Wrapper sidebaropen={sidebaropen}>
      <SidebarHeader>
        <LogoIcon />
        <CloseBtn onClick={() => toggleSidebar(!sidebaropen)}>
          <CloseIcon />
        </CloseBtn>
      </SidebarHeader>

      <UlStyle>
        {menuItems.map(({ label, path }) => (
          <li key={path}>
            <a href={path} onClick={() => toggleSidebar(!sidebaropen)}>
              {label}
            </a>
          </li>
        ))}
      </UlStyle>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  width: 400px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 30px;
  background: #fff;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  display: ${(props) => (props.sidebaropen ? "block" : "none")};
  z-index: 1000;
  
  @media (max-width: 400px) {
    width: 100%;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

const CloseBtn = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 10px;
`;

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
    }
  }
`;
