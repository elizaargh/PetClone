import React, { useState } from "react";
import JoinUs from "./JoinUs";
import SubscribeBanner from "./SubscribeBanner";
import Navigation from "./Navigation";
import Heading from "./Heading";
import MiddleDiv from './MiddleDiv';
import Footer from "./Footer";
import TestForm from "./TestForm";
import SubscribeFooter from "./SubscribeFooter";

const Home = (props) => {
  const [joinUs, setJoinUs] = useState(true);

  const joinUsClose = () => {setJoinUs(false)};

  return (
    <div>
      <JoinUs joinUsClose={joinUsClose} joinUsState={joinUs} />
      <SubscribeBanner />
      <Navigation />
      <Heading />
      <MiddleDiv />
      <TestForm />
      <Footer />
    </div>
  );
}

export default Home;