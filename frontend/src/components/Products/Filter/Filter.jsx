import React, { useState } from 'react'
import './Filter.css'
import { CiFilter } from "react-icons/ci";


const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='container_products filter'>
      <button onClick={toggleDropdown}><CiFilter className='filterIcon'/>Filter</button>
      <div className={`dropdown_section ${isOpen ? 'open' : 'closed'}`}>
      <p>Dropdown content goes here</p>

      </div>
      </div>
  )
}

export default Filter
