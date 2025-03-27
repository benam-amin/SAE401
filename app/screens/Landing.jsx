// Header&Footer
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TopNavbar from "../components/Nav/TopNavbar";
import Footer from "../components/Sections/Footer"; 
//Pages
import Accueil from "../routes/Accueil";
import Adherer from "../components/Adherer";
import Apprendre from "../components/Apprendre";
import Divers from "../routes/Divers";
import {HeaderEnseigner, Enseigner} from "../routes/enseigner";
import { HeaderActivités, Activités } from "../routes/activites";
import { Assoc, Bulletin, Contact, Elu } from "../routes/contact";
import { HeaderPromouvoir, Promouvoir } from "../components/Sections/Promouvoir";
import { HeaderForum, Forum } from "../routes/forum";



export default function Landing() {
  return (
    <>
      <TopNavbar />
      <BrowserRouter>
        <Routes>
        <Route path="/accueil" element={<Accueil />} />
          <Route path="/" element={<Accueil />} /> 
          <Route path="Forum" element={<><HeaderForum /><Forum /></>} />
          <Route path="Activités" element={<><HeaderActivités /><Activités /></>} />
          <Route path="Contact" element={<><HeaderContact /><Contact /><Assoc /><Elu /><Bulletin /></>}/>
          <Route path="/adherer" element={<Adherer />} />
          <Route path="Promouvoir" element={<><HeaderPromouvoir /><Promouvoir /></>} />
          <Route path="/apprendre" element={<Apprendre />} />
          <Route path="/enseigner" element={<><HeaderEnseigner /> <Enseigner /></>} />
          <Route path="/divers" element={<Divers />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}


