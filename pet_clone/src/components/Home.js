import SubscribeBanner from "./SubscribeBanner";
import Navigation from "./Navigation";
import Heading from "./Heading";
import SubscribeFooter from "./SubscribeFooter";
import MiddleDiv from './MiddleDiv';
import Footer from "./Footer";

const Home = (props) => {
  return (
    <div>
      <SubscribeBanner />
      <Navigation />
      <Heading />
      <MiddleDiv/>
      <SubscribeFooter/>
      <Footer />
    </div>
  );
}

export default Home;