import SubscribePopUp from "./SubscribePopUp";
import Thanks from "./Thanks";
import EmailPref from "./EmailPref";
import Home from "./Home";
import Gift from "./Gift";
import TestForm from "./TestForm";

function App() {
  return (
    <div className="App">
    <SubscribePopUp />
    {/* <JoinUs/> */}
    <Thanks/>
    <EmailPref/>
    <Gift/>
    {/* <TestForm/> */}
    {/* <DiscountBanner/> */}
    <Home />

  

    </div>
  );
}

export default App;
