import Facebook from "../facebook-logo.svg"
import Instagram from "../instagram-logo.svg"
import Twitter from "../twitter-logo.svg"
import Youtube from "../youtube-logo.svg"
import './App.css'

const Footer = (props) => {
    return (
        <div className="privacy">
            <p><a href="#">Privacy Policy</a></p>
            <p><a href="#">About Us</a></p>
            <p><a href="#">Contact</a></p>
            <p><a href="#">FAQ</a></p>
            <h1>My Pet 2.0</h1>
            <a href="#" className="foot"><img src={Facebook} /></a> 
            <a href="#" className="foot"><img src={Instagram} /></a> 
            <a href="#" className="foot"><img src={Twitter} /></a> 
            <a href="#" className="foot"><img src={Youtube} /></a> 
        </div>
    );
  }
  
  export default Footer;
