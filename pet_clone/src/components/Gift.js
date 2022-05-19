import React, { useState } from "react";
import Popup from 'reactjs-popup';
import './popUp.css';


const Gift = () => {

    return (
      <Popup
        trigger={<button className="button">Gift</button>}
        modal
        nested
    >
        {close => (
        <div className="modal">
            <button className="close" onClick={close}>
            &times;
            </button> 
            <br/>
             <div className="content">Your email preferences have been saved!</div>
            <div className="header"><h2> Enjoy our gift to you! </h2></div>
            <div className="content">
            {' '}
            Copy this code to your basket to receive 20% off your order!
            <br />    <br />
            <input value="WELCOME10"></input> <button className="copyButton">Copy</button>
            <br />    
            </div>
            
            <div className="subscribe">  <button className="subscribeButton">Continue Shopping</button></div>
            <div className="actions">
          
            </div>
        </div>
        )}
    </Popup>
        )
}
export default Gift;