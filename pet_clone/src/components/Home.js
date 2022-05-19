import SubscribeBanner from "./SubscribeBanner";
import Navigation from "./Navigation";
import Heading1 from "../heading1.svg"
import SubscribeHome from "./SubscribeHome";
import Footer from "./Footer";

const Home = (props) => {
  return (
    <div>
      <SubscribeBanner />
      <Navigation />
      <img src={Heading1} width="500" height="500" />
      <SubscribeHome/>
      <Footer />
    </div>
  );
}

export default Home;