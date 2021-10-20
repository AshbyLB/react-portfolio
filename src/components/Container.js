import React, { useState } from 'react';
import Header from './components/Header';
import Project from './components/Project';
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";

function Container() {
    const [currentInfo, setCurrentInfo] = useState('About');
    const renderInfo = () => {
        if (currentInfo === 'About'){
            return <About />
        }
        if (currentInfo === 'Project'){
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