import React, { useEffect, useState } from 'react'; // Importing React, useEffect, and useState hooks from 'react' library
import { Link, useLocation } from 'react-router-dom'; // Importing Link and useLocation hooks from 'react-router-dom' library
import '../styles/Navbar.css'; // Importing CSS styles for the Navbar component
import ReorderIcon from '@material-ui/icons/Reorder'; // Importing ReorderIcon component from '@material-ui/icons'

function Navbar() {
    // Declaring state variable expandNavbar
    const [expandNav, setExpandNav] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setExpandNav(false)
    }, [location])

  return (
    // Navbar container with id based on expandNavbar state
    <div className="nav" id={expandNav ? "open" : "close"}>
        <div className="toggleButton"> 
            <button 
                // expand the navigation menu
                onClick={() => {
                    setExpandNav((prev) => !prev);
                    }}>
                <ReorderIcon />
            </button>
        </div>
        {/* The navs */}
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/experience">Experience</Link>
        </div>
    </div>
  )
}

export default Navbar