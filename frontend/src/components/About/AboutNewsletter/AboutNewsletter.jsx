import React from "react";
import "./AboutNewsletter.css";
import { SlEnvolopeLetter } from "react-icons/sl";

const AboutNewsletter = () => {
  return (
    <div className="AboutNewsletter">
      <div className="newsletter container-about">
        <div className="newsletter_left">
          <SlEnvolopeLetter style={{fontSize:"64px"}}/>
         <div className="newsContent">
         <h3 style={{letterSpacing:"4.8px",marginBottom:"10px",fontWeight:"400",linHeight:"24px",fontSize:"26px",lineHeight:"1.4"}}>
         OUR <br/>
         <p style={{fontWeight:"700",letterSpacing:'4.8px',linHeight:"24px"}}>NEWSLETTER!</p>
       </h3>
       <p style={{fontSize:"20px",linHeight:"24px",fontWeight:"400"}}>
         It only takes a second to be the first to find <br/> out about our latest
         news
       </p>
         </div>
        </div>
        <div className="newsletter_right">
          <input placeholder="Your email address..."/>
          <button type="submit">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default AboutNewsletter;
