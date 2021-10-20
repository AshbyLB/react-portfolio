import React, { useState } from 'react';
import Header from './Header';
import Project from './Project';
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";

function Container() {
    const [currentInfo, setCurrentInfo] = useState('About');
    const renderInfo = () => {
        if (currentInfo === 'About') {
            return <About />
        }
        if (currentInfo === 'Project') {
            return <Project />
        }
        return <Contact />
    };

    const handlePageChange = (page) => setCurrentInfo(page);
    return (
        <div>
            <Header currentInfo={currentInfo} handlePageChange={handlePageChange} />
            {renderInfo()}
            <Footer />
        </div>
    );
}

export default Container;