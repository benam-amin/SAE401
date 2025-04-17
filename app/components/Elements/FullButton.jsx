import React from 'react';
import '../../style/css/fullButton.css';

export default function FullButton({ title, action, border, link }) {
  return (
    <a href={link}>
      <button
        className={`full-button ${border ? 'border' : ''}`}
        onClick={action ? () => action() : null}
      >
        {title}
      </button>
    </a>
  );
}
