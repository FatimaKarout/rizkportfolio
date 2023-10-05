import { React, useState, useEffect } from 'react';
import './header.css'; // Import your CSS files
import './button1.css';
import logo from './logoCrazy.jpg';
// import Skills from './Experience';
const Header2 = () => {
    const [data, setData] = useState([]);

    const [navVisible, setNavVisible] = useState(false);
    const toggleNav = () => {
        setNavVisible(!navVisible);
    };
    const data1 = [];
    const fetchData = async () => {
        try {
            const Response = await fetch('http://localhost:5000/Hero/hero', {
                method: 'GET',
                headers: {
                    'Access-Control-Allow-Origin': "*",
                    'Content-Type': 'application/json'
                },
            });
            if (Response.ok) {
                const data = await Response.json();
                setData(data.data);
                console.log('Fetched data:', data);
            } else {
                console.error('Failed to fetch data from the API.');
            }
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <header className="boxy">
            <div className="div1">
                <img className="imgz" src={logo} alt="Logo" />
                <nav id="nav" className={`nav ${navVisible ? 'show-nav' : ''}`}>
                    <a href="/ ">Home</a>
                    <a href="#">Services</a>
                    <a href="#">Why us</a>
                    {/* <a href="/Skills">Skills</a> */}
                    <a href="#">Contact us</a>
                    <a href="#">My Blogs</a>
                </nav>
            </div>
            {data.length > 0 ? (
                data.map((data) => (
                    <div id="polygon-image" key={data._id}
                        className="heads">
                        <div className="flex-item">
                            <h1>{data.t_Welcome}</h1><br />
                        </div>
                        <div className="flex-item">
                            <h1>{data.t_Company}</h1>
                        </div>
                        <div className="flex-item">
                            <button className="button1">{data.t_button}</button>
                        </div>
                    </div>
                ))) : (
                <p>No data available</p>
            )}
        </header>
    );
};

export default Header2;
