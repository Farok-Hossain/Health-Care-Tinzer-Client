import img1 from "../../images/services/image1 (2).jpg";
import img2 from "../../images/services/image1.jpg";
import img3 from "../../images/services/image2 (1).jpg";

const OurServicesData = () => {
  const icon1 = <i className="fas fa-virus"></i>;
  const icon2 = <i className="fas fa-shield-alt"></i>;
  const icon3 = <i className="fas fa-users"></i>;
  const icon4 = <i className="fas fa-users-cog"></i>;
  const icon5 = <i className="fas fa-user-md"></i>;
  const icon6 = <i className="fas fa-dna"></i>;

  return [
    {
      id: 4234,
      icon: icon1,
      name: "COVID-19 Consulting",
      desc: "The COVID-19 outbreak poses significant and evolving challenges for our communities, corporations, governments and regulators something",
      img: img1,
    },
    {
      id: 5323,
      icon: icon2,
      name: "Special Follow Up",
      desc: "Pursuant to follow-up procedures, States parties are requested to report back to the ... including originating from other treaty bodies, special procedures",
      img: img2,
    },
    {
      id: 7560,
      icon: icon3,
      name: "Dermatology",
      desc: "Dermatology is the branch of medicine dealing with the skin. It is a speciality with both medical and surgical aspects. A dermatologist is a specialist medical doctor ",
      img: img2,
    },
    {
      id: 8656,
      icon: icon4,
      name: "Mental Health",
      desc: "Donate. Our work has resulted in positive change. We have educated millions about mental health conditions and reduced barriers to treatment and service",
      img: img3,
    },
    {
      id: 2434,
      icon: icon5,
      name: "Orthopedics",
      desc: "Orthopedics is a branch of medicine that focuses on the care of the musculoskeletal system. especially those affecting the reproductive system.",
      img: img1,
    },
    {
      id: 5452,
      icon: icon6,
      name: "Gynecological",
      desc: "relating to the branch of physiology and medicine which deals with the functions and diseases specific to women and girls, especially those affecting the reproductive system.",
      img: img2,
    },
  ];
};

export default OurServicesData;
