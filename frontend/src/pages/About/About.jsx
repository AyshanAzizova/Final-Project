import React from 'react'
import FirstSection from '../../components/About/FirstSection/FirstSection'
import Aboutİntroduce from '../../components/About/AboutIntroduce/Aboutİntroduce'
import AboutServices from '../../components/About/AboutServices/AboutServices'
import AboutInstructors from '../../components/About/AboutInstructors/AboutInstructors'
import AboutBanner from '../../components/About/AboutBanner/AboutBanner'

const About = () => {
  return (
    <>
     <FirstSection/> 
     <Aboutİntroduce/>
     <AboutServices/>
     <AboutBanner/>
     <AboutInstructors/>
    </>
  )
}

export default About
