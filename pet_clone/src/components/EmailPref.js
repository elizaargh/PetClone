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
            How often do you want to hear from us?
            <br /> 
            <select name="selectTimes">
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
                    <Checkbox bigger>Promotions</Checkbox>
                    <br />
                    <Checkbox bigger>Pet Blog</Checkbox>
                    <Checkbox bigger>DIY tips</Checkbox>
                </div> 
                <br />
                <div className="subscribe">  <button className="subscribeButton">Subscribe</button></div>
            </div>
       
        )}
    </Popup>
        )
}
export default EmailPref;