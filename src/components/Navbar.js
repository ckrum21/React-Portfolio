import React from 'react';

function Navbar({ currentPage, setCurrentPage }) {
    return (
      <ul className="nav nav-tabs justify-content-center">
        <li className="nav-item">
          <a 
          href="#about"
          onClick={() => setCurrentPage('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </a>
        </li>
        
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => setCurrentPage('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>

        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => setCurrentPage('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </a>
        </li>
        
        <li className="nav-link">
          <a  
            href="#resume"
            onClick={() => setCurrentPage('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
        </li>
      </ul>
    );
}

export default Navbar;