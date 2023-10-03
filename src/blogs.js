import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import Businessman from "./businessman.jpg";
import  Etnrepreneures from "./Entrepreneurs discussing work results on meeting.jpg";
import Twocollegues from "./Two collegues working in a business center.jpg";

function blogs() {
  return (  
    <div>
      <h1 className="titre1">latest blogs</h1>
      <p className="sous">
        What is a title slide? The Title Slide layout is the default layout when
        you open a blank presentation in PowerPoint.
      </p>
      <div className="blog-images">
        <div className="B1">
          <img
            className="blog-image1"
            src={Businessman}     
                   alt="images"
          />
          <div className="blog1">
            <div className="text">
              <p>men</p>
              <p>coding</p>
            </div>
            <p>The standard Lorem Ipsum</p>
          </div>
        </div>
        <div className="B2">
          <img
            className="blog-image2"
            src={Etnrepreneures}
            alt="images"
          />
          <div className="blog2">
            <p>The standard Lorem</p>
          </div>
        </div>
        <div className="B3">
          <img
            className="blog-image3"
            src={Twocollegues}
            alt="images"
          />
          <div className="blog3">
            <div className="text">
              <p>men</p>
              <p>coding</p>
            </div>
            <p>The standard Lorem</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default blogs;


