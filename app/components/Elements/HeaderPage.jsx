import React from 'react';
import FullButton from "./FullButton";
import '../../style/css/headerPage.css';

export default function HeaderPage({ h1, h1Green, description, headerImage, scrollTo }) { 
  return (
    <section className="header-wrapper container flex-space-center">
      <div className="left-side flex-center">
        <div>
          <h1 className="extra-bold font60">
            <span className="darkColor">{h1Green}</span> {h1}
          </h1>
          <div className="header-p font15">
            <p>{description}</p>
          </div>
          <div className="btn-wrapper">
            <FullButton title="Voir Plus" link={scrollTo} />
          </div>
        </div>
      </div>
      <div className="right-side">
        <div className="image-wrapper">
          <img className="radius8" src={headerImage} alt="office" style={{ zIndex: 9 }} />
        </div>
      </div>
    </section>
  );
}
