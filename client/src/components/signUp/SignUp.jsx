import React from 'react'
import './SignUp.css'
import Navbar from '../navabr/Navbar'
import { Link } from 'react-router-dom'

function SignUp() {
    return (
        <>
            <Navbar></Navbar>
            <div className='container-fluid row mt-lg-5'>
                <div className="col-2"></div>
                <div className='d-flex align-items-center justify-content-center col-4'>
                    <div>
                        <h3><span className='logo'>MERN Stack </span> Blog</h3>
                        <p>To access the blogs you can signup with email and password or with Google</p>
                    </div>
                </div>
                <div className='col-4'>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="Username" className="form-label">Your User Name</label>
                            <input type="text" placeholder='Username' className="form-control" id='username' />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Your  Email address</label>
                            <input type="email" placeholder='user@example.com' className="form-control" id="email" aria-describedby="emailHelp" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Your Password</label>
                            <input type="password" placeholder='password' className="form-control" id="password" required />
                        </div>
                    </form>
                    <button type="button" className="signUpBtn w-100 mb-2">Sign Up</button>
                    <div className='continueBtn-border-wrap'>
                        <button type="submit" className="continueBtn w-100">Continue With Google</button>
                    </div>
                    <div className='mt-2'>
                        <span>Have an account? </span>
                        <Link to='/signin'>Sign In</Link>
                    </div>
                </div>
                <div className="col"></div>
            </div>
        </>
    )
}

export default SignUp