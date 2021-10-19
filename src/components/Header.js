import React from 'react';

const styles = {
    headerStyle: {
        background: 'red',

    },
    headingStyle: {
        fontSize: '75',
    },
    navStyle: {
        color: 'black',
        padding: '20px',
    },
    wordStyle: {
        padding: '10px',
    }
};


function Header() {
    return (
        <div>
            <div class="d-flex align-items-center">
                <header class="d-flex" style={styles.headerStyle} className="header">
                    <h1 style={styles.headingStyle}>Ashby Blakely</h1>
                    <div class="d-flex justify-content-end">
                        <nav style={styles.navStyle} className="navbar">
                            <a style={styles.wordStyle} href="/">About Me</a>
                            <a style={styles.wordStyle} href="/">Projects</a>
                            <a style={styles.wordStyle} href="/">Contact</a>
                            <a style={styles.wordStyle} href="/">Resume</a>
                        </nav>
                    </div>
                </header>
            </div>
        </div>
    );
}

export default Header;