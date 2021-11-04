import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div class="d-flex justify-content-center">
            <footer className="header">
                <a href="https://www.linkedin.com/in/ashbyleeblakely/" >
                <i class="fab fa-linkedin fa-4x"></i>
                </a>
                <a href="mailto: ashbyleeblakely@gmail.com">
                <i class="fas fa-at fa-4x"></i>
                </a>
                <a href="https://github.com/AshbyLB" >
                <i class="fab fa-github-square fa-4x"></i>
                </a>
            </footer>
        </div>
    );
}

export default Footer;