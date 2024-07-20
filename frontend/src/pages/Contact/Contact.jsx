import React from 'react'
import FirstSection from '../../components/Contact/FirstSection/FirstSection'
import ContactInfo from '../../components/Contact/ContactInfo/ContactInfo'
import SendMessage from '../../components/Contact/SendMessage/SendMessage'

const Contact = () => {
  return (
    <div>
      <FirstSection/>
      <ContactInfo/>
      <SendMessage/>
    </div>
  )
}

export default Contact
