import React from 'react'
import './FirstSection.css'
import { FaChevronRight } from "react-icons/fa6";


const FirstSection = () => {
  return (
    <div className='firstsect'>
        <div className='content'>
            <h2>Contact Us</h2>
            <p>
            <a>Home </a>
            <FaChevronRight />
            Contact Us
            </p>
        </div>
    </div>
  )
}

export default FirstSection
