import React from "react";
import "./SendMessage.css";

const SendMessage = () => {
  return (
    <div className="container sendMessage">
      <h5>Send Us An Message</h5>
      <form>
        <div>
          <input placeholder="Your name..." />
          <input placeholder="Your mail..." />
        </div>
        <textarea/>
        <div style={{display:"flex",justifyContent:"center"}}>
        <button>SEND</button>

        </div>
      </form>
    </div>
  );
};

export default SendMessage;
