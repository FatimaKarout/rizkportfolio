import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import Blue from "./bleu.jpg";
import Developer from "./developer.jpg";
function Ourservice() {
  return (
    <div id="content">
      <div id="element">
        <img id="blue-image" src={Blue} alt="img" />
        <div id="photo">
          <img id="developer-image" src={Developer} alt="img" />
        </div>
      </div>
      <div id="our-service">
        <h3 id="title12">Our Service</h3>
        <div id="title">
          <h1>We Provide the Best Services</h1>
        </div>
        <p>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at
          its layout.
        </p>
        <span>&#10003; It is a long established fact that.</span>
        <br />
        <span>&#10003; It is a long established fact that.</span>
        <br />
        <span>&#10003; It is a long established fact that.</span>
        <br />
        <br />
        <button>Get Started</button>
      </div>
    </div>
  );
}
export default Ourservice;