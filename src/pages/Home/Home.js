// import { useState } from "react";
import About from "../../components/About/About";
import Appointment from "../../components/Appointment/Appointment";
import Banner from "../../components/Banner/Banner";
import BannerCard from "../../components/BannerCard/BannerCard";
import OurServices from "../../components/OurServices/OurServices";
import Solutions from "../../components/Solutions/Solutions";

const Home = () => {
  //   const [userRegistration, setUserRegistration] = useState({
  //     username: "",
  //     email: "",
  //     password: "",
  //   });
  //   const handleInput = (e) => {
  //     const name = e.target.name;
  //     const value = e.target.value;

  //     setUserRegistration({ ...userRegistration, name: "sohel" });
  //     console.log({ [name]: "hi bro" });
  //   };

  return (
    <>
      <Banner></Banner>
      <BannerCard></BannerCard>
      <About></About>
      <OurServices></OurServices>
      <Appointment></Appointment>
      <Solutions></Solutions>
      {/* <input
        type="text"
        value={userRegistration.username}
        name="username"
        onChange={handleInput}
      />
      <input
        type="text"
        value={userRegistration.email}
        name="email"
        onChange={handleInput}
      />
      <input
        type="text"
        value={userRegistration.password}
        name="password"
        onChange={handleInput}
      /> */}
    </>
  );
};

export default Home;
