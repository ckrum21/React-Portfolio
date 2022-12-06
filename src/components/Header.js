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
          <nav className="navbar">
            <div className="navbar-brand">
                <span className="content is-large">Chelsea Krum</span>
            </div>
          </nav>
          {/* Pass the state value and the setter as props to NavTabs */}
          <Navbar
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          {/* Call the renderPage function passing in the currentPage */}
          <main>
            <div>{renderPage(currentPage)}</div>
          </main>
        </div>
      );
    }

    export default Header;