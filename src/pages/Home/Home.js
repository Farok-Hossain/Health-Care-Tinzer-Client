// import { useState } from "react";
import About from "../../components/About/About";
import Appointment from "../../components/Appointment/Appointment";
import Banner from "../../components/Banner/Banner";
import BannerCard from "../../components/BannerCard/BannerCard";
import OurServices from "../../components/OurServices/OurServices";
import Solutions from "../../components/Solutions/Solutions";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <BannerCard></BannerCard>
      <About></About>
      <OurServices></OurServices>
      <Appointment></Appointment>
      <Solutions></Solutions>
    </>
  );
};

export default Home;
