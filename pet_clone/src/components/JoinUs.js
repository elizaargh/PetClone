import React, { useState } from "react";
import Popup from 'reactjs-popup';
import './popUp.css';


const JoinUs = () => {

    return (
      <Popup
        trigger={<button className="button"> Open Modal </button>}
        modal
        nested
    >
        {close => (
        <div className="modal">
            
            <div className="header"><button className="close" onClick={close}>
            &times;
            </button> <h2> Subscribe</h2></div>
            <div className="content">
            {' '}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
            Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
            delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
            <br />    <br />
            <input placeholder="first name"></input><input placeholder="last name"></input>
            <br />    
           <input className="email" placeholder="email"></input>
            </div>
            
            <div className="subscribe">  <button className="subscribeButton">Subscribe</button></div>
            <div className="actions">
            {/* <Popup
                trigger={<button className="button"> Trigger </button>}
                position="top center"
                nested
            >
                <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                magni omnis delectus nemo, maxime molestiae dolorem numquam
                mollitia, voluptate ea, accusamus excepturi deleniti ratione
                sapiente! Laudantium, aperiam doloribus. Odit, aut.
                </span>
            </Popup> */}
            {/* <button
                className="button"
                onClick={() => {
                console.log('modal closed ');
                close();
                }}
            >
                close modal
            </button> */}
            </div>
        </div>
        )}
    </Popup>
        )
}
export default JoinUs;