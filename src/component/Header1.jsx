import { useState } from 'react';
import './header.css'; // Import your CSS files
import './button1.css';
import Footer1 from './Footer1';
import logo from './logoCrazy.jpg';
const Header1 = () => {
    const [navVisible, setNavVisible] = useState(false);
    const toggleNav = () => {
        setNavVisible(!navVisible);
    };
    return (
        <header className="boxy">
            <div className="div1">

                <img className="imgz" src={logo} alt="Logo" />
                <nav id="nav" className={`nav1 ${navVisible ? 'show-nav' : ''}`}>
                    <a href="{Footer1}">Home</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Contact me</a>
                    <a href="#">MyBlogs</a>
                    <a href="#">My Skills</a>
                </nav>
            </div>
            <div id="polygon-image" className="heads">
                <div className="flex-item">
                    <h2>Welcome to My Portfolio</h2>
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