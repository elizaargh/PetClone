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
            
            <div className="header"><button className="close" onClick={close}>
            &times;
            </button> <h2> Thanks "Name"</h2></div>
            <div className="content">
            {' '}
           You are now subscribed to hear about us. 
            <br /> Choose when you want to hear from us!   <br />
            </div>
            
            <div className="subscribe">  <button className="subscribeButton">Set Email Preferences</button></div>
            <div className="content">
                or set this us later from your email <br/>
                <a href="">Skip to Gift</a></div>

            
        </div>
        )}
    </Popup>
        )
}
export default Thanks;