import React from 'react';
import './Header.css';

function Header({ currentInfo, handlePageChange }) {
    return (
        <div>
            <header class="row" className="header row">
                <h1 className="col p-2">Ashby Blakely</h1>
                <nav className="navbar col justify-content-end">
                    <a
                        href="#About"
                        onClick={() => handlePageChange('About')}
                        className={currentInfo === 'About' ? 'nav-link active' : 'nav-link'}
                    >
                        About Me
                    </a>
                    <a
                        href="#Project"
                        onClick={() => handlePageChange('Project')}
                        className={currentInfo === 'Project' ? 'nav-link active' : 'nav-link'}
                    >
                        Projects
                    </a>
                    <a
                        href="#Contact"
                        onClick={() => handlePageChange('Contact')}
                        className={currentInfo === 'Contact' ? 'nav-link active' : 'nav-link'}
                    >
                        Contact
                    </a>
                    <a href="/">Resume</a>
                </nav>
            </header>
        </div>
    );
}

export default Header;