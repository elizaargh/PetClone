import PetLogo from "../pet-logo.svg"
import UserLogo from "../user-logo.svg"

const Navigation = (props) => {
    return (
        <nav className="nav">
            <img src={PetLogo} width="60" height="60" />
            <h1>My Pet 2.0</h1>
            <img className="userlogo" src={UserLogo} width="60" height="60" />
        </nav>
    );
  }
  
  export default Navigation;