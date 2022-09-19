import React from 'react'; // ES6 js
import {Link} from 'react-router-dom';

function Nav() {
    return(
        <header>
        <div class="menubar">
        <Link to='/'><img class="brand" src="../img/Logo.png" alt="Virginia Tech Logo" /></Link>
            
            <Link to='/' className="nav-item nav-link">Home</Link>
            <Link to='/degrees-minors' className="nav-item nav-link">Degrees/Minors</Link>
            <Link to = '/courses'  className="nav-item nav-link">ECE Courses</Link>
            <Link to = '/plan-my-degree'  className="nav-item nav-link">Plan My Degree</Link>
            <Link to = '/Contacts'  className="nav-item nav-link">Contacts</Link>
            <Link to = '/FAQ'  className="nav-item nav-link">FAQ</Link>
            
        </div>
        </header>
        );
    }
    
    export default Nav;