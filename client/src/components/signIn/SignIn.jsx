import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from "axios";
import './SignIn.css'
import {useDispatch, useSelector} from 'react-redux'
import {signInStart, signInSuccess, signInFailuer} from '../../redux/user/userSlice'
import { UseSelector } from 'react-redux';

function SignIn() {

  const [formData,setFormData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {loading,error: errorMessage} = useSelector(state=> state.user)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailuer('Please fillout all the details'));

    }
    try {
      dispatch(signInStart());
      axios
        .post('http://localhost:7272/api/auth/signin', formData)
        .then((response) => {
          if (response.status === 200) {
            dispatch(signInSuccess(response.data))
            navigate('/')
          }
        }).catch(err => {
          dispatch(signInFailuer(err.response.data.message))
        });
    } catch (error) {
      dispatch(signInFailuer(error.message))
    }
  }
  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  }

  return (
    <div>
      <div className='container-fluid row main'>
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
              <label htmlFor="email" className="form-label">Your  Email address</label>
              <input type="email" placeholder='user@example.com' className="form-control" id="email" aria-describedby="emailHelp" required onChange={onChangeHandler} />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Your Password</label>
              <input type="password" placeholder='********' className="form-control" id="password" required onChange={onChangeHandler} />
            </div>
            <button disabled={loading} type="submit" className="signInBtn w-100 mb-2">
              {
                loading ? (
                  <div>
                    <span className="spinner-border spinner-border-sm" aria-hidden="true"> </span>
                    <span role="status">Loading...</span>
                  </div>
                ) : (
                  'Sign In'
                )
              }
            </button>
          </form>
          <div className='mt-2'>
            <span>Dont have an account? </span>
            <Link to='/signup'>Sign Up</Link>
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
    </div>
  )
}

export default SignIn