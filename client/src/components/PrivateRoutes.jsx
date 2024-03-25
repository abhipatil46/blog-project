import React from 'react'
import { UseSelector, useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router'

function PrivateRoutes() {

    const {currentUser} = useSelector(state=>state.user)
    return currentUser? <Outlet/>: <Navigate to={'/signin'}></Navigate>
}

export default PrivateRoutes