import React from 'react'
import Navbar from '../layout/Navbar/Navbar'
import Footer from '../layout/Footer/Footer'
import { Outlet } from 'react-router'
import useScrollToTop from '../hooks/useScrollToTop'

const MainRoot = () => {
    useScrollToTop(); // Hook'u istifadə edin

    return (
        <>
            <Navbar />
            <Outlet/>
            <Footer/>
        </>
    )
}

export default MainRoot
