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
      <ul>
      <h3>Category</h3>
      <li>Boho</li>
      <li>Classic</li>
      <li>reading</li>
    </ul>
      <ul>
      <h3>Size</h3>
      <li>S</li>
      <li>M</li>
      <li>L</li>
    </ul>
    <ul>
    <h3>Color</h3>
    <li></li>
    <li>M</li>
    <li>L</li>
  </ul>

      </div>
      </div>
  )
}

export default Filter
