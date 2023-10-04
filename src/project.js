import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import Coffee from './coffee.jpg';
function Project() {
  return ( 
    
            <div className="Projects">
              <div className="our proj">
                <div className="proj">
                  <h1>Our Awesome Projects</h1>
                  <p>
                    Lorem ipsum is a placeholder text
                    <br />
                    commonly used to demonstrate the visual
                    <br />
                    form of a document or a typeface without
                    <br />
                    relying on meaningful content. Lorem
                    <br />
                    ipsum may be used as a placeholder before final copy is available
                  </p>
                </div>
                <button className="check">check</button>
              </div>
              <img
                className="coffee"
                src={Coffee}
                alt="image"
            
              />
              <div className="web">
                <p> web developer</p>
              </div>
            </div>
     
  );
      }
      
      export default Project;