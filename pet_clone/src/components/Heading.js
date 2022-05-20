import React from "react";
import Heading1 from "../heading1.svg"

const Heading = (props) => {
    return (
        <div className="heading">
            <img src={Heading1}  />
            <div className="heading-text">
                <h1 className="heading-title">WHY NOT have TWO?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A eget amet ut ac.</p>
                <button className="btn">Discover more</button>
            </div>
        </div>
    );
  }
  
  export default Heading;