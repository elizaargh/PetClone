import SubscribeBanner from "./SubscribeBanner";
import Navigation from "./Navigation";
import SubscribeHome from "./SubscribeHome";
import Footer from "./Footer";
import TestForm from "./TestForm";
import Layout from "./Layout";

const Home = (props) => {
  return (
    <div>
      <SubscribeBanner />
      <Navigation />
      <Layout/>
     <TestForm/>
      <Footer />
    </div>
  );
}

export default Home;