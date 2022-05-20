import PetLogo from "../pet-logo.svg"
import UserLogo from "../user-logo.svg"

const Navigation = (props) => {
    return (
    //     <> 
    //     <div className="my-pet">      
    //         <img src={UserLogo} className="user-avatar" width="60" height="60" />
    //         <img src={PetLogo} width="60" height="60" />
        
    //     <h1 className="appName">My Pet 2.0</h1> </div>
    //    </>

        <nav className="nav">
            <img src={PetLogo} className="logo" />
            <h1>My Pet 2.0</h1>
            <a href="#"><img className="userlogo" src={UserLogo} /></a>
        </nav>
    );
  }
  
  export default Navigation;