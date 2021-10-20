import React from 'react';

const styles = {
    headerStyle: {
        background: 'red',

    },
    headingStyle: {
        fontSize: '75',
        height: '100px'
    },
    navStyle: {
        color: 'black',

    },
    wordStyle: {
        padding: '10px',
    }
};


function Header({ currentInfo, handlePageChange }) {
    return (
        <div>
            <header class="row" style={styles.headerStyle} className="header row">
                <h1 className="col" style={styles.headingStyle}>Ashby Blakely</h1>
                <nav style={styles.navStyle} className="navbar col justify-content-end">
                    <a
                        style={styles.wordStyle} href="#About"
                        onClick={() => handlePageChange('About')}
                        className={currentInfo === 'Home' ? 'nav-link active' : 'nav-link'}
                    >
                        About Me
                    </a>
                    <a
                        style={styles.wordStyle} href="#Project"
                        onClick={() => handlePageChange('Project')}
                        className={currentInfo === 'Project' ? 'nav-link active' : 'nav-link'}
                    >
                        Projects
                    </a>
                    <a
                        style={styles.wordStyle} href="#Contact"
                        onClick={() => handlePageChange('Contact')}
                        className={currentInfo === 'Contact' ? 'nav-link active' : 'nav-link'}
                    >
                        Contact
                    </a>
                    <a style={styles.wordStyle} href="/">Resume</a>
                </nav>
            </header>
        </div>
    );
}

export default Header;