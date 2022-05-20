import React from "react";
import SubscribeForm from "./SubscribeForm";
import Popup from 'reactjs-popup';
import './popUp.css';

const JoinUs = (props) => {
  const closeJoinUs = () => {props.joinUsClose(false)}
  
  return (
    <div>
      <Popup open={props.joinUsState} closeOnDocumentClick onClose={closeJoinUs}>
        <div className="modal">
          <a className="close" onClick={closeJoinUs}>&times;</a>
          <div className="header">Subscribe to stay updated</div>
          <div className="content">
            <p> To be the first to know about exciting promos & ways to clone your pet!</p>
            <SubscribeForm />
            <p><a href="">Privacy Policy</a></p>
          </div>
        </div>
      </Popup>
    </div>
  )
}
export default JoinUs;