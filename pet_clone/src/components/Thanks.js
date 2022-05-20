import React, { useState } from "react";
import Popup from 'reactjs-popup';
import './popUp.css';


const Thanks = () => {
   
    return (
      <Popup
        trigger={<button className="button"> Thankyou pop up </button>}
        modal
        nested
    >
        {close => (
        <div className="modal">
            <button className="close" onClick={close}>
            &times;
            </button>
            
            <div className="header"> <h2>🎉 Thanks Name!</h2></div>
            <div className="content">
            {' '}
           Get keen for some new ways to  <br /> bring your bestie around!
           <br />
           <br />
            <br /> Choose when you'd  <br /> want to hear from us!   <br />
        
            </div>
            
            <div className="subscribe">  <button className="subscribeButton">Set Email Preferences</button></div>
            <div className="content">
                or set this up later from your email <br/>
                <a href="#" className="popup-link">Skip to the Gift</a>
                <br/>
                <input className="invisible"></input><input className="invisible"></input>
                
                <input name="email" className="email-invisble" placeholder="email"></input>
               </div>

            
        </div>
        )}
    </Popup>
        )
}
export default Thanks;