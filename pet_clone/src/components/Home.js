import SubscribeBanner from "./SubscribeBanner";
import Navigation from "./Navigation";
import SubscribeHome from "./SubscribeHome";
import Footer from "./Footer";

const Home = (props) => {
  return (
    <div>
      <SubscribeBanner />
      <Navigation />
      <SubscribeHome/>
      <Footer />
    </div>
  );
}

export default Home;