import React, {useState} from "react";
import Navbar from './Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

function Header() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        switch (currentPage) {
            case "About":
              return <About />;
            case "Portfolio":
              return <Portfolio />;
            case "Contact":
              return <Contact />;
            case "Resume":
              return <Resume />;
      
            default:
              return <About />;
     }
    };
    return (
        <div>
          <nav className="navbar justify-content-center ">
            <div className="navbar-brand ">
                <h1 className="content ">Chelsea Krum</h1>
            </div>
          </nav>
          
          <Navbar
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          
          <main>
            <div>{renderPage(currentPage)}</div>
          </main>
        </div>
      );
    }

    export default Header;