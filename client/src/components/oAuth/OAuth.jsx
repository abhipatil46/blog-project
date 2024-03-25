import React, { useEffect } from 'react'
import axios from 'axios'
import './OAuth.css'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { app } from '../../Firebase'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signInStart, signInSuccess, signInFailuer } from '../../redux/user/userSlice'

function OAuth() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const auth = getAuth(app)
    const handleGoogleClick = async (e) => {
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({ prompt: 'select_account' });
        try {
            const resultFromGoolge = await signInWithPopup(auth, provider);
            if(resultFromGoolge){
                axios
                    .post('http://localhost:7272/api/auth/google', {
                        username: resultFromGoolge.user.displayName,
                        email: resultFromGoolge.user.email,
                        googlePhotoUrl: resultFromGoolge.user.photoURL
                    })
                    .then((response) => {
                        if (response.status === 200) {
                            dispatch(signInSuccess(response.data))
                            navigate('/')
                        }
                    }).catch(err => {
                        dispatch(signInFailuer(err.response.data.message))
                    });
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <div className='continueBtn-border-wrap'>
                <button onClick={handleGoogleClick} type="button" className="continueBtn w-100">Continue With Google</button>
            </div>
        </div>
    )
}

export default OAuth