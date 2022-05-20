import PetLogo from "../pet-logo.svg"
import UserLogo from "../user-logo.svg"

const Navigation = (props) => {
    return (
        <nav className="nav">
            <img src={PetLogo} className="logo" />
            <h1>My Pet 2.0</h1>
            <img className="userlogo" src={UserLogo} />
        </nav>
    );
  }
  
  export default Navigation;