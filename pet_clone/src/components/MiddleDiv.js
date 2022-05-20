import React from 'react';
import Middle from '../middle-div.svg'

export default function MiddleDiv() {
  return (
    <div className="middle-div">
        <h3>
            Bring your best friend anywhere
        </h3>
        <p>
            Lorem ipsum dolor sit amet, consectetur adip<br></br>
            Ipsum dolor sit amet, consectetur adipis
        </p>

        <button className="btn">Find out how</button>
        
        <h3>
            What are people saying?
        </h3>

        <img src={Middle}/>

        <p>
            Lorem ipsum dolor sit amet, consectetur adip<br></br>
            Ipsum dolor sit amet, consectetur adipis
        </p>

        <button className="btn">See more</button>
    </div>
  )
}
