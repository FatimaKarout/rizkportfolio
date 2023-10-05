import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import './index.css';
import Blue from "./assets/bleu.jpg";
import Developer from "./assets/developer.jpg";

function Ourservice() {
    const [serviceData, setServiceData] = useState(null);

    useEffect(() => {
        // Fetch data from the API
        fetch("http://localhost:5000/service/getservice")
            .then((response) => response.json())
            .then((data) => {
                // Assuming data structure is like {"data": [...]}
                const firstService = data.data[0]; // Get the first service item

                // Set the service data in state
                setServiceData(firstService);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

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
                {serviceData && (
                    <>
                        <p>{serviceData.paragraph1}</p>
                        <span>&#10003; {serviceData.tick1}</span>
                        <br />
                        <span>&#10003; {serviceData.tick2}</span>
                        <br />
                        <span>&#10003; {serviceData.tick3}</span>
                        <br />
                    </>
                )}
                <br />
                <button>Get Started</button>
            </div>
        </div>
    );
}

export default Ourservice;
