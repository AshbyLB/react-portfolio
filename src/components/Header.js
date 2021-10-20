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


function Header() {
    return (
        <div>
            <header class="row" style={styles.headerStyle} className="header row">
                <h1 className="col" style={styles.headingStyle}>Ashby Blakely</h1>
                    <nav style={styles.navStyle} className="navbar col justify-content-end">
                        <a style={styles.wordStyle} href="#About">About Me</a>
                        <a style={styles.wordStyle} href="/">Projects</a>
                        <a style={styles.wordStyle} href="/">Contact</a>
                        <a style={styles.wordStyle} href="/">Resume</a>
                    </nav>
            </header>
        </div>
    );
}

export default Header;