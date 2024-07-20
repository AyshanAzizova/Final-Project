import React from 'react'
import './AboutServices.css'
import { GiGemPendant } from "react-icons/gi";
import { GiChestnutLeaf } from "react-icons/gi";
import { GiJourney } from "react-icons/gi";




const AboutServices = () => {
  return (
    <div className='aboutServices'>
        <div className='container-about services'>
        <div>
        <GiGemPendant className='services_icons'/>
        <h4>Design</h4>
        <p>Praesent metus tellus, elementum eu, semper Vestibulum volutpat pretium libero</p>
        </div>
        <div>
        <div style={{display:"block",textAlign:"center"}}><GiChestnutLeaf className='services_icons'/>
        </div>
        <h4>Inovation</h4>
        <p>Praesent metus tellus, elementum eu, semper Vestibulum volutpat pretium libero</p>
        </div>
        <div>
        <GiJourney  className='services_icons'/>
        <h4>Journey</h4>
        <p>Praesent metus tellus, elementum eu, semper Vestibulum volutpat pretium libero</p>
        </div>
        </div>
    </div>
  )
}

export default AboutServices
