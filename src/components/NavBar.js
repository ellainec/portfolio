import React from 'react';

const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-md navbar-light">
            <a className="navbar-brand text-dark" href="#"><h2 id="nameText">Ellaine Chan</h2></a>
            <button className="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <div className="navbar-nav">
                    <a className="nav-link nav-item text-secondary" href="#">Experience</a>
                    <a className="nav-link nav-item text-secondary" href="#">Projects</a>
                    <a className="nav-link nav-item float-right text-secondary" href="#">Education</a>
                    <a className="nav-link nav-item float-right text-secondary" href="#">Contact</a>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;