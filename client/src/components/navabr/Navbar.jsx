import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand brand"><span className='logo'>MERN Stack</span>Blog</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto ms-lg-auto">
                                <li className="me-5 ms-5 mt-2 nav-item">
                                    <Link to="/" className="">Home</Link>
                                </li>
                                <li className="me-5 ms-5 mt-2 nav-item">
                                    <Link to="/about" className="" >About</Link>
                                </li>
                                <li className="me-5 ms-5 mt-2 nav-item">
                                    <Link to="/projects" className="">Projects</Link>
                                </li>
                            </ul>
                        <div className="me-2">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        </div>
                    </div>
                        <div className="text-end">
                        <button className="signInBtn" type="button">
                        <Link to="/signup">Sign In</Link>
                        </button>
                        </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar