import SubscribePopUp from "./SubscribePopUp";
import Thanks from "./Thanks";
import EmailPref from "./EmailPref";
import Home from "./Home";
import Gift from "./Gift";
import JoinUs from "./JoinUs";

function App() {
  return (
    <div className="App">
    <SubscribePopUp />
    <JoinUs/>
    <Thanks/>
    <EmailPref/>
    <Gift/>
    
      {/* <DiscountBanner/> */}
      <Home />
      
    {/* <TestForm/> */}
    {/* <DiscountBanner/> */}
    

  

    </div>
  );
}

export default App;
