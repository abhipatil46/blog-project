import React from 'react'
import './SignUp.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from "axios";
import OAuth from '../oAuth/OAuth';

function SignUp() {

    const [formData, setFormDate] = useState({});
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setloading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.username || !formData.email || !formData.password) {
            setErrorMessage('Please fillout all the details');
            return
        }
        try {
            setErrorMessage(null);
            axios
                .post('http://localhost:7272/api/auth/signup', formData)
                .then((response) => {
                    console.log(response);
                    setloading(false);
                    if (response.status === 200) {
                        navigate('/signin')
                    }
                }).catch(err => {
                    setErrorMessage(err.response.data.message)
                });
        } catch (error) {
            setloading(false);
            setErrorMessage(error.message);
        }
    }

    const onChangeHandler = (e) => {
        setFormDate({ ...formData, [e.target.id]: e.target.value.trim() });
    }

    return (
        <>
            <div className='container-fluid row mt-lg-5'>
                <div className="col-2"></div>
                <div className='d-flex align-items-center justify-content-center col-4'>
                    <div>
                        <h3><span className='logo'>MERN Stack </span> Blog</h3>
                        <p>To access the blogs you can signup with email and password or with Google</p>
                    </div>
                </div>
                <div className='col-4'>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="Username" className="form-label">Your User Name</label>
                            <input type="text" placeholder='Username' className="form-control" id='username' onChange={onChangeHandler} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Your  Email address</label>
                            <input type="email" placeholder='user@example.com' className="form-control" id="email" aria-describedby="emailHelp" required onChange={onChangeHandler} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Your Password</label>
                            <input type="password" placeholder='password' className="form-control" id="password" required onChange={onChangeHandler} />
                        </div>
                        <button disabled={loading} type="submit" className="signUpBtn w-100 mb-2">
                            {
                                loading ? (
                                    <div>
                                        <span className="spinner-border spinner-border-sm" aria-hidden="true"> </span>
                                        <span role="status">Loading...</span>
                                    </div>
                                ) : (
                                    'Sign Up'
                                )
                            }
                        </button>
                    </form>
                    <OAuth/>
                    <div className='mt-2'>
                        <span>Have an account? </span>
                        <Link to='/signin'>Sign In</Link>
                    </div>
                    {
                        errorMessage && (
                            <div className="alert alert-danger" role="alert">
                                <strong>{errorMessage}</strong>
                            </div>
                        )
                    }
                </div>
                <div className="col"></div>
            </div >
        </>
    )
}

export default SignUp