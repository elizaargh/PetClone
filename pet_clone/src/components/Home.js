import SubscribeBanner from "./SubscribeBanner";
import Navigation from "./Navigation";
import Heading from "./Heading";
import SubscribeFooter from "./SubscribeFooter";
import MiddleDiv from './MiddleDiv';
import Footer from "./Footer";
import TestForm from "./TestForm";
import Layout from "./Layout";

const Home = (props) => {
  return (
    <div>
       <SubscribeBanner />
      <Navigation />
      <Heading />
      <MiddleDiv/>
      <TestForm/>
      <Footer />
    </div>
  );
}

export default Home;