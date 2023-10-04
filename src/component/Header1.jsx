import { useState } from 'react';
import './header.css'; // Import your CSS files
import './button1.css';
import Footer1 from './Footer1';
import logo from './logoCrazy.jpg';
import Skills from './Experience.jsx';

const Header1 = () => {
    const [navVisible, setNavVisible] = useState(false);
    const toggleNav = () => {
        setNavVisible(!navVisible);
    };
    return (
        <header className="boxy">
            <div className="div1">

                <img className="imgz" src={logo} alt="Logo" />

                <nav id="nav" className={`nav ${navVisible ? 'show-nav' : ''}`}>
                    <a href="/ ">Home</a>
                    <a href="#">Services</a>
                    <a href="#">Why Choose us</a>
                    <a href="/Skills">Skills</a>
                    <a href="#">Contact us</a>
                    <a href="#">My Blogs</a>
                </nav>
            </div>
            <div id="polygon-image" className="heads">
                <div className="flex-item">
                    <h1>Welcome to </h1>
                </div>
                <div className="flex-item">
                    <h1>CRAZY WEB UI</h1>
                </div>
                <div className="flex-item">
                    <button className="button1">Let's be together</button>
                </div>
            </div>
        </header>
    )
}
export default Header1;