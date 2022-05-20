import React, { useState } from "react";
import Popup from 'reactjs-popup';
import './popUp.css';
import { Checkbox } from 'pretty-checkbox-react';
import '@djthoms/pretty-checkbox';


const EmailPref = () => {
    
    return (
      <Popup
        trigger={<button className="button"> Email Prefs </button>}
        modal
        nested
    >
        {close => (
        <div className="modal">
            <button className="close" onClick={close}>
            &times;
            </button>
            <div className="header"><h2> Set Email Preferences</h2></div>
            <div className="content">
            {' '}
            How often do you want to<br /> hear from us?
            <br /> <br/>
            <select className="dropdown" name="selectTimes">
                <option>Weekly</option>
                <option>Fortnightly</option>
                <option>Twice a week</option>
                <option>Monthly</option>
            </select>
            <br />
            <br />
            What do you want to see?
          </div>
            
           
            <br />

        
               <div className="checkers"> 
                    <Checkbox bigger color="primary">Everything</Checkbox>
                    <Checkbox bigger animation="pulse" color="info-o">Promotions</Checkbox>
                    <br />
                    <Checkbox bigger color="warning">Pet Blog</Checkbox>
                    <Checkbox bigger animation="pulse" color="warning">DIY tips</Checkbox>
                  
                <input name="email" className="email-invisble" placeholder="email: example.gmail.com"></input>
                </div> 
             
                <div className="subscribe">  
                    <button className="subscribeButton">Set My Preferences</button>
                </div>
              <a href="#" className="popup-link">Skip to the Gift</a>
                </div>
       
        )}
    </Popup>
        )
}
export default EmailPref;