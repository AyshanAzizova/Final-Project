import React from 'react'
import Navbar from '../layout/Navbar/Navbar'
import Footer from '../layout/Footer/Footer'
import { Outlet } from 'react-router'

const MainRoot = () => {
    return (
        <>
            <Navbar />
            <Outlet/>
            <Footer/>
        </>
    )
}

export default MainRoot
