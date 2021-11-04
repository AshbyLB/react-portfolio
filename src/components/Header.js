import React from 'react';
import './Header.css';

function Header({ currentInfo, handlePageChange }) {
    return (
            <header class="row" className="header row">
                <h1 id="name" className="col p-2">Ashby Blakely</h1>
                <nav className="navbar col justify-content-end">
                    <a  id="hov"
                        href="#About"
                        onClick={() => handlePageChange('About')}
                        className={currentInfo === 'About' ? 'nav-link active' : 'nav-link'}
                    >
                        About Me
                    </a>
                    <a  id="hov"
                        href="#Project"
                        onClick={() => handlePageChange('Project')}
                        className={currentInfo === 'Project' ? 'nav-link active' : 'nav-link'}
                    >
                        Projects
                    </a>
                    <a  id="hov"
                        href="#Contact"
                        onClick={() => handlePageChange('Contact')}
                        className={currentInfo === 'Contact' ? 'nav-link active' : 'nav-link'}
                    >
                        Testimonials
                    </a>
                    <a  id="hov"
                        href="mailto: ashbyleeblakely@gmail.com"
                    >
                        Contact 
                    </a>
                    <a  id="hov"
                    href="https://docs.google.com/document/d/1wQnO93AluP_Msrb4X41c_AsCO9zwRi0dOxBaumybkQE/edit?usp=sharing" target="_blank">
                        Resume
                    </a>
                </nav>
            </header>
    );
}

export default Header;