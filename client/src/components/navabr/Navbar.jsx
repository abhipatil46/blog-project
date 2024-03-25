import React, { useEffect } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

function Navbar() {

    const dispatch = useDispatch();
    const { currentUser } = useSelector(state => state.user);
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
                        {
                            (currentUser != null) ? (
                                <div className="dropstart">
                                    <div className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img className='profilePicture' src={currentUser.profilePicture} alt="" />
                                    </div>
                                    <div className="dropdown-menu mt-5 dropdown-menu-dark">
                                        <span>
                                            <Link className="dropdown-item disabled" >@{currentUser.username}</Link></span>
                                        <span>
                                            <Link className="dropdown-item disabled" >{currentUser.email}</Link></span>
                                            <hr />
                                        <span>
                                            <Link className="dropdown-item item-profile" to={'/dashboard?tab=profile'}>Profile</Link>
                                        </span>
                                        <hr />
                                        <span>
                                            <Link className="dropdown-item" to={'/signin'}>
                                                Sign Out
                                            </Link></span>

                                    </div>
                                </div>
                            ) : (
                                <button className="signInBtn" type="button">
                                    <Link to="/signup">Sign In</Link>
                                </button>
                            )
                        }
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar