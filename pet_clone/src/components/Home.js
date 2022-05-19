import SubscribeBanner from "./SubscribeBanner";
import Navigation from "./Navigation";
import Heading1 from "../heading1.svg"
import SubscribeFooter from "./SubscribeFooter";
import MiddleDiv from './MiddleDiv';
import Footer from "./Footer";
import TestForm from "./TestForm";
import Layout from "./Layout";

const Home = (props) => {
  return (
    <div>
      {/* <SubscribeBanner /> */}
      <Navigation/>
      {/* <Layout/>  */}
 
      <img src={Heading1} width="500" height="500" />
      <MiddleDiv/>
      {/* <SubscribeFooter/>    */}
      <TestForm/>
      <Footer />
    </div>
  );
}

export default Home;