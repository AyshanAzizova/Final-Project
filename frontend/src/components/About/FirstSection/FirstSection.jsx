import React from 'react'
import './FirstSection.css'
import { FaChevronRight } from "react-icons/fa6";


const FirstSection = () => {
  return (
    <div className='firstsec'>
        <div className='content'>
            <h2>About Us</h2>
            <p>
            <a>Home </a>
            <FaChevronRight />
            About Us
            </p>
        </div>
    </div>
  )
}

export default FirstSection
