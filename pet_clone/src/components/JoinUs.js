import React, { useState, useEffect } from "react";
import Popup from 'reactjs-popup';
import './popUp.css';
import SubscribeForm from "./SubscribeForm";


const JoinUs = () => {
  const [land, setLand] = useState("")
    
  useEffect(() => {
    console.log('hello')
  }, [])

    return (
      <Popup
        trigger={<button className="button"> Subscribe </button>}
        modal
        nested
    >
        {close => (
        <div className="modal">
            <button className="close" onClick={close}>
            &times;
            </button>
            <div className="header"> <h2> Subscribe to <br/>stay updated</h2></div>
            <div className="content">
            {' '}
            <p> To be the first to know about exciting promos & ways to clone your pet!</p>
            <br />    <br />
            <input placeholder="first name"></input><input placeholder="last name"></input>
            <br />    
           <input className="email" placeholder="email"></input>
            </div>
            
            <button className="subscribeButton">Subscribe</button>
                <div className="content"> 
         
              <a href="">Privacy Policy</a>
            </div>
        </div>
        )}
    </Popup>
        )
}
export default JoinUs;