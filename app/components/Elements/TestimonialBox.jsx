import React from 'react';
// import '../../style/css/TestimonialBox.css';
import '../../style/css/ProjectBox.css';
import QuoteIcon from "../../assets/svg/Quotes";

export default function TestimonialBox({ text, author }) {
  return (
    <div className="wrapper dark-bg radius-8 flex-null-center flex-column">
      <div className="quote-wrapper">
        <QuoteIcon />
      </div>
      <p className="white-color font-13" style={{ paddingBottom: "30px" }}>
        {text}
      </p>
      <p className="orange-color font-13" style={{ alignSelf: 'flex-end' }}>
        <em>{author}</em>
      </p>
    </div>
  );
}
