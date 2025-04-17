import React from 'react';
import '../../style/css/ProjectBox.css';

export default function ProjectBox({ img, title, text, action }) {
  return (
    <div className="wrapper">
      <button className="img-btn animate pointer" onClick={action ? () => action() : null}>
        <img className="radius-8" src={img} alt="project" />
      </button>
      <h3 className="font-20 extra-bold">{title}</h3>
      <p className="font-13">{text}</p>
    </div>
  );
}
