import PetLogo from "../pet-logo.svg"
import UserLogo from "../user-logo.svg"

const Navigation = (props) => {
    return (
        <div>
            <img src={PetLogo} width="60" height="60" />
            <h1>My Pet 2.0</h1>
            <img src={UserLogo} width="60" height="60" />
        </div>
    );
  }
  
  export default Navigation;