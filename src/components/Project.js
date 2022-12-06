import React, {useState} from "react";
import Navbar from './Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

export default function Project() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if  (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        } 
         return <Resume />;
        };

        const handlePageChange = (page) => setCurrentPage(page);

        return (
            <div>
                <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
                {renderPage()}
            </div>
        );
    }
