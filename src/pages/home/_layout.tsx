import React from 'react'
import AuthProvider, { authContext } from '../../functions/AuthProvider'
import {Outlet} from 'react-router';

export default function HomeLayout() {
  return (
    <AuthProvider>
        <Outlet/>
    </AuthProvider>
  )
}
