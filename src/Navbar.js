import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <div>
                <Link to="/">
                    <h4>The CEN Company</h4>
                </Link>
                </div>
                <div className="NavLinks">
                    <ul className="NavBar">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/About">About</Link>
                        </li>
                        <li>
                            <Link to="/Doctors">Find your doctor</Link>
                        </li>
                        <li>
                            <Link to="/DoctorEdit">Doctors click here</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navbar;